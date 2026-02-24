import { Link } from "react-router-dom";

const services = [
    {
        title: "Renovering",
        desc: "Kök, badrum, ytskikt och helhetsrenoveringar med tydlig plan och kvalitet i varje steg.",
        bullets: ["Planering & tidslinje", "Materialval & inköp", "Utförande med kvalitet"],
    },
    {
        title: "Tillbyggnad",
        desc: "Altan, uterum och utbyggnader. Vi hjälper från idé till färdigt resultat.",
        bullets: ["Mått & offert", "Konstruktion & bygg", "Färdigställande"],
    },
    {
        title: "Service & underhåll",
        desc: "Småfix och löpande underhåll för hem och fastigheter. Snabb och smidig hantering.",
        bullets: ["Snickeri & montage", "Reparationer", "Felsökning"],
    },
];

export default function Services() {
    return (
        <div className="bg-slate-50">
            {/* Top */}
            <section className="border-b bg-white">
                <div className="mx-auto max-w-6xl px-4 py-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Tjänster
                    </h1>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        Vi erbjuder bygg- och renoveringstjänster med fokus på tydlighet, kvalitet och bra kommunikation.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Link
                            to="/offert"
                            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                        >
                            Begär offert
                        </Link>
                        <Link
                            to="/projekt"
                            className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
                        >
                            Se våra projekt
                        </Link>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid gap-4 md:grid-cols-3">
                    {services.map((s) => (
                        <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                            <div className="flex items-start justify-between gap-3">
                                <h2 className="text-xl font-bold">{s.title}</h2>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Populärt
                </span>
                            </div>

                            <p className="mt-3 text-sm text-slate-600">{s.desc}</p>

                            <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                {s.bullets.map((b) => (
                                    <li key={b} className="flex items-center gap-2">
                                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                                        {b}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6">
                                <Link
                                    to="/offert"
                                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                                >
                                    Begär offert för {s.title.toLowerCase()}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info row */}
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <Info title="Tydlig process" text="Du får en tydlig offert och vi stämmer av innan vi startar." />
                    <Info title="Kvalitetsmaterial" text="Vi rekommenderar material som håller och passar dina behov." />
                    <Info title="Kommunikation" text="Du får löpande uppdateringar så du alltid vet läget." />
                </div>

                {/* Bottom */}
                <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="text-lg font-bold">Osäker på vad du behöver?</div>
                            <div className="mt-1 text-sm text-slate-600">
                                Beskriv projektet kort så hjälper vi dig hitta rätt upplägg.
                            </div>
                        </div>
                        <Link
                            to="/offert"
                            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                        >
                            Kontakta oss via offert
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Info({ title, text }) {
    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-sm font-bold text-slate-900">{title}</div>
            <div className="mt-2 text-sm text-slate-600">{text}</div>
        </div>
    );
}