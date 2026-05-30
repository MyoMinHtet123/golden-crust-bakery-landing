/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Croissant } from "lucide-react";
import { HERO_IMAGE } from "../data";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with warm dual overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Golden Crust Bread and Coffee Background"
          className="w-full h-full object-cover scale-105 filter brightness-90 saturate-110"
          referrerPolicy="no-referrer"
        />
        {/* Modern dark-brass to warm-amber gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/70 to-black/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-950/20 to-brand-950/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Miniature Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-[#fdfbf7]/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-[#ebe0cf] mb-6 text-xs sm:text-sm tracking-wider uppercase font-medium"
        >
          <Croissant className="h-4 w-4 text-brand-400 fill-brand-400" />
          <span>Local Artisanal Bakery & Café</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#fdfbf7] max-w-4xl leading-[1.1] mb-6"
        >
          Freshly Baked <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-[#fff8ee] italic font-normal">
            Every Morning
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#f6f0e5]/90 max-w-2xl mb-10 leading-relaxed font-light"
        >
          Artisan breads, handcrafted pastries, and specialty coffee. Formed by hand, fermented naturally, and baked to crisp perfection.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#menu"
            className="group px-8 py-4 rounded-full bg-brand-500 text-[#fdfbf7] font-semibold tracking-wider text-sm uppercase shadow-lg shadow-brand-950/40 hover:bg-brand-400 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
          >
            <span>View Today's Menu</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#find-us"
            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-[#fdfbf7] font-semibold tracking-wider text-sm uppercase hover:bg-white/25 transition-colors border border-white/10"
          >
            Get Directions
          </a>
        </motion.div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-50 to-transparent pointer-events-none" />
    </section>
  );
}
