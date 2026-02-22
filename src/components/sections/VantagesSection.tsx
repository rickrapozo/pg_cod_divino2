import { CheckCircle2 } from "lucide-react";

const advantages = [
  {
    title: "Comprensión profunda:",
    description: "Entenderás la narrativa bíblica desde Génesis hasta Apocalipsis de forma clara y organizada.",
  },
  {
    title: "Enseñanza efectiva:",
    description: "Podrás enseñar a otros con confianza usando bosquejos visuales y explicaciones didácticas.",
  },
  {
    title: "Estudio sistemático:",
    description: "Un método probado versículo por versículo que transforma tu relación con la Palabra de Dios.",
  },
  {
    title: "Accesible para todos:",
    description: "Sin importar tu nivel de conocimiento, el contenido es claro, práctico y edificante.",
  },
  {
    title: "Crecimiento espiritual:",
    description: "Fortalece tu fe con devocionales, oraciones y reflexiones que impactan tu vida diaria.",
  },
];

const VantagesSection = () => {
  return (
    <section className="parchment-texture py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--gold))" }}>
            ¿Por qué elegirlo?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "hsl(var(--dark-bg))" }}>
            Ventajas de usar{" "}
            <span style={{ color: "hsl(var(--gold))" }}>CÓDIGO DIVINO</span>
          </h2>
          <div className="section-divider max-w-24 mx-auto" />
        </div>

        <div className="space-y-4">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl p-5"
              style={{ background: "hsl(var(--dark-card) / 0.08)", border: "1px solid hsl(var(--gold) / 0.2)" }}
            >
              <CheckCircle2
                className="w-6 h-6 shrink-0 mt-0.5"
                style={{ color: "hsl(var(--emerald-light))" }}
              />
              <div>
                <p className="font-body text-base font-bold mb-1" style={{ color: "hsl(var(--dark-bg))" }}>
                  {item.title}
                </p>
                <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: "hsl(25, 15%, 35%)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VantagesSection;
