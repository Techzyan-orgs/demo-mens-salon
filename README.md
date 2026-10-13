# STOIC MEN'S SALON — Haute Barberie & Grooming Society Kolkata

A complete, production-grade, bespoke luxury men's salon website designed and built for **Stoic Men's Salon** in **Ballygunge, Kolkata, India**.

Inspired by quiet luxury aesthetics, high-fashion editorial layouts, bespoke Japanese scissorcraft, and curated for distinguished gentlemen in Kolkata.

---

## 1. Art Direction & Visual Identity

- **Background:** Deep charcoal and near-black (`#101010`, `#0C0C0C`, `#161616`)
- **Primary Accent:** Warm Champagne Gold (`#D6B477`, `#E8CE9E`, `#B39151`)
- **Secondary Tones:** Warm Ivory (`#F4F0E8`), Muted Grey (`#8E8A85`), Smoked Brass (`#282624`)
- **Typography:**
  - Display / Monograms: `Cinzel` (Google Fonts)
  - Editorial Headlines: `Cormorant Garamond` (Google Fonts)
  - Clean Modern Body: `Plus Jakarta Sans` / `Inter`
- **Atmosphere:** Dramatic lighting, rich shadows, subtle grain texture overlay, generous negative space, asymmetrical editorial layouts, and cinematic photography.

---

## 2. Interactive Features

1. **Custom Animated Preloader:** Monogram badge ("AA"), progress counter (0–100%), and smooth curtain exit.
2. **Trailing Luxury Cursor (Desktop):** Spring physics dot and champagne trailing halo, auto-disabled on touch devices.
3. **Magnetic Buttons:** Tactile physics attraction on hover with subtle shimmer sweep.
4. **Interactive Before/After Hairstyle Comparison Slider:** Real-time draggable comparison with touch/mouse interaction, divider line, circular gold grip handle, before/after badges, and keyboard arrow controls.
5. **Interactive Style Gallery & Lightbox:** Filterable categories (Bespoke Cuts, Precision Tapers, Beard Sculpting, Interiors) with an immersive fullscreen Lightbox modal with next/previous image navigation.
6. **Signature Services Repertoire:** 4 signature rituals with pricing in INR (₹), durations, expandable protocol steps, and instant booking triggers.
7. **Complete Reservation Modal:** Interactive booking flow with ritual selection, date/time pickers, master craftsman preference, guest details, instant voucher reference number generator, and a direct WhatsApp concierge booking button.
8. **Floating WhatsApp Concierge:** Fixed floating button with hover tooltip and configured WhatsApp destination.
9. **Editorial Brand Marquee:** Smooth ribbon of core atelier statements.
10. **Accessibility & Performance:** Semantic HTML, keyboard focus states, and full `prefers-reduced-motion` compliance.

---

## 3. Strict DRY Architecture — Single Source of Truth

All editable copy, business details, pricing, services, gallery items, address, hours, contact information, and theme design tokens are located in:

```
src/data/siteConfig.ts
```

### Modifying Content in Exactly One Place:
- **Change a Service or Price:** Edit `siteConfig.services.items` (all prices are typed in INR and formatted dynamically across cards and booking modals).
- **Change Kolkata Address / Hours:** Edit `siteConfig.visit` (updates address cards, Google Maps links, and mobile navigation).
- **Change WhatsApp Number / Concierge Text:** Edit `siteConfig.whatsapp` (updates both the floating button and the booking modal).
- **Add / Remove Gallery Looks:** Edit `siteConfig.gallery.items` (automatically updates the gallery grid, filter counts, and lightbox).

---

## 4. Tech Stack

- **Framework:** React 18 + Vite 5 (strictly no Next.js)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables + Grain Overlay
- **Animations:** Framer Motion 11
- **Icons:** Lucide React
- **Typography:** Google Fonts (`Cinzel`, `Cormorant Garamond`, `Plus Jakarta Sans`)

---

## 5. Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation & Development
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

The application will be served locally at `http://localhost:5173`.
