/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuCategory, FeatureCard, ContactInfo } from "./types";

export const HERO_IMAGE = "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop";
export const BAKERY_INTERIOR = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "bread",
    name: "Artisan Breads",
    description: "Sourdough, yeast, and whole grain breads baked fresh in our stone ovens every morning.",
    items: [
      {
        id: "b1",
        name: "Sourdough Loaf",
        description: "Naturally leavened 36-hour slow fermented classic sourdough with a blistered, crisp crust and open crumb.",
        price: 6.00,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=600&auto=format&fit=crop",
        tags: ["Best Seller", "Vegan"]
      },
      {
        id: "b2",
        name: "French Baguette",
        description: "Traditional Parisian baguette with a thin, crackly crust and light, airy interior. Perfect for sandwiches.",
        price: 4.00,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
        tags: ["Classic", "Vegan"]
      },
      {
        id: "b3",
        name: "Whole Wheat Bread",
        description: "Nutty and wholesome stone-ground organic wheat loaded with honey-toasted flaxseeds and sesame.",
        price: 5.00,
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=600&auto=format&fit=crop",
        tags: ["Healthy", "Organic"]
      }
    ]
  },
  {
    id: "bakery",
    name: "Pastries & Sweets",
    description: "Handcrafted laminated dough, classic morning buns, and delicious morning treats.",
    items: [
      {
        id: "p1",
        name: "Butter Croissant",
        description: "Ultra-flaky multi-layered pure Normandy butter croissant. Crispy gold exterior, soft honeycomb core.",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
        tags: ["Signature"]
      },
      {
        id: "p2",
        name: "Cinnamon Roll",
        description: "Soft brioche rolled with rich brown sugar and Saigon cinnamon, drizzled with sweet cream cheese glaze.",
        price: 4.00,
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=600&auto=format&fit=crop",
        tags: ["Warm", "Indulgent"]
      },
      {
        id: "p3",
        name: "Blueberry Muffin",
        description: "Stuffed with fresh wild blueberries and crowned with a toasted sugar streusel and hint of lemon zest.",
        price: 3.50,
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=600&auto=format&fit=crop",
        tags: ["Fresh Fruit"]
      },
      {
        id: "p4",
        name: "Chocolate Danish",
        description: "Flaky puff pastry enveloped around two bars of rich dark semi-sweet Belgian chocolate.",
        price: 4.00,
        image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=600&auto=format&fit=crop",
        tags: ["Kids Favorite"]
      }
    ]
  },
  {
    id: "coffee",
    name: "Specialty Coffee & Beverages",
    description: "Ethically sourced single-origin Arabica beans roasted locally and pulled with precision.",
    items: [
      {
        id: "c1",
        name: "Espresso",
        description: "Double shot of our house espresso blend. Notes of rich dark chocolate, roasted hazelnut, and citrus finish.",
        price: 3.00,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
        tags: ["House Roast"]
      },
      {
        id: "c2",
        name: "Cappuccino",
        description: "Equal parts double espresso, steamed milk, and silky, thick microfoam. dusted with cocoa.",
        price: 4.00,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop",
        tags: ["Classic"]
      },
      {
        id: "c3",
        name: "Latte",
        description: "Espresso combined with steamed milk and a thin layer of microfoam, showcasing hand-poured latte art.",
        price: 4.50,
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop",
        tags: ["Smooth"]
      },
      {
        id: "c4",
        name: "Mocha",
        description: "Espresso and steamed milk swirled with premium organic dark chocolate syrup, topped with fresh cocoa powder.",
        price: 5.00,
        image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=600&auto=format&fit=crop",
        tags: ["Sweet"]
      }
    ]
  }
];

export const FEATURES: FeatureCard[] = [
  {
    id: "f1",
    title: "Fresh Daily",
    description: "Our bakers start at 3:00 AM every night to ensure your morning baguette is warm, fresh, and perfectly golden.",
    icon: "Croissant"
  },
  {
    id: "f2",
    title: "Premium Coffee",
    description: "We partner with local roasters to select organic, ethically grown Arabica beans brewed to bring out optimal flavors.",
    icon: "Coffee"
  },
  {
    id: "f3",
    title: "Handmade Recipes",
    description: "No artificial mixtures or preservatives. Only high-quality butter, natural sourdough yeast, and pure organic flour.",
    icon: "Heart"
  }
];

export const CONTACT_INFO: ContactInfo = {
  address: "128 Artisans Way, Yeast District, San Francisco, CA 94107",
  phone: "(415) 555-0193",
  email: "hello@goldencrustbakery.com",
  hours: [
    { days: "Monday - Friday", hours: "6:30 AM - 5:00 PM" },
    { days: "Saturday & Sunday", hours: "7:30 AM - 4:00 PM" }
  ]
};
