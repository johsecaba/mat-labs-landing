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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim().slice(0, 2000);
    const subject = `MAT Labs demo request — ${organization.replace(/[\r\n]/g, " ")}`.slice(
      0,
      180,
    );
    const body = [
      `Name: ${name}`,
      `Organization: ${organization}`,
      `Email: ${email}`,
      `Interest: ${interest}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${demoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening an email draft. Nothing was sent to a server.");
  }

  return (
    <form
      action={`mailto:${demoEmail}`}
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
      className="grid gap-8"
    >
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
        <button type="submit" className="btn btn-solid">
          Request a demo
        </button>
        <p role="status" className="min-h-6 text-sm text-steel-on-dark">
          {status}
        </p>
      </div>
    </form>
  );
}
