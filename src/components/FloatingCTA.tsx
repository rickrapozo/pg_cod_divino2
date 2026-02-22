import HOTMART_LINK from "@/lib/constants";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
      <a
        href="#pricing-section"
        className="btn-cta block w-full text-center py-4 text-sm font-body animate-pulse-gold cursor-pointer"
      >
        🙏 QUIERO EL CÓDIGO DIVINO — $9,90 USD
      </a>
    </div>
  );
};

export default FloatingCTA;
