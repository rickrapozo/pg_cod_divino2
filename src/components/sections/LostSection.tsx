import HOTMART_LINK from "@/lib/constants";

const LostSection = () => {
  return (
    <section className="parchment-texture py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-14 text-center"
          style={{ background: "hsl(var(--dark-bg))", boxShadow: "var(--shadow-gold)" }}
        >
          <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: "hsl(var(--gold))" }}>
            🕊️ Tu momento es ahora
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Te has sentido{" "}
            <span style={{ color: "hsl(var(--gold-light))" }}>perdido</span>{" "}
            al leer la{" "}
            <span style={{ color: "hsl(var(--gold-light))" }}>Biblia</span>?
          </h2>
          <p className="font-body text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Muchos creyentes luchan con la falta de disciplina y claridad. Intentan leer la Biblia pero se frustran por no saber cómo entenderla o aplicarla. <strong style={{ color: "hsl(var(--gold-light))" }}>CÓDIGO DIVINO</strong> es la guía visual que te toma de la mano y te acompaña a través de cada etapa del conocimiento bíblico.
          </p>
          <a
            href="#pricing-section"
            className="btn-cta inline-block px-12 py-5 text-lg md:text-xl md:animate-pulse-gold cursor-pointer"
          >
            🙏 QUIERO EL CÓDIGO DIVINO
          </a>
          <p className="mt-4 text-xs font-body" style={{ color: "rgba(255,255,255,0.4)" }}>
            Por solo $9,90 USD · Acceso inmediato · Garantía de 7 días
          </p>
        </div>
      </div>
    </section>
  );
};

export default LostSection;
