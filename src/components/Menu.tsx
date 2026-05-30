/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Croissant, Wheat, Check } from "lucide-react";
import { MENU_CATEGORIES } from "../data";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("bread");

  const categoryIcons = {
    bread: <Wheat className="h-4 w-4" />,
    bakery: <Croissant className="h-4 w-4" />,
    coffee: <Coffee className="h-4 w-4" />,
  };

  const selectedCategory = MENU_CATEGORIES.find((cat) => cat.id === activeCategory) || MENU_CATEGORIES[0];

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#faf7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-medium tracking-widest text-xs uppercase block mb-3">
            Handcrafted Menu
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-brand-950 mb-4">
            Freshly Baked & Hand-Poured
          </h2>
          <p className="text-brand-800/80 text-sm sm:text-base font-light leading-relaxed">
            Browse our curated selection of masterfully fermented sourdoughs, flaky butter pastries, and single-origin specialty coffees.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex justify-center mb-16 px-2">
          <div className="inline-flex bg-[#ebe0cf]/40 p-1.5 rounded-full border border-[#ebe0cf] gap-1 sm:gap-2">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? "text-[#fdfbf7]"
                    : "text-brand-900 hover:text-brand-600"
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-brand-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {categoryIcons[category.id as keyof typeof categoryIcons]}
                  {category.name.split(" ")[0]} {/* Shorten name for tabs if needed */}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Intro */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-brand-900/70 italic text-sm font-light">
            "{selectedCategory.description}"
          </p>
        </div>

        {/* Animated Grid Container for items */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          <AnimatePresence mode="popLayout">
            {selectedCategory.items.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative w-full max-w-sm rounded-3xl bg-[#fdfbf7] border border-[#ebe0cf]/50 hover:shadow-xl hover:shadow-brand-950/5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle light/shadow overlay on image hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Badges / Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-brand-950/70 backdrop-blur-sm text-[#fdfbf7] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price overlay on image corner */}
                  <div className="absolute bottom-4 right-4 bg-[#fdfbf7] border border-brand-200/50 text-[#493522] text-sm font-bold tracking-tight py-1.5 px-3 rounded-full shadow-md">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-bold tracking-tight text-brand-950 group-hover:text-brand-600 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-brand-800/80 text-xs sm:text-sm font-light leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  
                  {/* Footer bar inside card */}
                  <div className="pt-4 mt-4 border-t border-[#ebe0cf]/50 flex items-center justify-between">
                    <span className="text-[10px] font-medium tracking-widest text-brand-400 uppercase flex items-center gap-1">
                      <Check className="h-3 w-3 text-brand-500" /> Baked Fresh
                    </span>
                    <button 
                      onClick={() => alert(`Golden Crust: ${item.name} is available for purchase at our main counter! Come visit us today.`)}
                      className="text-xs font-semibold text-brand-600 hover:text-brand-700 transition"
                    >
                      Pre-order →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Sourdough Notice */}
        <div className="mt-16 bg-[#ebe0cf]/30 border border-[#ebe0cf]/60 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-lg font-bold text-brand-950 mb-1">Dietary preferences or catering request?</h4>
            <p className="text-brand-800/80 text-xs sm:text-sm font-light">
              We offer gluten-free bread options, almond/oat milk for coffee, and local delivery services for corporate catering.
            </p>
          </div>
          <a
            href="#find-us"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-brand-950 text-[#fdfbf7] text-xs font-semibold tracking-wider uppercase hover:bg-brand-800 transition"
          >
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  );
}
