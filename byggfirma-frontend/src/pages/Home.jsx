import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

export default function Home() {
    return (
        <div className="bg-slate-50">
            {/* HERO */}
            <section className="relative overflow-hidden">
                {/* Background image */}
                <div
                    className="h-[520px] md:h-[640px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />

                {/* Mörk overlay för kontrast */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Vit fade som börjar längre ner */}
                <div className="absolute inset-x-0 bottom-0 h-48 md:h-74 bg-gradient-to-b from-transparent to-slate-50" />
                {/* Content */}
                <div className="absolute inset-0">
                    <div className="mx-auto flex h-full max-w-6xl items-end px-4 pb-10 md:items-center md:pb-0">
                        <div className="w-full max-w-2xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                Snabb offert • Tydlig process • Hög kvalitet
                            </div>

                            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
                                Modern bygg & renovering
                                <span className="block text-white/90">med trygga resultat.</span>
                            </h1>

                            <p className="mt-4 text-base text-white/85 md:text-lg">
                                Vi hjälper dig med renoveringar, tillbyggnader och service. Skicka en
                                offertförfrågan så återkommer vi snabbt med ett tydligt upplägg.
                            </p>

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    to="/offert"
                                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
                                >
                                    Begär offert
                                </Link>
                                <Link
                                    to="/projekt"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
                                >
                                    Se våra projekt
                                </Link>
                            </div>

                            {/* Trust badges */}
                            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                <Badge title="Kostnadsfri offert" subtitle="Svar inom 24–48h" />
                                <Badge title="Kvalitetsfokus" subtitle="Noggrant utfört" />
                                <Badge title="Trygg process" subtitle="Tydlig kommunikation" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest of page */}
            <section className="mx-auto max-w-6xl px-4 py-12">
                <h2 className="text-2xl font-bold tracking-tight">Så jobbar vi</h2>
                <p className="mt-2 text-slate-600">
                    En enkel process som gör det lätt att komma igång.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <StepCard
                        nr="01"
                        title="Beskriv ditt projekt"
                        text="Skicka in dina önskemål via offertformuläret."
                    />
                    <StepCard
                        nr="02"
                        title="Vi återkommer"
                        text="Vi ställer frågor och föreslår upplägg och tidsplan."
                    />
                    <StepCard
                        nr="03"
                        title="Utförande"
                        text="Vi genomför jobbet med kvalitet och tydlig kommunikation."
                    />
                </div>

                <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <div className="text-lg font-bold">Redo att starta?</div>
                            <div className="mt-1 text-sm text-slate-600">
                                Skicka en offertförfrågan så tar vi nästa steg.
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

function Badge({ title, subtitle }) {
    return (
        <div className="rounded-2xl border border-white/15 bg-white/10 p-3 text-white backdrop-blur">
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-xs text-white/80">{subtitle}</div>
        </div>
    );
}

function StepCard({ nr, title, text }) {
    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-xs font-bold text-slate-500">{nr}</div>
            <div className="mt-2 text-lg font-bold">{title}</div>
            <p className="mt-2 text-sm text-slate-600">{text}</p>
        </div>
    );
}