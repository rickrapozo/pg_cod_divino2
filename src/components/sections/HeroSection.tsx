import HOTMART_LINK from "@/lib/constants";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Golden top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--gradient-gold)" }} />

      {/* Content */}
      <div className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-gold" style={{ color: "hsl(45, 90%, 58%)" }} />
          ))}
          <span className="ml-2 text-sm font-body" style={{ color: "hsl(45, 90%, 75%)" }}>
            +4.000 estudiantes
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display text-5xl md:text-7xl font-black mb-4 tracking-tight"
          style={{ color: "hsl(45, 90%, 58%)" }}
        >
          CÓDIGO DIVINO
        </h1>

        {/* Gold separator */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 max-w-20" style={{ background: "var(--gradient-gold)" }} />
          <span style={{ color: "hsl(45, 90%, 58%)" }}>✦</span>
          <div className="h-px flex-1 max-w-20" style={{ background: "var(--gradient-gold)" }} />
        </div>

        <h2 className="font-display text-xl md:text-3xl font-bold text-white mb-4 leading-tight">
          COMPRENDE LA BIBLIA DE PRINCIPIO A FIN<br />
          <span style={{ color: "hsl(45, 90%, 65%)" }}>CON CLARIDAD, PROFUNDIDAD Y PODER ESPIRITUAL</span>
        </h2>

        <p className="font-body text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
          Un estudio visual y didáctico que revela los misterios y enseñanzas de toda la Biblia de una manera clara, organizada y accesible para todos
        </p>

        {/* Mockup image */}
        <div className="md:animate-float mb-10">
          <img
            src="/images/mockup-main.webp"
            alt="Código Divino - Material completo"
            width="768"
            height="683"
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 768px) 90vw, 448px"
            className="mx-auto w-full max-w-md rounded-2xl shadow-2xl"
            style={{ boxShadow: "0 20px 80px -10px rgba(0,0,0,0.7), 0 0 60px -10px hsl(43 80% 45% / 0.3)" }}
          />
        </div>

        {/* CTA Button */}
        <a
          href="#pricing-section"
          className="btn-cta inline-block px-10 py-5 text-lg md:text-xl animate-pulse-gold cursor-pointer"
        >
          🙏 QUIERO COMPRENDER LA BIBLIA
        </a>

        <p className="mt-4 text-sm font-body" style={{ color: "rgba(255,255,255,0.55)" }}>
          🔒 Compra 100% segura · Acceso inmediato · Garantía de 7 días
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to bottom, transparent, hsl(40, 35%, 92%))" }} />
    </section>
  );
};

export default HeroSection;
