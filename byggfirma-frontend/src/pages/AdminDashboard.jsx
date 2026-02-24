import { useEffect, useState } from "react";
import api from "../api/client";

export default function AdminDashboard() {
    const [items,setItems]=useState([]);

    async function load(){
        const res=await api.get("/api/admin/quotes");
        setItems(res.data);
    }

    async function markHandled(id){
        await api.patch(`/api/admin/quotes/${id}/handled`);
        load();
    }

    async function remove(id){
        await api.delete(`/api/admin/quotes/${id}`);
        load();
    }

    useEffect(()=>{ load(); },[]);

    return (
        <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-2xl font-bold mb-6">Adminpanel</h2>
            {items.map(q=>(
                <div key={q.id} className="border p-4 mb-4 bg-white">
                    <div className="font-bold">{q.name}</div>
                    <div className="text-sm text-slate-600">{q.email}</div>
                    <p className="mt-2">{q.message}</p>
                    <div className="mt-3 flex gap-2">
                        {!q.handled && <button onClick={()=>markHandled(q.id)} className="bg-green-600 text-white px-3 py-1 rounded">Markera hanterad</button>}
                        <button onClick={()=>remove(q.id)} className="bg-red-600 text-white px-3 py-1 rounded">Ta bort</button>
                    </div>
                </div>
            ))}
        </div>
    );
}