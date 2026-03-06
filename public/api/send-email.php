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

$data = json_decode(file_get_contents('php://input'), true);

$to = filter_var($data['to'] ?? '', FILTER_SANITIZE_EMAIL);
$subject = $data['subject'] ?? '';
$htmlBody = $data['html'] ?? '';
$from = 'admin@adamsons.uk.com';

if (!$to || !filter_var($to, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Invalid recipient email']);
    exit;
}

if (!$subject || !$htmlBody) {
    echo json_encode(['success' => false, 'error' => 'Missing subject or body']);
    exit;
}

$boundary = md5(time());

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Adamsons Accountants <$from>\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "X-Mailer: Adamsons-Email-Template\r\n";

$success = mail($to, $subject, $htmlBody, $headers);

echo json_encode(['success' => $success]);
