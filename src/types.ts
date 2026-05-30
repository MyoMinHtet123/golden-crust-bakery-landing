/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: BusinessHours[];
}
