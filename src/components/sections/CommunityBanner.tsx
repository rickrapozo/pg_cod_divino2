const CommunityBanner = () => {
    return (
        <section className="parchment-texture pt-12 md:pt-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <div
                    className="rounded-2xl p-6 md:p-8 text-center"
                    style={{ background: "hsl(var(--dark-bg))", boxShadow: "var(--shadow-gold)" }}
                >
                    <p className="font-body text-sm uppercase tracking-widest mb-3" style={{ color: "hsl(var(--gold))" }}>
                        Comunidad
                    </p>
                    <p className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                        Más de <span style={{ color: "hsl(var(--gold-light))" }}>4.000 cristianos</span> ya están transformando su estudio bíblico con nosotros.
                    </p>
                    <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                        Testimonios reales de personas que ya viven una nueva experiencia espiritual.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CommunityBanner;
