/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, ShieldCheck, Heart } from "lucide-react";
import { BAKERY_INTERIOR } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#fdfbf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text block - 7 cols on lg */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-brand-600 font-medium tracking-widest text-xs uppercase block mb-3">
              Our Heritage
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-brand-950 mb-6 leading-[1.15]">
              Handcrafted daily with <br />
              <span className="italic font-normal text-brand-600">quality, tradition & passion.</span>
            </h2>
            
            <p className="text-brand-900/80 text-sm sm:text-base font-light leading-relaxed mb-6">
              Founded on the simple principle that premium bread requires time, patience, and absolute care, Golden Crust Bakery brings traditional, old-world European baking techniques straight to your neighborhood table.
            </p>
            
            <p className="text-brand-950 text-base font-medium italic border-l-2 border-brand-400 pl-4 mb-8">
              "Crafted daily using quality ingredients and traditional baking techniques."
            </p>

            <p className="text-brand-900/80 text-sm sm:text-base font-light leading-relaxed mb-10">
              We slow-ferment our sourdough starters for up to 36 hours. This careful process breaks down complex gluten structures, yielding a highly digestible slice of bread loaded with subtle, complex nutty flavors and that classic sour finish. It is combined with organic flour imported from sustainable farms and triple-filtered spring water.
            </p>

            {/* Micro Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-100 text-brand-700 mt-1">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-950">Award-winning bakers</h4>
                  <p className="text-brand-800/70 text-xs sm:text-sm font-light mt-0.5">
                    Our master bakers hold state certifications and certifications in yeast sciences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-100 text-brand-700 mt-1">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-950">Clean Ingredients</h4>
                  <p className="text-brand-800/70 text-xs sm:text-sm font-light mt-0.5">
                    We use zero chemical dough conditioners, synthetic colors, or fake white sugar.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Banner with Interior image - 5 cols on lg */}
          <div className="lg:col-span-5 relative">
            {/* Soft decorative background box */}
            <div className="absolute -inset-4 bg-brand-100/50 rounded-[40px] transform rotate-2 z-0" />
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#fdfbf7] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
            >
              <img
                src={BAKERY_INTERIOR}
                alt="Golden Crust Cozy Bakery Interior"
                className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Bottom tag inside picture */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <span className="text-[#fdfbf7] text-xs font-semibold uppercase tracking-wider block mb-1">Our Cozy Storefront</span>
                <p className="text-[#ebe0cf] text-[11px] font-light leading-relaxed">
                  Join us at our communal tables. Free Wi-Fi, smell of woodfire sourdough, and warm acoustic tunes playing all afternoon.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
