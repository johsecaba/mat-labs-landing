"use client";

import { useState, type FormEvent } from "react";
import { demoEmail } from "@/lib/site";

const interests = [
  "Autonomous cars",
  "Autonomous drones",
  "Robots and androids",
  "Intelligent CCTV",
  "Smart cities",
  "Biometric payments",
  "Other",
] as const;

export function DemoForm() {
  const [status, setStatus] = useState("");

  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(
      ["name", "organization", "email", "interest", "message", "website"].map((k) => [
        k,
        String(data.get(k) ?? "").trim(),
      ]),
    );

    setSending(true);
    setStatus("Sending…");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("Thanks. Your request was sent. We'll be in touch shortly.");
    } catch {
      // Fallback: open a pre-filled draft in the visitor's mail app.
      const subject = `MAT Labs demo request: ${payload.organization}`.slice(0, 180);
      const body = [
        `Name: ${payload.name}`,
        `Organization: ${payload.organization}`,
        `Email: ${payload.email}`,
        `Interest: ${payload.interest}`,
        "",
        payload.message.slice(0, 2000),
      ].join("\n");
      window.location.href = `mailto:${demoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus(`We couldn't send it directly, so we opened an email to ${demoEmail}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-8"
    >
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="demo-website">Website</label>
        <input id="demo-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="demo-name">
            Name
          </label>
          <input
            id="demo-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="field"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="demo-organization">
            Organization
          </label>
          <input
            id="demo-organization"
            name="organization"
            type="text"
            autoComplete="organization"
            required
            className="field"
          />
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="demo-email">
            Work email
          </label>
          <input
            id="demo-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="demo-interest">
            Interest
          </label>
          <select
            id="demo-interest"
            name="interest"
            required
            defaultValue=""
            className="field"
          >
            <option value="" disabled>
              Select a market
            </option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="demo-message">
          What should the system see?
        </label>
        <textarea
          id="demo-message"
          name="message"
          required
          rows={5}
          className="field resize-y"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <button type="submit" className="btn btn-solid" disabled={sending}>
          {sending ? "Sending…" : "Request a demo"}
        </button>
        <p role="status" className="min-h-6 text-sm text-steel-on-dark">
          {status}
        </p>
      </div>
    </form>
  );
}
