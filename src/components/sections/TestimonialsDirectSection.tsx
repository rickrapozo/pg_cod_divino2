import { ChevronLeft, Phone, Video, Camera, Mic, Image as ImageIcon, Heart, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from "react";

const testimonials = [
    {
        name: "Javier G.",
        handle: "@javier_g_77",
        avatarColor: "bg-blue-600",
        initial: "J",
        time: "HOY 2H",
        message: "Llevaba años intentando leer la Biblia completa y siempre abandonaba. Gracias a la estructura realista y el método paso a passo del 'Guía Práctica de 90 Días', finalmente tengo la disciplina y o mapa claro para lograr mi maior meta espiritual sin sentirme abrumado.",
    },
    {
        name: "Carlos R.",
        handle: "@carlitos.escritura",
        avatarColor: "bg-emerald-600",
        initial: "C",
        time: "HOY 5H",
        message: "Siempre me sentí intimidado por los términos complejos de las Escrituras e pensaba que no eran para mí. Los materiais de Código Divino, especialmente el glosario, explican todo de forma tan sencilla e clara que por fin leo la Biblia con total confianza, entendimiento e sin frustración.",
    },
    {
        name: "Ana M.",
        handle: "@ana_m_devocional",
        avatarColor: "bg-pink-600",
        initial: "A",
        time: "HOY 1D",
        message: "Con el caos diario, no sabía dónde buscar respuestas rápidas en la Biblia para mis problemas. La organización por temas del e-book 'Versículos para Cada Área de la Vida' ha sido un salvavidas; ahora encuentro a guía exacta e a paz de Deus al instante, justo cuando más a necesito.",
    },
    {
        name: "Laura P.",
        handle: "@laura_p_faith",
        avatarColor: "bg-purple-600",
        initial: "L",
        time: "HOY 3H",
        message: "Atravesé una crisis personal donde me sentía muy culpable por mis dudas y lejos de Dios. La guía sobre cómo vencer la falta de fe fue un verdadero abraço al corazón; me ofreció ferramentas prácticas y libres de juicio que me ajudaram a restaurar mi confiança e recuperar a esperanza que había perdido.",
    },
    {
        name: "Sofía D.",
        handle: "@sofia_d_biblia",
        avatarColor: "bg-orange-600",
        initial: "S",
        time: "HOY 6H",
        message: "Mi vida espiritual estaba desordenada; tenía la intención pero no sabía cómo profundizar. Este paquete de recursos ha sido la mejor inversión para mi fe: ahora tengo un kit completo con el plan de disciplina, el glosario para entender y los versículos clave para las batallas diarias. ¡Me siento totalmente equipada!",
    },
];

const InstagramDM = ({ name, handle, avatarColor, initial, time, message }: typeof testimonials[0]) => (
    <div className="flex flex-col w-full max-w-[320px] bg-black rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl h-full mx-auto select-none">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
                <ChevronLeft className="w-6 h-6 text-white" />
                <div className={`w-9 h-9 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
                    {initial}
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-sm font-bold leading-tight text-left">{name}</span>
                    <span className="text-white/40 text-[10px] blur-[2px] select-none text-left">{handle}</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white" />
                <Video className="w-6 h-6 text-white" />
            </div>
        </div>

        {/* Body */}
        <div className="flex-1 px-4 py-6 flex flex-col min-h-[340px]">
            <div className="text-center mb-6">
                <span className="text-white/30 text-[10px] font-bold tracking-widest">{time}</span>
            </div>

            <div className="flex gap-2 items-end mb-1">
                <div className={`w-6 h-6 rounded-full ${avatarColor} flex items-center justify-center text-white text-[8px] font-bold shrink-0`}>
                    {initial}
                </div>
                <div className="bg-[#262626] rounded-2xl rounded-bl-none px-4 py-3 text-white text-sm leading-relaxed max-w-[85%] text-left">
                    {message}
                </div>
            </div>
            <div className="ml-8 text-left">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            </div>
        </div>

        {/* Footer */}
        <div className="px-4 pb-6 pt-2">
            <div className="flex items-center gap-3 bg-[#121212] border border-white/10 rounded-full px-4 py-2">
                <div className="w-8 h-8 rounded-full bg-[#0095F6] flex items-center justify-center shrink-0">
                    <Camera className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-white/40 text-sm flex-1 text-left">Enviar mensaje...</span>
                <Mic className="w-5 h-5 text-white" />
                <ImageIcon className="w-5 h-5 text-white" />
            </div>
        </div>
    </div>
);

const TestimonialsDirectSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: false,
        loop: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="bg-[#0a0a0a] py-16 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-12">
                    <h2 className="text-white font-display text-2xl md:text-4xl font-bold">
                        Screenshots de alumnos que já transformaron su vida
                    </h2>
                    <div className="h-1 w-20 bg-gold mx-auto mt-4 rounded-full opacity-50" />
                </div>

                {/* Unified Carousel for Desktop and Mobile */}
                <div className="relative group">
                    <div className="overflow-hidden px-4" ref={emblaRef}>
                        <div className="flex gap-4 md:gap-8">
                            {testimonials.map((test, i) => (
                                <div key={i} className="flex-[0_0_85%] md:flex-[0_0_30%] min-w-0">
                                    <InstagramDM {...test} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows (Desktop Only) */}
                    <button
                        onClick={scrollPrev}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full items-center justify-center text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full items-center justify-center text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 transition-all duration-300 rounded-full cursor-pointer ${i === selectedIndex ? 'w-10 bg-gold' : 'w-2 bg-white/20'
                                }`}
                            onClick={() => emblaApi && emblaApi.scrollTo(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsDirectSection;
