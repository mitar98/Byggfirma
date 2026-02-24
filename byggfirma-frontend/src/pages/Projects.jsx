import { Link } from "react-router-dom";
import bathroom from "../assets/projects/bathroom.jpg";
import kitchen from "../assets/projects/kitchen.jpg";
import altan from "../assets/projects/altan.jpg";
import apartment from "../assets/projects/apartment.jpg";
import facade from "../assets/projects/facade.jpg";
import office from "../assets/projects/office.jpg";

// Exempeldata (sen kan du koppla mot backend om du vill)
const projects = [
    {
        title: "Badrumsrenovering",
        location: "Malmö",
        year: "2024",
        image: bathroom,
        tags: ["Badrum", "Kakel", "Helhetslösning"],
    },
    {
        title: "Köksrenovering",
        location: "Vellinge",
        year: "2023",
        image: kitchen,
        tags: ["Kök", "Snickeri", "Montering"],
    },
    {
        title: "Altan & uterum",
        location: "Lund",
        year: "2024",
        image: altan,
        tags: ["Altan", "Trä", "Uterum"],
    },
    {
        title: "Lägenhetsrenovering",
        location: "Lomma",
        year: "2023",
        image: apartment,
        tags: ["Ytskikt", "Målning", "Golv"],
    },
    {
        title: "Fasad & entré",
        location: "Höllviken",
        year: "2024",
        image: facade,
        tags: ["Fasad", "Entré", "Detaljer"],
    },
    {
        title: "Kontorsanpassning",
        location: "Malmö Central",
        year: "2022",
        image: office,
        tags: ["Kontor", "Planlösning", "Finish"],
    },
];

export default function Projects() {
    return (
        <div className="bg-slate-50">
            {/* Top */}
            <section className="border-b bg-white">
                <div className="mx-auto max-w-6xl px-4 py-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Projekt
                    </h1>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        Ta del av tidigare projekt och se hur vi hjälper våra kunder från idé till färdigt resultat.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Link
                            to="/offert"
                            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                        >
                            Begär offert
                        </Link>
                        <Link
                            to="/tjanster"
                            className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
                        >
                            Se tjänster
                        </Link>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <div
                            key={p.title}
                            className="group rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Bild placeholder */}
                            <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="mt-4 flex items-start justify-between gap-3">
                                <div>
                                    <div className="text-lg font-bold">{p.title}</div>
                                    <div className="mt-1 text-sm text-slate-600">
                                        {p.location} • {p.year}
                                    </div>
                                </div>

                                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                  Klar
                </span>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <div className="mt-5">
                                <Link
                                    to="/offert"
                                    className="inline-flex w-full items-center justify-center rounded-xl border bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                                >
                                    Fråga om liknande projekt
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="text-lg font-bold">Vill du ha något liknande?</div>
                            <div className="mt-1 text-sm text-slate-600">
                                Skicka en offertförfrågan så återkommer vi med upplägg och prisbild.
                            </div>
                        </div>
                        <Link
                            to="/offert"
                            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                        >
                            Begär offert
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}