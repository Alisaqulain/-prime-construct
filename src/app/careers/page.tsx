"use client";

import { FormEvent, useState } from "react";
import { jobs } from "@/lib/data";

export default function CareersPage() {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const resumeFile = formData.get("resume") as File | null;
    let resumeBase64 = "";
    let resumeName = "";
    if (resumeFile && resumeFile.size > 0) {
      const buf = await resumeFile.arrayBuffer();
      const bytes = new Uint8Array(buf);
      let binary = "";
      bytes.forEach((b) => (binary += String.fromCharCode(b)));
      resumeBase64 = btoa(binary);
      resumeName = resumeFile.name;
    }

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      message: formData.get("message"),
      resumeBase64,
      resumeName,
    };
    const response = await fetch("/api/careers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(response.ok ? "Application submitted successfully." : "Submission failed. Try again.");
    event.currentTarget.reset();
  }

  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Careers</h1>
      <p className="mt-3 max-w-2xl text-white/75">
        Join a high-performance team transforming how modern construction finishing is delivered.
      </p>

      <div className="mt-8 grid gap-4">
        {jobs.map((job) => (
          <article key={job.id} className="glass-card p-5">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="mt-1 text-sm text-[#D4AF37]">
              {job.location} • {job.type}
            </p>
            <p className="mt-2 text-sm text-white/75">{job.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Culture</h2>
          <p className="mt-3 text-white/75">
            We combine technical depth with execution speed. Teams own outcomes, solve field-level
            problems, and build products and systems that contractors trust.
          </p>
        </div>

        <form onSubmit={onSubmit} className="glass-card space-y-4 p-6">
          <h2 className="text-2xl font-semibold">Apply Now</h2>
          <input required name="name" placeholder="Full Name" className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <input required name="email" type="email" placeholder="Email" className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <input required name="role" placeholder="Role you're applying for" className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <textarea required name="message" placeholder="Cover note" className="h-28 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <input name="resume" type="file" accept=".pdf,.doc,.docx" className="w-full text-sm text-white/80" />
          <button className="rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-black">Submit Application</button>
          {status ? <p className="text-sm text-white/80">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
