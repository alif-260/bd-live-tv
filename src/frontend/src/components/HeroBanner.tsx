import { motion } from "motion/react";

interface HeroBannerProps {
  onExplore: () => void;
}

export function HeroBanner({ onExplore }: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl mx-4 sm:mx-6 lg:mx-8 my-6">
      <div
        className="relative min-h-[320px] sm:min-h-[380px] flex items-center"
        style={{
          background: "linear-gradient(135deg, #2B2F33 0%, #0D6A3B 100%)",
        }}
      >
        {/* Background image */}
        <img
          src="/assets/generated/hero-bd-live-tv.dim_1200x400.jpg"
          alt="BD Live TV Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
        />

        {/* Decorative circles */}
        <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
        <div className="absolute right-16 bottom-0 w-40 h-40 rounded-full bg-bd-red/20 translate-y-1/3" />

        {/* Content */}
        <div className="relative z-10 px-8 sm:px-12 py-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-bd-red/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white live-pulse" />
              LIVE NOW &middot; 19 CHANNELS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              YOUR GUIDE TO
              <br />
              <span className="text-green-300">BANGLADESHI TV</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-6">
              Stream Live Channels Anywhere, Anytime.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                data-ocid="hero.explore_channels.button"
                onClick={onExplore}
                className="bg-bd-green hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                EXPLORE CHANNELS
              </button>
              <button
                type="button"
                data-ocid="hero.view_guide.button"
                className="border-2 border-white/60 hover:border-white text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                VIEW GUIDE
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
