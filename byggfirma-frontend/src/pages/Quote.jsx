import { useState } from "react";
import api from "../api/client";

export default function Quote() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", message:"" });
  const [msg, setMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await api.post("/api/quotes", form);
      setMsg("Skickad!");
      setForm({ name:"", email:"", phone:"", message:"" });
    } catch {
      setMsg("Fel vid skickning.");
    }
  }

  return (
      <div className="max-w-xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-4">Begär offert</h2>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input className="border p-2" placeholder="Namn" value={form.name}
                 onChange={e=>setForm({...form,name:e.target.value})} required/>
          <input className="border p-2" placeholder="Email" value={form.email}
                 onChange={e=>setForm({...form,email:e.target.value})} required/>
          <input className="border p-2" placeholder="Telefon" value={form.phone}
                 onChange={e=>setForm({...form,phone:e.target.value})}/>
          <textarea className="border p-2" placeholder="Meddelande" value={form.message}
                    onChange={e=>setForm({...form,message:e.target.value})} required/>
          <button className="bg-slate-900 text-white p-2 rounded">Skicka</button>
          {msg && <p>{msg}</p>}
        </form>
      </div>
  );
}