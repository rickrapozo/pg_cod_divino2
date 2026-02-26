import HOTMART_LINK from "@/lib/constants";

const audiences = [
  {
    image: "/images/audience-pastors.png",
    title: "Profesores y Pastores",
    description: "Material perfecto para clases, prédicas y discipulados.",
    icon: "⛪",
  },
  {
    image: "/images/audience-students.jpg",
    title: "Estudiantes y Nuevos Creyentes",
    description: "Una forma sencilla y poderosa de aprender.",
    icon: "📖",
  },
  {
    image: "/images/audience-families.jpg",
    title: "Familias",
    description: "Enseña a tus hijos de forma visual y memorable.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    image: "/images/audience-leaders.webp",
    title: "Líderes de Célula o Grupos Pequeños",
    description: "Una herramienta que transforma vidas.",
    icon: "🤝",
  },
];

const ForWhoSection = () => {
  return (
    <section className="parchment-texture py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--gold-dark))" }}>
            Para todos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "hsl(var(--dark-bg))" }}>
            ¿Quién puede usarlo?
          </h2>
          <div className="section-divider max-w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden shadow-card-lg transition-transform hover:-translate-y-1 duration-300"
              style={{ background: "white" }}
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,5,0.75) 0%, transparent 60%)" }} />
                <span className="absolute bottom-3 left-4 text-2xl">{item.icon}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: "hsl(var(--dark-bg))" }}>
                  {item.title}
                </h3>
                <p className="font-body text-sm" style={{ color: "hsl(25, 10%, 40%)" }}>
                  {item.description}
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
            SÍ, QUIERO APRENDER
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
