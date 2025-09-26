import React, { useState } from "react";

export default function ContactSection(){
  const [status, setStatus] = useState("");
  const FORM_ENDPOINT = "https://formspree.io/f/mblawrww";

  async function handleSubmit(e){
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, { method:"POST", body:data, headers:{ Accept:"application/json" }});
      if (res.ok) { setStatus("sent"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="connect" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900">Connect With Us</h2>
        <p className="mt-2 text-slate-600">Send us a message — we'll reply as soon as we can.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
          <input name="name" required placeholder="Your name" className="p-3 border rounded" />
          <input name="email" type="email" required placeholder="Your email" className="p-3 border rounded" />
          <textarea name="message" rows="5" placeholder="Your message" className="p-3 border rounded" />
          <div className="flex items-center gap-4">
            <button type="submit" className="px-4 py-2 bg-gnblue text-white rounded">Send</button>
            <div>
              {status === "sending" && <span className="text-slate-600">Sending…</span>}
              {status === "sent" && <span className="text-green-600">Thanks — message sent!</span>}
              {status === "error" && <span className="text-red-600">Error — try again.</span>}
            </div>
          </div>
        </form>

        <div className="mt-6 text-sm text-slate-600">
          <p>Contact email: <a href="mailto:guardian.network@gmail.com" className="text-gnblue">guardian.network@gmail.com</a></p>
          <p>Instagram: <a className="text-gnblue" href="https://instagram.com/guardian_network" target="_blank" rel="noreferrer">@guardian_network</a></p>
        </div>
      </div>
    </section>
  );
}
