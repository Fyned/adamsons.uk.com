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
    if (function_exists('imap_open')) {
        $sentPath = '{imap.hostinger.com:993/imap/ssl}Sent';
        $imap = @imap_open($sentPath, $from, $ACCOUNTS[$from]);
        if ($imap) {
            @imap_append($imap, $sentPath, $mail->getSentMIMEMessage(), "\\Seen");
            @imap_close($imap);
        }
    }

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
