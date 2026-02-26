import HOTMART_LINK from "@/lib/constants";

const books = [
  {
    image: "/images/book-josue.png",
    title: "170 Bosquejos del Libro de Josué",
    description:
      "Resúmenes temáticos con enseñanzas, aplicaciones y oraciones que te guiarán por todo el libro de Josué de forma clara y visual.",
  },
  {
    image: "/images/book-30dias.png",
    title: "30 Días de Oración",
    description:
      "Una guía devocional para fortalecer tu vida de oración durante 30 días, basada en los cinco primeros libros de la Biblia.",
  },
  {
    image: "/images/book-genesis.png",
    title: "Génesis — Versículo por Versículo",
    description:
      "Estudio profundo, práctico y espiritual de cada versículo del libro de Génesis, con reflexiones y aplicaciones diarias.",
  },
  {
    image: "/images/book-exodo.png",
    title: "Éxodo — Versículo por Versículo",
    description:
      "Comprensión clara y edificante del mensaje de Éxodo, explicado de forma accesible para todo lector.",
  },
  {
    image: "/images/book-levitico.png",
    title: "Levítico — Guía Espiritual",
    description:
      "Guía espiritual para entender el propósito de las leyes, ofrendas y enseñanzas de Levítico, aplicadas a la vida moderna.",
  },
];

const IncludesSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6" style={{ background: "hsl(var(--dark-bg))" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--gold))" }}>
            Tu biblioteca espiritual
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
            ¿Qué incluye <span style={{ color: "hsl(var(--gold-light))" }}>CÓDIGO DIVINO</span>?
          </h2>
          <div className="section-divider max-w-24 mx-auto mb-6" />
          <p className="font-body text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Recibirás una biblioteca espiritual completa, compuesta por estudios visuales, devocionales y explicaciones versículo por versículo de los principales libros de la Biblia.
          </p>
        </div>

        {/* Books grid */}
        <div className="space-y-8">
          {books.map((book, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 rounded-2xl p-6 gold-border`}
              style={{ background: "hsl(var(--dark-card))", boxShadow: "var(--shadow-card)" }}
            >
              <div className="md:w-2/5 shrink-0">
                <img
                  src={book.image}
                  alt={book.title}
                  width="754"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 md:h-64 object-cover rounded-xl"
                  style={{ boxShadow: "var(--shadow-gold)" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-body" style={{ background: "var(--gradient-gold)", color: "hsl(var(--dark-bg))" }}>
                    {i + 1}
                  </div>
                  <span className="text-xs font-body font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--gold))" }}>
                    Incluido
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3">
                  {book.title}
                </h3>
                <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#pricing-section"
            className="btn-cta inline-block px-10 py-5 text-lg cursor-pointer"
          >
            🙏 QUIERO COMPRENDER LA BIBLIA
          </a>
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;
