import { useState, useEffect } from "react";
import HOTMART_LINK from "@/lib/constants";
import { CheckCircle2, Smartphone, Mail, Lock, Clock, Flame } from "lucide-react";

const items = [
  "170 Bosquejos del Libro de Josué",
  "Éxodo — Versículo por Versículo",
  "Génesis — Versículo por Versículo",
  "Levítico — Versículo por Versículo",
  "30 Días de Oración",
  "🎁 BONO 1: Los 10 Mandamientos",
  "🎁 BONO 2: Los Milagros de Jesús",
  "🎁 BONO 3: Historias Bíblicas para toda la familia",
  "🎁 BONO 4: Devocionales de Poder",
  "🎁 BONO 5: Manual de Interpretación Bíblica",
];

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 35, seconds: 0 });
  const [spotsLeft, setSpotsLeft] = useState(12);

  useEffect(() => {
    // Persistent Timer Logic
    const TIMER_KEY = "cd_timer_expiration_v1";
    const INITIAL_TIME = 35 * 60; // 35 minutes in seconds

    let expiration = localStorage.getItem(TIMER_KEY);
    const now = Math.floor(Date.now() / 1000);

    if (!expiration || parseInt(expiration) < now) {
      const newExpiration = now + INITIAL_TIME;
      localStorage.setItem(TIMER_KEY, newExpiration.toString());
      expiration = newExpiration.toString();
    }

    const targetTime = parseInt(expiration);

    const updateTimer = () => {
      const currentNow = Math.floor(Date.now() / 1000);
      const diff = targetTime - currentNow;

      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        setSpotsLeft(3);
        return;
      }

      const h = Math.floor(diff / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;
      setTimeLeft({ hours: h, minutes: m, seconds: s });

      // spotsLeft Logic: Decrease from 12 to 3 depending on time elapsed
      const elapsed = INITIAL_TIME - diff;
      const decrements = Math.floor(elapsed / 300); // 5 minutes
      const currentSpots = Math.max(3, 12 - decrements);
      setSpotsLeft(currentSpots);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="pricing-section" className="parchment-texture py-12 md:py-20 px-4 md:px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        {/* Pricing card */}
        <div
          className="rounded-3xl overflow-hidden border-2 border-gold/20"
          style={{ boxShadow: "var(--shadow-gold), 0 20px 80px -20px rgba(0,0,0,0.4)" }}
        >
          {/* Top banner */}
          <div className="py-4 px-6 text-center" style={{ background: "var(--gradient-gold)" }}>
            <p className="font-body text-sm font-bold uppercase tracking-widest text-black/80">
              ⚡ PRECIO ESPECIAL DE LANZAMIENTO
            </p>
          </div>

          <div style={{ background: "hsl(var(--dark-bg))" }} className="p-8 md:p-12">
            {/* Mockup image */}
            <div className="flex justify-center mb-10 relative">
              <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full" />
              <img
                src="/images/mockup-main.webp"
                alt="Código Divino - Material completo"
                width="768"
                height="683"
                loading="lazy"
                className="w-full max-w-sm rounded-2xl relative"
                style={{ boxShadow: "0 20px 60px -10px rgba(0,0,0,0.7), 0 0 40px -10px hsl(43 80% 45% / 0.3)" }}
              />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-2">
              ¡Llévate TODO esto por solo
            </h2>
            <div className="text-center mb-8">
              <span className="font-display text-7xl md:text-8xl font-black text-gold-light">
                $9,90
              </span>
              <span className="font-body text-2xl font-bold text-white/40 ml-2 italic">USD</span>
              <p className="font-body text-sm mt-2 text-white/50 tracking-wide uppercase">
                (Puedes pagar en tu moneda local)
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3 mb-10 bg-white/5 p-6 rounded-2xl border border-white/5">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5 text-emerald-light"
                  />
                  <span className="font-body text-sm md:text-base text-white/80 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 py-6 rounded-2xl bg-black border border-white/5">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gold-light" />
                <span className="font-body text-[10px] font-black uppercase tracking-widest text-white/40">Acceso seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-gold-light" />
                <span className="font-body text-[10px] font-black uppercase tracking-widest text-white/40">Cualquier dispositivo</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-light" />
                <span className="font-body text-[10px] font-black uppercase tracking-widest text-white/40">Entrega inmediata</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={HOTMART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta block w-full text-center py-6 text-xl md:text-2xl animate-pulse-gold inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
            >
              🙏 QUIERO EL CÓDIGO DIVINO
            </a>
          </div>
        </div>

        {/* Urgency Counter - HIGH CONTRAST FIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">

          {/* Timer Card */}
          <div className="bg-[#0f0f0f] p-8 rounded-[2rem] border-2 border-gold/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Clock className="w-20 h-20 text-gold-light" />
            </div>

            <p className="font-body text-[10px] font-black uppercase tracking-[0.25em] text-gold-light mb-4 relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
              LA OFERTA TERMINA EN:
            </p>

            <div className="flex items-center gap-4 relative z-10">
              <div className="flex flex-col">
                <span className="font-display text-5xl font-black text-white leading-none tracking-tighter">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-[9px] font-black text-white/30 uppercase mt-2 tracking-widest">Minutos</span>
              </div>
              <span className="text-3xl font-black text-gold-light/20 pb-6">:</span>
              <div className="flex flex-col">
                <span className="font-display text-5xl font-black text-white leading-none tracking-tighter">
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="text-[9px] font-black text-white/30 uppercase mt-2 tracking-widest">Segundos</span>
              </div>
            </div>
          </div>

          {/* Spots Card */}
          <div className="bg-[#0f0f0f] p-8 rounded-[2rem] border-2 border-emerald/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Flame className="w-20 h-20 text-emerald-light" />
            </div>

            <p className="font-body text-[10px] font-black uppercase tracking-[0.25em] text-emerald-light mb-4 relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-light animate-pulse" />
              DISPONIBILIDAD:
            </p>

            <div className="flex items-baseline gap-2 relative z-10">
              <span className="font-display text-5xl font-black text-white leading-none tracking-tighter">
                {spotsLeft}
              </span>
              <span className="font-display text-xl font-black text-emerald-light uppercase italic">Vagas Libres</span>
            </div>
          </div>

        </div>

        <p className="text-center mt-10 font-body text-[11px] text-dark-bg/40 font-bold uppercase tracking-widest">
          🔒 Una vez finalizado el tiempo, el sistema volverá al precio original de $57 USD.
        </p>

      </div>
    </section>
  );
};

export default PricingSection;
