/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Croissant, Facebook, Instagram, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-[#fdfbf7] pt-16 pb-12 border-t border-brand-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Small Logo & Brand description */}
          <div className="md:col-span-1.5 flex flex-col">
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <div className="p-1.5 rounded-lg bg-brand-800 text-brand-300">
                <Croissant className="h-5 w-5" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#fdfbf7]">
                Golden Crust
              </span>
            </a>
            
            <p className="text-brand-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6">
              Artisan breads, hand-rolled pastries, and locally-roasted specialty coffee. Formed with natural yeast starter and patience at Golden Crust Bakery.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brand-900 hover:bg-brand-700 hover:text-white transition"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-4 w-4 text-brand-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brand-900 hover:bg-brand-700 hover:text-white transition"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4 text-brand-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brand-900 hover:bg-brand-700 hover:text-white transition"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-4 w-4 text-brand-300" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-brand-300 uppercase tracking-widest mb-4">
              Our Bakery
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-brand-200/80 hover:text-[#fdfbf7] transition">
                  Welcome Card
                </a>
              </li>
              <li>
                <a href="#menu" className="text-brand-200/80 hover:text-[#fdfbf7] transition">
                  Menu Selection
                </a>
              </li>
              <li>
                <a href="#about" className="text-brand-200/80 hover:text-[#fdfbf7] transition">
                  Heritage Story
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-brand-200/80 hover:text-[#fdfbf7] transition">
                  Why Artisanal?
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact quick view */}
          <div>
            <h4 className="font-serif text-sm font-bold text-brand-300 uppercase tracking-widest mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-brand-200/80">
              <li className="leading-relaxed">
                128 Artisans Way, <br />
                Yeast District, SF
              </li>
              <li>
                <a href="tel:4155550193" className="hover:text-white transition">
                  (415) 555-0193
                </a>
              </li>
              <li>
                <a href="mailto:hello@goldencrustbakery.com" className="hover:text-white transition">
                  hello@goldencrustbakery.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter placeholder */}
          <div>
            <h4 className="font-serif text-sm font-bold text-brand-300 uppercase tracking-widest mb-4">
              Fresh News
            </h4>
            <p className="text-brand-300 text-xs font-light mb-4 leading-relaxed">
              Get 10% off your first bakery loaf and hear about seasonal morning pastries.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Welcome to the Golden Crust Family! Check your inbox for your 10% off voucher shortly."); }} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="your.email@gmail.com"
                className="w-full rounded-lg bg-brand-900 border border-brand-800/60 px-3 py-2 text-xs text-white placeholder-brand-400 focus:outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                className="bg-brand-500 text-white rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider hover:bg-brand-400 transition"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Divider and copyright bar */}
        <div className="pt-8 border-t border-brand-900/40 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-400 gap-4">
          <p>© {currentYear} Golden Crust Bakery. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-brand-500 fill-brand-500" /> in California.
          </p>
        </div>

      </div>
    </footer>
  );
}
