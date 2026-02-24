import { NavLink } from "react-router-dom";

function linkClass({ isActive }) {
    return [
        "text-sm font-medium px-3 py-2 rounded-lg transition",
        isActive
            ? "bg-slate-900 text-white"
            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100",
    ].join(" ");
}

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="font-bold tracking-tight text-slate-900">
                    Scandinavian Services AB
                </div>

                <nav className="flex items-center gap-1">
                    <NavLink to="/" className={linkClass}>
                        Hem
                    </NavLink>
                    <NavLink to="/tjanster" className={linkClass}>
                        Tjänster
                    </NavLink>
                    <NavLink to="/projekt" className={linkClass}>
                        Projekt
                    </NavLink>
                    <NavLink to="/offert" className={linkClass}>
                        Offert
                    </NavLink>
                    <NavLink to="/admin" className={linkClass}>
                        Admin
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}