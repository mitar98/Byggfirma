import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { setAuth } from "../api/client";

export default function AdminLogin() {
    const [user,setUser]=useState("admin");
    const [pass,setPass]=useState("admin123");
    const [error,setError]=useState("");
    const navigate=useNavigate();

    async function login(e){
        e.preventDefault();
        setAuth(user,pass);
        try{
            await api.get("/api/admin/quotes");
            navigate("/admin/dashboard");
        }catch{
            setError("Fel login.");
            sessionStorage.removeItem("basic_auth");
        }
    }

    return (
        <div className="max-w-md mx-auto py-12">
            <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
            <form onSubmit={login} className="flex flex-col gap-3">
                <input className="border p-2" value={user} onChange={e=>setUser(e.target.value)} />
                <input type="password" className="border p-2" value={pass} onChange={e=>setPass(e.target.value)} />
                <button className="bg-slate-900 text-white p-2 rounded">Logga in</button>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
}