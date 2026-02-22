import HOTMART_LINK from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

const checks = [
  "Quieres comprender verdaderamente cada capítulo y versículo de la Biblia.",
  "Quieres enseñar a otros de manera didáctica y espiritual.",
  "Buscas una forma visual y práctica de memorizar historias y enseñanzas.",
  "Deseas aprender sobre la vida y enseñanzas de Jesús de forma clara.",
  "Te sientes frustrado al leer la Biblia sin entender su mensaje profundo.",
];

const WhatIsSection = () => {
  return (
    <section className="parchment-texture py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--gold))" }}>
            Descubre el material
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6" style={{ color: "hsl(var(--dark-bg))" }}>
            ¿Qué es <span style={{ color: "hsl(var(--gold))" }}>CÓDIGO DIVINO</span>?
          </h2>
          <div className="section-divider max-w-24 mx-auto mb-8" />
          <p className="font-body text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: "hsl(25, 15%, 25%)" }}>
            Es un material exclusivo que te lleva a través de toda la historia de la Biblia con{" "}
            <strong>bosquejos visuales, ilustraciones impactantes y explicaciones claras</strong>, diseñadas para ayudarte a entender y aplicar la Palabra de Dios como nunca antes.
          </p>
        </div>

        {/* "Este material es para ti si:" */}
        <div
          className="rounded-3xl p-8 md:p-12 gold-border"
          style={{ background: "hsl(var(--dark-bg))", boxShadow: "var(--shadow-gold)" }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: "hsl(var(--gold-light))" }}>
            Este material es para ti si:
          </h3>
          <div className="space-y-5">
            {checks.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2
                  className="w-6 h-6 shrink-0 mt-0.5"
                  style={{ color: "hsl(var(--emerald-light))" }}
                />
                <p className="font-body text-base md:text-lg" style={{ color: "rgba(255,255,255,0.88)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#pricing-section"
              className="btn-cta inline-block px-10 py-4 text-base md:text-lg cursor-pointer"
            >
              SÍ, QUIERO ESTE MATERIAL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
