import { useState, useRef, useCallback } from "react";

const LOGO_BASE64 = "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";

const TEMPLATES = {
  approval: {
    name: "VAT Return – Approval Request",
    bannerColor: "#e8a317",
    bannerIcon: "⏳",
    bannerText: "Approval Required",
    fields: [
      { key: "DIRECTOR_NAME", label: "Director Name", placeholder: "e.g. Ecem Bocan" },
      { key: "COMPANY_NAME", label: "Company Name", placeholder: "e.g. BOCAN INTERNATIONAL LTD" },
      { key: "PERIOD_START", label: "Period Start", placeholder: "e.g. 01/11/2025" },
      { key: "PERIOD_END", label: "Period End", placeholder: "e.g. 31/01/2026" },
      { key: "SALES_EX_VAT", label: "Total Sales (ex VAT)", placeholder: "e.g. 229,574.88" },
      { key: "VAT_ON_SALES", label: "VAT on Sales (Box 1)", placeholder: "e.g. 8,252.17" },
      { key: "SALES_INC_VAT", label: "Total Sales (inc VAT)", placeholder: "e.g. 237,827.05" },
      { key: "PURCHASES_EX_VAT", label: "Total Purchases (ex VAT)", placeholder: "e.g. 8,080.64" },
      { key: "VAT_ON_PURCHASES", label: "VAT on Purchases (Box 4)", placeholder: "e.g. 1,406.94" },
      { key: "PURCHASES_INC_VAT", label: "Total Purchases (inc VAT)", placeholder: "e.g. 9,487.58" },
      { key: "NET_VAT", label: "Net VAT (Box 5)", placeholder: "e.g. 6,845.23" },
      { key: "VAT_STATUS_TEXT", label: "VAT Status Text", placeholder: "e.g. Payment due to HMRC via Direct Debit" },
      { key: "DEADLINE_DATE", label: "Deadline Date", placeholder: "e.g. 7 March 2026" },
      { key: "SENDER_NAME", label: "Sender Name", placeholder: "e.g. Ogulcan Demir" },
    ],
  },
  payment: {
    name: "VAT Submitted – Payment Required",
    bannerColor: "#c53030",
    bannerIcon: "💷",
    bannerText: "Payment Required",
    fields: [
      { key: "DIRECTOR_NAME", label: "Director Name", placeholder: "e.g. John Smith" },
      { key: "COMPANY_NAME", label: "Company Name", placeholder: "e.g. ABC LIMITED" },
      { key: "PERIOD_START", label: "Period Start", placeholder: "e.g. 01/11/2025" },
      { key: "PERIOD_END", label: "Period End", placeholder: "e.g. 31/01/2026" },
      { key: "AMOUNT", label: "Amount Due (£)", placeholder: "e.g. 1,250.00" },
      { key: "VAT_NUMBER", label: "VAT Registration Number", placeholder: "e.g. 123456789" },
      { key: "SENDER_NAME", label: "Sender Name", placeholder: "e.g. Ogulcan Demir" },
    ],
  },
  refund: {
    name: "VAT Submitted – Refund Due",
    bannerColor: "#276749",
    bannerIcon: "✓",
    bannerText: "VAT Return Submitted – Refund Due",
    fields: [
      { key: "DIRECTOR_NAME", label: "Director Name", placeholder: "e.g. Tayfur Yalcin" },
      { key: "COMPANY_NAME", label: "Company Name", placeholder: "e.g. ROCHEL LIMITED" },
      { key: "PERIOD_START", label: "Period Start", placeholder: "e.g. 01/08/2024" },
      { key: "PERIOD_END", label: "Period End", placeholder: "e.g. 31/10/2024" },
      { key: "REFUND_AMOUNT", label: "Refund Amount (£)", placeholder: "e.g. 783.26" },
      { key: "SENDER_NAME", label: "Sender Name", placeholder: "e.g. Ogulcan Demir" },
    ],
  },
};

function buildApprovalHTML(vals) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;"><tr><td style="padding:30px 20px;">
<table width="620" cellpadding="0" cellspacing="0" align="center" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
<tr><td style="background:#fff;padding:28px 40px;text-align:center;border-bottom:3px solid #1a2744;"><img src="data:image/png;base64,${LOGO_BASE64}" alt="Adamsons" width="320" style="display:inline-block;"/></td></tr>
<tr><td style="background:#e8a317;padding:12px 40px;text-align:center;"><span style="color:#fff;font-size:13px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;">⏳ Approval Required</span></td></tr>
<tr><td style="padding:36px 40px 20px;">
<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#2d3748;">Dear <strong style="color:#1a2744;">${vals.DIRECTOR_NAME || "{{DIRECTOR_NAME}}"}</strong>,</p>
<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#2d3748;">I hope you're well. Please find below the VAT return figures for <strong>${vals.COMPANY_NAME || "{{COMPANY_NAME}}"}</strong> for the period <strong>${vals.PERIOD_START || "{{PERIOD_START}}"}</strong> to <strong>${vals.PERIOD_END || "{{PERIOD_END}}"}</strong>. Kindly review and confirm approval for us to submit to HMRC.</p>
</td></tr>
<tr><td style="padding:0 40px 10px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;overflow:hidden;border:1px solid #e2e8f0;">
<tr><td colspan="2" style="background:#1a2744;padding:12px 20px;"><span style="color:#fff;font-size:14px;font-weight:bold;">SALES</span></td></tr>
<tr><td style="padding:12px 20px;font-size:14px;color:#4a5568;border-bottom:1px solid #e2e8f0;">Total sales (ex VAT)</td><td style="padding:12px 20px;font-size:14px;color:#2d3748;font-weight:bold;text-align:right;border-bottom:1px solid #e2e8f0;">£${vals.SALES_EX_VAT || "0.00"}</td></tr>
<tr><td style="padding:12px 20px;font-size:14px;color:#4a5568;border-bottom:1px solid #e2e8f0;">VAT on sales (Box 1)</td><td style="padding:12px 20px;font-size:14px;color:#2d3748;font-weight:bold;text-align:right;border-bottom:1px solid #e2e8f0;">£${vals.VAT_ON_SALES || "0.00"}</td></tr>
<tr style="background:#f7fafc;"><td style="padding:12px 20px;font-size:14px;color:#2d3748;font-weight:bold;">Total sales (inc VAT)</td><td style="padding:12px 20px;font-size:14px;color:#1a2744;font-weight:bold;text-align:right;">£${vals.SALES_INC_VAT || "0.00"}</td></tr>
</table></td></tr>
<tr><td style="padding:10px 40px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;overflow:hidden;border:1px solid #e2e8f0;">
<tr><td colspan="2" style="background:#1a2744;padding:12px 20px;"><span style="color:#fff;font-size:14px;font-weight:bold;">PURCHASES</span></td></tr>
<tr><td style="padding:12px 20px;font-size:14px;color:#4a5568;border-bottom:1px solid #e2e8f0;">Total purchases (ex VAT)</td><td style="padding:12px 20px;font-size:14px;color:#2d3748;font-weight:bold;text-align:right;border-bottom:1px solid #e2e8f0;">£${vals.PURCHASES_EX_VAT || "0.00"}</td></tr>
<tr><td style="padding:12px 20px;font-size:14px;color:#4a5568;border-bottom:1px solid #e2e8f0;">VAT on purchases (Box 4)</td><td style="padding:12px 20px;font-size:14px;color:#2d3748;font-weight:bold;text-align:right;border-bottom:1px solid #e2e8f0;">£${vals.VAT_ON_PURCHASES || "0.00"}</td></tr>
<tr style="background:#f7fafc;"><td style="padding:12px 20px;font-size:14px;color:#2d3748;font-weight:bold;">Total purchases (inc VAT)</td><td style="padding:12px 20px;font-size:14px;color:#1a2744;font-weight:bold;text-align:right;">£${vals.PURCHASES_INC_VAT || "0.00"}</td></tr>
</table></td></tr>
<tr><td style="padding:10px 40px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;overflow:hidden;border:2px solid #1a2744;background:#f0f4ff;">
<tr><td style="padding:16px 20px;font-size:14px;color:#1a2744;font-weight:bold;">Net VAT (Box 5)</td><td style="padding:16px 20px;font-size:20px;color:#1a2744;font-weight:bold;text-align:right;">£${vals.NET_VAT || "0.00"}</td></tr>
<tr><td colspan="2" style="padding:0 20px 14px;font-size:13px;color:#4a5568;">${vals.VAT_STATUS_TEXT || ""}</td></tr>
</table></td></tr>
<tr><td style="padding:16px 40px 10px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;background:#fff8e5;border:1px solid #e8a317;">
<tr><td style="padding:14px 20px;"><span style="font-size:13px;font-weight:bold;color:#92610a;text-transform:uppercase;">⚠ Submission Deadline</span>
<p style="margin:6px 0 0;font-size:14px;color:#2d3748;line-height:1.5;">The HMRC submission deadline for this quarter is <strong>${vals.DEADLINE_DATE || "{{DEADLINE_DATE}}"}</strong>. Please confirm approval at your earliest convenience.</p></td></tr>
</table></td></tr>
<tr><td style="padding:20px 40px 10px;">
<p style="margin:0 0 12px;font-size:14px;font-weight:bold;color:#1a2744;">Please confirm:</p>
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td style="padding:6px 0;font-size:14px;color:#4a5568;">☐  You approve the above VAT figures for submission</td></tr>
<tr><td style="padding:6px 0;font-size:14px;color:#4a5568;">☐  Your bank details for the refund are unchanged</td></tr>
<tr><td style="padding:6px 0;font-size:14px;color:#4a5568;">☐  No additional adjustments to apply</td></tr>
</table></td></tr>
<tr><td style="padding:24px 40px 10px;text-align:center;"><p style="margin:0;font-size:13px;color:#718096;">Once you reply <strong>"Approved"</strong>, we'll submit the return to HMRC.</p></td></tr>
<tr><td style="padding:16px 40px 30px;">
<p style="margin:0;font-size:14px;line-height:1.6;color:#4a5568;">If you have any questions or require the detailed working papers, please let me know.</p>
<p style="margin:20px 0 0;font-size:14px;color:#2d3748;">Kind regards,</p>
<p style="margin:4px 0 0;font-size:14px;font-weight:bold;color:#1a2744;">${vals.SENDER_NAME || "{{SENDER_NAME}}"}</p>
<p style="margin:2px 0 0;font-size:13px;color:#718096;">Adamsons City Accountants</p></td></tr>
${footerHTML()}
</table></td></tr></table></body></html>`;
}

function buildPaymentHTML(vals) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;"><tr><td style="padding:30px 20px;">
<table width="620" cellpadding="0" cellspacing="0" align="center" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
<tr><td style="background:#fff;padding:28px 40px;text-align:center;border-bottom:3px solid #1a2744;"><img src="data:image/png;base64,${LOGO_BASE64}" alt="Adamsons" width="320" style="display:inline-block;"/></td></tr>
<tr><td style="background:#c53030;padding:12px 40px;text-align:center;"><span style="color:#fff;font-size:13px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;">💷 Payment Required</span></td></tr>
<tr><td style="padding:36px 40px 20px;">
<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#2d3748;">Dear <strong style="color:#1a2744;">${vals.DIRECTOR_NAME || "{{DIRECTOR_NAME}}"}</strong>,</p>
<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#2d3748;">Thank you for approving your VAT return. <strong>${vals.COMPANY_NAME || "{{COMPANY_NAME}}"}</strong> VAT return for the period <strong>${vals.PERIOD_START || "{{PERIOD_START}}"}</strong> to <strong>${vals.PERIOD_END || "{{PERIOD_END}}"}</strong> has been successfully submitted.</p>
</td></tr>
<tr><td style="padding:0 40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;overflow:hidden;border:2px solid #c53030;background:#fff5f5;">
<tr><td style="padding:20px;text-align:center;"><span style="font-size:13px;color:#c53030;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Amount Due to HMRC</span>
<p style="margin:8px 0 0;font-size:32px;font-weight:bold;color:#c53030;">£${vals.AMOUNT || "0.00"}</p></td></tr>
</table></td></tr>
<tr><td style="padding:0 40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;background:#ebf8ff;border:1px solid #90cdf4;">
<tr><td style="padding:14px 20px;"><span style="font-size:13px;font-weight:bold;color:#2b6cb0;">ℹ Direct Debit</span>
<p style="margin:6px 0 0;font-size:14px;color:#2d3748;line-height:1.5;">If you have already set up a Direct Debit with HMRC for VAT payments, HMRC will take the payment on the <strong>third banking day</strong> after the seven extra calendar days from your return submission date.</p></td></tr>
</table></td></tr>
<tr><td style="padding:0 40px 10px;">
<p style="margin:0 0 14px;font-size:15px;font-weight:bold;color:#1a2744;">Online Payment Instructions</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;overflow:hidden;border:1px solid #e2e8f0;">
<tr><td style="padding:14px 20px;background:#f7fafc;border-bottom:1px solid #e2e8f0;"><table width="100%"><tr><td width="36" style="vertical-align:top;"><span style="display:inline-block;width:26px;height:26px;border-radius:50%;background:#1a2744;color:#fff;font-size:13px;font-weight:bold;text-align:center;line-height:26px;">1</span></td><td style="font-size:14px;color:#2d3748;padding-left:8px;">Visit the <strong>HMRC online payment service</strong> and click <strong>"No, pay without signing in"</strong></td></tr></table></td></tr>
<tr><td style="padding:14px 20px;border-bottom:1px solid #e2e8f0;"><table width="100%"><tr><td width="36" style="vertical-align:top;"><span style="display:inline-block;width:26px;height:26px;border-radius:50%;background:#1a2744;color:#fff;font-size:13px;font-weight:bold;text-align:center;line-height:26px;">2</span></td><td style="font-size:14px;color:#2d3748;padding-left:8px;">Select <strong>"VAT bill"</strong></td></tr></table></td></tr>
<tr><td style="padding:14px 20px;background:#f7fafc;border-bottom:1px solid #e2e8f0;"><table width="100%"><tr><td width="36" style="vertical-align:top;"><span style="display:inline-block;width:26px;height:26px;border-radius:50%;background:#1a2744;color:#fff;font-size:13px;font-weight:bold;text-align:center;line-height:26px;">3</span></td><td style="font-size:14px;color:#2d3748;padding-left:8px;">Enter VAT Registration Number: <strong style="color:#1a2744;font-size:15px;">${vals.VAT_NUMBER || "{{VAT_NUMBER}}"}</strong></td></tr></table></td></tr>
<tr><td style="padding:14px 20px;border-bottom:1px solid #e2e8f0;"><table width="100%"><tr><td width="36" style="vertical-align:top;"><span style="display:inline-block;width:26px;height:26px;border-radius:50%;background:#1a2744;color:#fff;font-size:13px;font-weight:bold;text-align:center;line-height:26px;">4</span></td><td style="font-size:14px;color:#2d3748;padding-left:8px;">Enter amount: <strong style="color:#c53030;font-size:15px;">£${vals.AMOUNT || "0.00"}</strong></td></tr></table></td></tr>
<tr><td style="padding:14px 20px;background:#f7fafc;"><table width="100%"><tr><td width="36" style="vertical-align:top;"><span style="display:inline-block;width:26px;height:26px;border-radius:50%;background:#1a2744;color:#fff;font-size:13px;font-weight:bold;text-align:center;line-height:26px;">5</span></td><td style="font-size:14px;color:#2d3748;padding-left:8px;">Choose your payment method and proceed</td></tr></table></td></tr>
</table></td></tr>
<tr><td style="padding:16px 40px 10px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;background:#fff8e5;border:1px solid #e8a317;">
<tr><td style="padding:14px 20px;"><span style="font-size:13px;font-weight:bold;color:#92610a;text-transform:uppercase;">⚠ Important Notes</span>
<p style="margin:8px 0 4px;font-size:13px;color:#4a5568;">• Non-refundable fee for corporate credit/debit card payments.</p>
<p style="margin:4px 0;font-size:13px;color:#4a5568;">• Provide your email for a payment receipt.</p>
<p style="margin:4px 0;font-size:13px;color:#4a5568;">• <strong>Please send us the payment receipt</strong> after completing payment.</p></td></tr>
</table></td></tr>
<tr><td style="padding:20px 40px 30px;">
<p style="margin:0 0 20px;font-size:14px;color:#4a5568;">If you have any questions or need further assistance, please do not hesitate to contact us.</p>
<p style="margin:0;font-size:14px;color:#2d3748;">Kind regards,</p>
<p style="margin:4px 0 0;font-size:14px;font-weight:bold;color:#1a2744;">${vals.SENDER_NAME || "{{SENDER_NAME}}"}</p>
<p style="margin:2px 0 0;font-size:13px;color:#718096;">Adamsons City Accountants</p></td></tr>
${footerHTML()}
</table></td></tr></table></body></html>`;
}

function buildRefundHTML(vals) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;"><tr><td style="padding:30px 20px;">
<table width="620" cellpadding="0" cellspacing="0" align="center" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
<tr><td style="background:#fff;padding:28px 40px;text-align:center;border-bottom:3px solid #1a2744;"><img src="data:image/png;base64,${LOGO_BASE64}" alt="Adamsons" width="320" style="display:inline-block;"/></td></tr>
<tr><td style="background:#276749;padding:12px 40px;text-align:center;"><span style="color:#fff;font-size:13px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;">✓ VAT Return Submitted – Refund Due</span></td></tr>
<tr><td style="padding:36px 40px 20px;">
<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#2d3748;">Dear <strong style="color:#1a2744;">${vals.DIRECTOR_NAME || "{{DIRECTOR_NAME}}"}</strong>,</p>
<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#2d3748;">Thank you for approving the <strong>${vals.COMPANY_NAME || "{{COMPANY_NAME}}"}</strong> VAT return for the period <strong>${vals.PERIOD_START || "{{PERIOD_START}}"}</strong> to <strong>${vals.PERIOD_END || "{{PERIOD_END}}"}</strong>.</p>
<p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#2d3748;">We have successfully submitted the VAT return. According to the return, you will be claiming the following amount from HMRC:</p>
</td></tr>
<tr><td style="padding:0 40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;overflow:hidden;border:2px solid #276749;background:#f0fff4;">
<tr><td style="padding:20px;text-align:center;"><span style="font-size:13px;color:#276749;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Refund Amount from HMRC</span>
<p style="margin:8px 0 0;font-size:32px;font-weight:bold;color:#276749;">£${vals.REFUND_AMOUNT || "0.00"}</p></td></tr>
</table></td></tr>
<tr><td style="padding:0 40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="border-radius:6px;background:#ebf8ff;border:1px solid #90cdf4;">
<tr><td style="padding:14px 20px;"><span style="font-size:13px;font-weight:bold;color:#2b6cb0;">ℹ Refund Processing</span>
<p style="margin:6px 0 0;font-size:14px;color:#2d3748;line-height:1.5;">If your bank details are available on the system, HMRC will make the payment directly to your bank. HMRC will process the payment on the <strong>third banking day</strong> after the additional seven calendar days from the date the return was submitted.</p></td></tr>
</table></td></tr>
<tr><td style="padding:10px 40px 30px;">
<p style="margin:0 0 20px;font-size:14px;color:#4a5568;">If you require any further information or documentation, please do not hesitate to contact me.</p>
<p style="margin:0;font-size:14px;color:#2d3748;">Kind regards,</p>
<p style="margin:4px 0 0;font-size:14px;font-weight:bold;color:#1a2744;">${vals.SENDER_NAME || "{{SENDER_NAME}}"}</p>
<p style="margin:2px 0 0;font-size:13px;color:#718096;">Adamsons City Accountants</p></td></tr>
${footerHTML()}
</table></td></tr></table></body></html>`;
}

function footerHTML() {
  return `<tr><td style="background:#1a2744;padding:28px 40px;">
<table width="100%"><tr><td style="font-size:12px;line-height:1.7;color:#a0aec0;">
<strong style="color:#fff;">Adamsons City Accountants Ltd</strong><br/>7 Lewisham Way, London, SE14 6PP<br/>T: 020 8554 4449 | 020 3290 9646<br/>E: admin@adamsons.uk.com | W: adamsons.uk.com</td></tr>
<tr><td style="padding-top:16px;border-top:1px solid #2d3e5e;"><p style="margin:8px 0 0;font-size:10px;line-height:1.6;color:#718096;">
Registered in England and Wales. Company Registration Number: 11550295. VAT Registration Number: 370404916.<br/><br/>
This e-mail and any attachments are confidential and intended solely for the addressee. If you are not the addressee, please notify the sender immediately and delete this e-mail. We accept no liability for viruses.</p></td></tr></table></td></tr>`;
}

const BUILDERS = {
  approval: buildApprovalHTML,
  payment: buildPaymentHTML,
  refund: buildRefundHTML,
};

export default function AdamsonsTemplateGenerator() {
  const [activeTemplate, setActiveTemplate] = useState("approval");
  const [values, setValues] = useState({});
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef(null);

  const template = TEMPLATES[activeTemplate];

  const handleChange = useCallback((key, val) => {
    setValues((prev) => ({ ...prev, [key]: val }));
    setCopied(false);
  }, []);

  const handleTemplateChange = useCallback((key) => {
    setActiveTemplate(key);
    setValues({});
    setCopied(false);
    setShowPreview(false);
  }, []);

  const generatedHTML = BUILDERS[activeTemplate](values);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(generatedHTML);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = generatedHTML;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  }, [generatedHTML]);

  const tabStyle = (key) => ({
    padding: "10px 16px",
    border: "none",
    borderBottom: activeTemplate === key ? "3px solid #1a2744" : "3px solid transparent",
    background: activeTemplate === key ? "#f0f4ff" : "transparent",
    color: activeTemplate === key ? "#1a2744" : "#718096",
    fontWeight: activeTemplate === key ? "700" : "400",
    fontSize: "13px",
    cursor: "pointer",
    transition: "all 0.2s",
    whiteSpace: "nowrap",
  });

  const bannerColors = {
    approval: "#e8a317",
    payment: "#c53030",
    refund: "#276749",
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <div style={{ background: "#1a2744", padding: "20px 24px", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#1a2744", fontSize: 18 }}>A</div>
        <div>
          <div style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>Adamsons Email Template Generator</div>
          <div style={{ color: "#a0aec0", fontSize: 12, marginTop: 2 }}>Formu doldurun → HTML kopyalayın → Gmail'e yapıştırın</div>
        </div>
      </div>

      <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", display: "flex", gap: 0, overflowX: "auto" }}>
        {Object.entries(TEMPLATES).map(([key, t]) => (
          <button key={key} onClick={() => handleTemplateChange(key)} style={tabStyle(key)}>
            <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: bannerColors[key], marginRight: 8 }}></span>
            {t.name}
          </button>
        ))}
      </div>

      <div style={{ background: "#fff", padding: "24px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px" }}>
          {template.fields.map((f) => (
            <div key={f.key} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4a5568", textTransform: "uppercase", letterSpacing: 0.5 }}>{f.label}</label>
              <input
                type="text"
                placeholder={f.placeholder}
                value={values[f.key] || ""}
                onChange={(e) => handleChange(f.key, e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: 6,
                  fontSize: 14,
                  outline: "none",
                  transition: "border 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#1a2744")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "#f7fafc", padding: "16px 24px", display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <button
          onClick={handleCopy}
          style={{
            padding: "10px 24px",
            background: copied ? "#276749" : "#1a2744",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.2s",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {copied ? "✓ Kopyalandı!" : "📋 HTML Kopyala"}
        </button>
        <button
          onClick={() => setShowPreview(!showPreview)}
          style={{
            padding: "10px 24px",
            background: "#fff",
            color: "#1a2744",
            border: "2px solid #1a2744",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {showPreview ? "Önizlemeyi Gizle" : "👁 Önizleme"}
        </button>
        <span style={{ fontSize: 12, color: "#718096", marginLeft: "auto" }}>
          Gmail → Compose → HTML Inserter eklentisi → Yapıştır → Gönder
        </span>
      </div>

      {showPreview && (
        <div style={{ background: "#e2e8f0", padding: "24px", borderRadius: "0 0 12px 12px" }}>
          <div style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <iframe
              ref={previewRef}
              srcDoc={generatedHTML}
              style={{ width: "100%", height: 700, border: "none" }}
              title="Email Preview"
            />
          </div>
        </div>
      )}

      {!showPreview && (
        <div style={{ borderRadius: "0 0 12px 12px", overflow: "hidden" }}></div>
      )}
    </div>
  );
}
