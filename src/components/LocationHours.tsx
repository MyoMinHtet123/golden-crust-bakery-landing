/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function LocationHours() {
  return (
    <section id="find-us" className="py-24 sm:py-32 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Information Block - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-brand-600 font-medium tracking-widest text-xs uppercase block mb-3">
              Visit Our Bakery
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-brand-950 mb-6">
              Location & Hours
            </h2>
            <p className="text-brand-800/80 text-sm sm:text-base font-light leading-relaxed mb-8">
              We are located in the heart of the Yeast District in San Francisco. Stop by for your early morning espresso, work from our cozy loft, or pre-order bread in bulk.
            </p>

            {/* Address, Phone, & Mail details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-100 text-brand-700 rounded-xl mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-950 mb-0.5">Address</h4>
                  <p className="text-brand-800/80 text-xs sm:text-sm font-light leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-100 text-brand-700 rounded-xl mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-950 mb-0.5">Contact Number</h4>
                  <p className="text-[#62482c] text-xs sm:text-sm font-semibold hover:underline transition">
                    <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-100 text-brand-700 rounded-xl mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-950 mb-0.5">Email Queries</h4>
                  <p className="text-[#62482c] text-xs sm:text-sm font-light hover:underline">
                    <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours list */}
            <div className="p-6 sm:p-8 bg-brand-100/50 border border-brand-200/50 rounded-2xl">
              <h3 className="font-serif text-lg font-bold text-brand-950 flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-brand-600 animate-pulse" />
                <span>Our Baker's Hours</span>
              </h3>
              
              <div className="space-y-3">
                {CONTACT_INFO.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm pb-2 border-b border-[#ebe0cf]/45 last:border-0 last:pb-0">
                    <span className="font-medium text-brand-900">{item.days}</span>
                    <span className="font-semibold text-brand-700">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Embedded Map Simulation - 7 cols */}
          <div className="lg:col-span-7 w-full h-full">
            <div className="relative group rounded-3xl overflow-hidden border border-[#ebe0cf]/60 shadow-lg aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[520px] bg-brand-100">
              
              {/* Map Canvas Visual Simulation */}
              <svg
                viewBox="0 0 800 600"
                className="w-full h-full object-cover bg-[#f3efdf]"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simulated Roads/Grids for Yeast District */}
                <path d="M 0,150 L 800,150" stroke="#fdfbf7" strokeWidth="24" fill="none" />
                <path d="M 0,350 L 800,350" stroke="#fdfbf7" strokeWidth="24" fill="none" />
                <path d="M 0,500 L 800,500" stroke="#fdfbf7" strokeWidth="16" fill="none" />
                
                <path d="M 200,0 L 200,600" stroke="#fdfbf7" strokeWidth="24" fill="none" />
                <path d="M 450,0 L 450,600" stroke="#fdfbf7" strokeWidth="32" fill="none" />
                <path d="M 680,0 L 680,600" stroke="#fdfbf7" strokeWidth="16" fill="none" />

                {/* Diagonal Avenue */}
                <path d="M -50,600 L 850,-100" stroke="#fdfbf7" strokeWidth="18" fill="none" />

                {/* Park / Greenery simulation */}
                <rect x="50" y="30" width="100" height="90" rx="10" fill="#dfebd2" />
                <text x="100" y="80" textAnchor="middle" fill="#6f8f4a" className="text-[10px] font-sans font-medium tracking-wide">Yeast Park</text>

                <rect x="495" y="385" width="150" height="90" rx="12" fill="#dfebd2" />
                <text x="570" y="435" textAnchor="middle" fill="#6f8f4a" className="text-[10px] font-sans font-medium tracking-wide">Baker's Garden</text>

                {/* Local Landmarks */}
                <text x="280" y="145" fill="#9c8770" className="text-[9px] font-mono select-none uppercase tracking-widest">Flour Blvd</text>
                <text x="510" y="280" fill="#9c8770" className="text-[9px] font-mono select-none uppercase tracking-widest" transform="rotate(90, 510, 280)">Artisan Way</text>
                <text x="30" y="345" fill="#9c8770" className="text-[9px] font-mono select-none uppercase tracking-widest">Sourdough St</text>

                {/* Glowing target highlight */}
                <circle cx="450" cy="350" r="30" fill="#a7885b" fillOpacity="0.15" />
                <circle cx="450" cy="350" r="15" fill="#937142" fillOpacity="0.3" />
                <circle cx="450" cy="350" r="6" fill="#7b5b33" />
                
                {/* Bakery Pin Marker Badge */}
                <g transform="translate(450, 310)">
                  <rect x="-65" y="-15" width="130" height="26" rx="6" fill="#2a1e12" />
                  <polygon points="0,15 -6,11 6,11" fill="#2a1e12" />
                  <text
                    x="0"
                    y="2"
                    textAnchor="middle"
                    fill="#fdfbf7"
                    className="text-[9px] font-sans font-semibold uppercase tracking-wider"
                  >
                    🥨 Golden Crust
                  </text>
                </g>
              </svg>

              {/* Top Banner overlay */}
              <div className="absolute top-4 left-4 bg-[#fdfbf7]/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-[#ebe0cf] shadow-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-semibold text-brand-950 uppercase tracking-wider">Open and baking right now</span>
              </div>

              {/* Bottom directions link */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-brand-950/95 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-medium tracking-widest text-[#ebe0cf] block">Located inside Yeast District</span>
                  <p className="text-white text-xs font-light mt-0.5">128 Artisans Way, San Francisco</p>
                </div>
                <a
                  href="https://maps.google.com/?q=128+Artisans+Way+San+Francisco+CA+94107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-500 text-white rounded-lg p-2.5 hover:bg-brand-400 transition"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
