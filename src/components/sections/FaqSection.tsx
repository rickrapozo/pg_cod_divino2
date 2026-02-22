import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "1. ¿Cómo recibiré el material después de la compra?",
    a: "Una vez confirmado el pago, recibirás un correo electrónico con el acceso inmediato a todo el contenido digital. No necesitas esperar ni pagar envío. Todo es 100% online y accesible desde cualquier dispositivo.",
  },
  {
    q: "2. ¿Y si el material no es lo que esperaba?",
    a: "No te preocupes. Tienes 7 días de garantía incondicional. Si el contenido no cumple tus expectativas, puedes solicitar tu reembolso total sin complicaciones.",
  },
  {
    q: "3. ¿Necesito tener conocimientos previos de la Biblia para aprovechar el contenido?",
    a: "¡Para nada! CÓDIGO DIVINO fue diseñado para todos: nuevos creyentes, estudiantes, líderes, padres o pastores. El lenguaje es claro, práctico y accesible.",
  },
  {
    q: "4. ¿Por qué es tan económico? ¿Es un producto confiable?",
    a: "Queremos que miles de personas tengan acceso a este estudio sin barreras. El bajo precio no refleja baja calidad, sino una misión: facilitar el aprendizaje bíblico a todo cristiano comprometido. Más de 4.000 personas ya han confiado en nosotros.",
  },
  {
    q: "5. ¿Puedo pagar en mi moneda local?",
    a: "Sí. La plataforma de pago acepta múltiples monedas y métodos de pago locales, para que puedas adquirir el material sin complicaciones desde cualquier país hispanohablante.",
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden gold-border cursor-pointer"
      style={{ background: "hsl(var(--dark-card))" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 p-5">
        <h3 className="font-display text-base md:text-lg font-semibold text-white">{q}</h3>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-300"
          style={{
            color: "hsl(var(--gold-light))",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {open && (
        <div className="px-5 pb-5">
          <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="parchment-texture py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--gold-dark))" }}>
            Dudas comunes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "hsl(var(--dark-bg))" }}>
            Preguntas Frecuentes
          </h2>
          <div className="section-divider max-w-24 mx-auto" />
        </div>

        <div className="space-y-3 mb-14">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="font-display text-xl font-bold" style={{ color: "hsl(var(--gold-dark))" }}>CÓDIGO DIVINO</p>
        <p className="font-body text-xs mt-2" style={{ color: "hsl(25, 10%, 50%)" }}>
          © 2024 Código Divino · Todos los derechos reservados · Producto 100% digital
        </p>
        <div className="mt-4 pb-6" />
      </div>
    </section>
  );
};

export default FaqSection;
