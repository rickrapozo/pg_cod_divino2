import HOTMART_LINK from "@/lib/constants";

const bonuses = [
  {
    number: "01",
    image: "/images/bonus1.png",
    title: "Los 10 Mandamientos: Historia y Aplicación Espiritual",
    description:
      "Descubre el origen, el significado profundo y cómo aplicar los mandamientos en la vida moderna. Una guía clara y reveladora para vivir según la voluntad de Dios.",
    value: "$10",
  },
  {
    number: "02",
    image: "/images/bonus2.png",
    title: "Los Milagros de Jesús",
    description:
      "Explora cada milagro realizado por el Señor: sanidades, prodigios y señales que siguen impactando vidas. Incluye contexto bíblico, reflexión y lección espiritual.",
    value: "$10",
  },
  {
    number: "03",
    image: "/images/bonus3.png",
    title: "Historias Bíblicas para toda la familia",
    description:
      "Una colección visual y resumida de las historias más poderosas del Antiguo y Nuevo Testamento, ideal para enseñar a niños y adultos en casa o en la iglesia.",
    value: "$10",
  },
  {
    number: "04",
    image: "/images/bonus4.png",
    title: "Devocionales de Poder: 30 días para profundizar tu fe",
    description:
      "Una serie de devocionales con reflexiones, versículos clave y oraciones para fortalecer tu conexión diaria con Dios.",
    value: "$10",
  },
  {
    number: "05",
    image: "/images/bonus5.png",
    title: "Manual de Interpretación Bíblica para Principiantes",
    description:
      "Una guía clara y práctica que te enseñará cómo interpretar correctamente los textos bíblicos, evitar errores comunes y aplicar los principios de hermenéutica de forma sencilla.",
    value: "$10",
  },
];

const BonusSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6" style={{ background: "hsl(var(--dark-bg))" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="text-center rounded-3xl py-10 px-6 mb-14 gold-border"
          style={{ background: "hsl(var(--dark-surface))" }}
        >
          <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--gold))" }}>
            🎁 Solo por tiempo limitado
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">
            ¡BONOS EXCLUSIVOS!
          </h2>
          <p className="font-body text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Al adquirir <strong style={{ color: "hsl(var(--gold-light))" }}>CÓDIGO DIVINO</strong> hoy, recibirás totalmente{" "}
            <strong style={{ color: "hsl(var(--emerald-light))" }}>GRATIS</strong> estos 5 regalos exclusivos que complementarán tu estudio y crecimiento espiritual:
          </p>
          <div className="mt-4 inline-flex items-center gap-3 rounded-full px-6 py-2" style={{ background: "hsl(var(--dark-card))", border: "1px solid hsl(var(--gold) / 0.3)" }}>
            <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Valor total:{" "}
              <span className="line-through" style={{ color: "rgba(255,255,255,0.4)" }}>$49 USD</span>
            </span>
            <span className="font-bold text-sm" style={{ color: "hsl(var(--emerald-light))" }}>
              → GRATIS para ti
            </span>
          </div>
        </div>

        {/* Bonuses list */}
        <div className="space-y-6">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-6 rounded-2xl p-6 gold-border-bright group hover:scale-[1.01] transition-transform duration-300"
              style={{ background: "hsl(var(--dark-card))" }}
            >
              {/* Bonus number */}
              <div className="shrink-0 flex items-start">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-lg"
                  style={{ background: "var(--gradient-gold)", color: "hsl(var(--dark-bg))" }}
                >
                  🎁
                </div>
              </div>

              {/* Book image */}
              <div className="md:w-48 shrink-0 flex items-center justify-center">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  width="200"
                  height="280"
                  loading="lazy"
                  decoding="async"
                  sizes="160px"
                  className="w-48 md:w-40 object-contain rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-body text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "hsl(var(--gold) / 0.15)", color: "hsl(var(--gold-light))" }}>
                    BONO {bonus.number}
                  </span>
                  <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    <span className="line-through">DE {bonus.value}</span>
                  </span>
                  <span className="font-body text-xs font-bold" style={{ color: "hsl(var(--emerald-light))" }}>
                    Por $0
                  </span>
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                  {bonus.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary & CTA */}
        <div
          className="mt-14 rounded-3xl p-8 md:p-12 text-center gold-border"
          style={{ background: "hsl(var(--dark-surface))" }}
        >
          <p className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            🎉 ¡Todo esto valorado en más de{" "}
            <span className="line-through" style={{ color: "rgba(255,255,255,0.4)" }}>$49 USD</span>
            …
          </p>
          <p className="font-display text-xl md:text-2xl font-bold mb-6" style={{ color: "hsl(var(--emerald-light))" }}>
            ¡Totalmente <strong>GRATIS</strong> solo por tiempo limitado!
          </p>
          <p className="font-body text-base mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            ¡Aprovecha esta oportunidad divina para profundizar en la Palabra con sabiduría y entendimiento visual!
          </p>
          <a
            href="#pricing-section"
            className="btn-cta inline-block px-10 py-5 text-lg cursor-pointer"
          >
            🙏 QUIERO LOS BONOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
