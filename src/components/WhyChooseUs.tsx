/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Croissant, Coffee, Heart, CheckCircle } from "lucide-react";
import { FEATURES } from "../data";

export default function WhyChooseUs() {
  const iconMap = {
    Croissant: <Croissant className="h-7 w-7 text-brand-600" />,
    Coffee: <Coffee className="h-7 w-7 text-brand-600" />,
    Heart: <Heart className="h-7 w-7 text-brand-600" />,
  };

  const statCounters = [
    { value: "100%", label: "Organic Flour" },
    { value: "36 hrs", label: "Slow Fermentation" },
    { value: "Freshly", label: "Baked Daily" },
    { value: "3K+", label: "Happy Customers" }
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#faf7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <span className="text-brand-600 font-medium tracking-widest text-xs uppercase block mb-3">
              Why Choose Golden Crust
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-brand-950">
              Why Customers Love Us
            </h2>
          </div>
          <div>
            <p className="text-brand-800/80 text-sm sm:text-base font-light leading-relaxed max-w-lg lg:ml-auto">
              We focus on traditional processes that elevate normal, daily morning snacks into rich, wholesome culinary memories.
            </p>
          </div>
        </div>

        {/* 3 Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {FEATURES.map((feature, idx) => (
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              key={feature.id}
              className="bg-[#fdfbf7] p-8 sm:p-10 rounded-3xl border border-[#ebe0cf]/60 shadow-sm flex flex-col items-start"
            >
              <div className="p-4 rounded-2xl bg-brand-100 mb-6 flex items-center justify-center">
                {iconMap[feature.icon as keyof typeof iconMap]}
              </div>
              
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-950 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-brand-800/80 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand Promises / Stats Banner */}
        <div className="bg-brand-950 rounded-[40px] text-[#fdfbf7] py-12 px-6 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {statCounters.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-300 mb-1">
                {stat.value}
              </span>
              <span className="text-brand-200/80 text-xs tracking-wider uppercase font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
