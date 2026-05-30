/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import LocationHours from "./components/LocationHours";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-50 text-brand-950 font-sans selection:bg-brand-200 selection:text-brand-950">
      {/* Navigation Header */}
      <Header />

      {/* Hero Welcome Banner */}
      <Hero />

      {/* Featured Menu Grid with Filters */}
      <Menu />

      {/* Heritage / Story Section */}
      <About />

      {/* Features & Key Metrics section */}
      <WhyChooseUs />

      {/* Interactive Map, Hours & Info */}
      <LocationHours />

      {/* Footer bar */}
      <Footer />
    </div>
  );
}
