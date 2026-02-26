const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6" style={{ background: "hsl(var(--dark-bg))" }}>
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 gold-border"
          style={{ background: "hsl(var(--dark-surface))" }}
        >
          <div className="shrink-0">
            <img
              src="/images/garantia.png"
              alt="Garantía incondicional de 7 días"
              width="200"
              height="200"
              loading="lazy"
              className="w-40 md:w-48 mx-auto"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                style={{ background: "var(--gradient-gold)" }}
              >
                🛡️
              </div>
              <span className="font-body text-sm font-bold uppercase tracking-widest" style={{ color: "hsl(var(--gold))" }}>
                Garantía Incondicional
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Garantía Incondicional de <span style={{ color: "hsl(var(--gold-light))" }}>7 Días</span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.80)" }}>
              <strong style={{ color: "white" }}>¿Aún tienes dudas? Tranquilo, tu compra está 100% protegida.</strong>
            </p>
            <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.65)" }}>
              Si por cualquier motivo el contenido que recibes no cumple con lo prometido, tienes hasta <strong style={{ color: "hsl(var(--gold-light))" }}>7 días</strong> para solicitar el reembolso completo, sin preguntas ni complicaciones.
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Recuerda que tu acceso es de por vida, y constantemente añadimos nuevos materiales diseñados para fortalecer tu fe, tu ministerio y tu enseñanza en la Iglesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
