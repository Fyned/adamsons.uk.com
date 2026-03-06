<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/phpmailer/Exception.php';
require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$ACCOUNTS = [
    'admin@adamsons.uk.com'          => 'London-748596',
    'info@adamsons.uk.com'           => 'London-748596',
    'payroll@adamsons.uk.com'        => 'London-748596',
    'selfassessment@adamsons.uk.com' => 'London-748596',
    'latif@adamsons.uk.com'          => 'London-748596',
];

$to      = filter_var($_POST['to'] ?? '', FILTER_SANITIZE_EMAIL);
$subject = $_POST['subject'] ?? '';
$html    = $_POST['html'] ?? '';
$from    = $_POST['from'] ?? '';

if (!$to || !filter_var($to, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Invalid recipient email']);
    exit;
}

if (!$subject || !$html) {
    echo json_encode(['success' => false, 'error' => 'Missing subject or body']);
    exit;
}

if (!isset($ACCOUNTS[$from])) {
    echo json_encode(['success' => false, 'error' => 'Invalid sender account']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $from;
    $mail->Password   = $ACCOUNTS[$from];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($from, 'Adamsons Accountants');
    $mail->addAddress($to);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $html;

    if (!empty($_FILES['attachments'])) {
        $files = $_FILES['attachments'];
        $count = is_array($files['name']) ? count($files['name']) : 1;

        for ($i = 0; $i < $count; $i++) {
            $name = is_array($files['name']) ? $files['name'][$i] : $files['name'];
            $tmp  = is_array($files['tmp_name']) ? $files['tmp_name'][$i] : $files['tmp_name'];
            $err  = is_array($files['error']) ? $files['error'][$i] : $files['error'];

            if ($err === UPLOAD_ERR_OK && is_uploaded_file($tmp)) {
                $mail->addAttachment($tmp, $name);
            }
        }
    }

    $mail->send();

    // Save to Sent folder via IMAP so it appears in webmail/other clients
    $imapStatus = 'skipped';
    if (function_exists('imap_open')) {
        $server = '{imap.hostinger.com:993/imap/ssl}';
        $imap = @imap_open($server . 'INBOX', $from, $ACCOUNTS[$from]);
        if ($imap) {
            // Find the actual Sent folder name
            $folders = @imap_list($imap, $server, '*');
            $sentFolder = null;
            if ($folders) {
                foreach ($folders as $f) {
                    $name = str_replace($server, '', $f);
                    if (preg_match('/sent/i', $name)) {
                        $sentFolder = $f;
                        break;
                    }
                }
            }
            if ($sentFolder) {
                $msg = $mail->getSentMIMEMessage();
                $saved = @imap_append($imap, $sentFolder, $msg, "\\Seen");
                $imapStatus = $saved ? 'saved' : 'append_failed: ' . imap_last_error();
            } else {
                $imapStatus = 'no_sent_folder. folders: ' . json_encode(
                    $folders ? array_map(function($f) use ($server) {
                        return str_replace($server, '', $f);
                    }, $folders) : []
                );
            }
            @imap_close($imap);
        } else {
            $imapStatus = 'connect_failed: ' . imap_last_error();
        }
    } else {
        $imapStatus = 'imap_extension_not_available';
    }

    echo json_encode(['success' => true, 'sent_folder' => $imapStatus]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
