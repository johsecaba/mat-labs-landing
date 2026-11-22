import { NextResponse } from "next/server";
import { demoEmail } from "@/lib/site";

const clean = (v: unknown, max: number) =>
  String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields.
  if (clean(data.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(data.name, 120);
  const organization = clean(data.organization, 160);
  const email = clean(data.email, 200);
  const interest = clean(data.interest, 80);
  const message = String(data.message ?? "").trim().slice(0, 4000);
  const languages: Record<string, string> = { en: "English", ja: "Japanese", de: "German", ko: "Korean" };
  const localeCode = clean(data.locale, 8);
  const language = languages[localeCode] ? `${languages[localeCode]} (${localeCode})` : "English (en)";

  if (!name || !organization || !interest || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const text = [
    `Name: ${name}`,
    `Organization: ${organization}`,
    `Email: ${email}`,
    `Interest: ${interest}`,
    `Language: ${language}`,
    "",
    message,
  ].join("\n");

  const html = `<table style="font-family:Arial,sans-serif;font-size:14px">
<tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
<tr><td><b>Organization</b></td><td>${esc(organization)}</td></tr>
<tr><td><b>Email</b></td><td>${esc(email)}</td></tr>
<tr><td><b>Interest</b></td><td>${esc(interest)}</td></tr>
<tr><td><b>Language</b></td><td>${esc(language)}</td></tr>
</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${esc(message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "MAT Labs website <demo@mat.co>",
      to: [demoEmail],
      reply_to: email,
      subject: `Demo request: ${organization} (${interest})`.slice(0, 180),
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("resend_error", res.status, await res.text());
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
