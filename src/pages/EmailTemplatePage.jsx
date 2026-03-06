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

      <div style={{ background: "#fff", margin: "24px 0", borderRadius: 12, border: "1px solid #e2e8f0", overflow: "hidden" }}>
        <div style={{ background: "#1a2744", padding: "16px 24px" }}>
          <div style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>How to Use</div>
        </div>
        <div style={{ padding: "20px 24px" }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1a2744", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>1. Install Chrome Extension</div>
            <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.6, margin: 0 }}>
              Install the <strong>"Insert and Send HTML with Gmail"</strong> extension from the Chrome Web Store using the link below:
            </p>
            <a
              href="https://chromewebstore.google.com/detail/insert-and-send-html-with/bcflbfdlpegakpncdgmejelcolhmfkjh?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 10,
                padding: "10px 20px",
                background: "#4285f4",
                color: "#fff",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              Open in Chrome Web Store
            </a>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1a2744", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>2. Select a Template and Fill the Form</div>
            <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.6, margin: 0 }}>
              Choose one of the 3 templates above (VAT Approval, Payment Required or Refund Due). Fill in all the required fields. Use the Preview button to check how the email will look before copying.
            </p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1a2744", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>3. Copy the HTML</div>
            <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.6, margin: 0 }}>
              Click the <strong>"HTML Kopyala"</strong> button. The generated email HTML code will be copied to your clipboard.
            </p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1a2744", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>4. Open Gmail and Compose a New Email</div>
            <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.6, margin: 0 }}>
              Open Gmail and click the <strong>"Compose"</strong> button. Enter the recipient's email address and subject line.
            </p>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1a2744", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>5. Use the HTML Extension</div>
            <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.6, margin: 0 }}>
              At the bottom of the Compose window, click the <strong>{"<>"}</strong> (HTML) icon added by the extension. Paste the copied HTML code into the text box and click <strong>"Insert HTML"</strong>.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#1a2744", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>6. Send</div>
            <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.6, margin: 0 }}>
              Make sure the email content looks correct, then click <strong>"Send"</strong>. Your professional HTML email will be delivered!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
