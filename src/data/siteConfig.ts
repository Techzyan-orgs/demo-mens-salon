/**
 * STOIC MEN'S SALON — CENTRAL SITE CONFIGURATION & SOURCE OF TRUTH
 * 
 * Strict DRY architecture: All editable copy, business details,
 * services, pricing (in INR), gallery assets, imagery, contact info,
 * theme design tokens, and interactive options reside exclusively here.
 * 
 * Luxury Men's Salon in Ballygunge, Kolkata, India.
 */

// ============================================================================
// SINGLE SOURCE OF TRUTH: CONTACT DETAILS
// Edit this phone number to update website text, call links, and WhatsApp redirect:
// ============================================================================
const PRIMARY_PHONE_DISPLAY = "+91 74393 03013";
const PRIMARY_PHONE_DIGITS = "917439303013";

export interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  priceINR: number;
  featured: boolean;
  description: string;
  ritualSteps: string[];
  image: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fades' | 'cuts' | 'beards' | 'interior';
  categoryLabel: string;
  image: string;
  aspect: string;
  caption: string;
  details: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  publication: string;
}

export interface ExperiencePillar {
  number: string;
  title: string;
  description: string;
  iconName: 'Shield' | 'Coffee' | 'Sparkles' | 'Scissors' | 'Clock' | 'Compass';
}

export interface SiteConfig {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    city: string;
    state: string;
    country: string;
    disclaimer: string;
  };
  brand: {
    name: string;
    monogram: string;
    subheading: string;
    establishedYear: string;
    locationShort: string;
    tagline: string;
    editorialStatement: string;
  };
  theme: {
    colors: {
      backgroundDark: string;
      surfaceDark: string;
      cardDark: string;
      primaryGold: string;
      lightGold: string;
      darkGold: string;
      ivoryText: string;
      mutedGrey: string;
      borderSubtle: string;
    };
    fonts: {
      serifHeading: string;
      displayLogo: string;
      sansBody: string;
    };
  };
  navigation: {
    links: Array<{ label: string; href: string }>;
    ctaLabel: string;
  };
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlineAccent: string;
    headlinePart2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    scrollText: string;
    backgroundImage: string;
    mobileBackgroundImage: string;
    stats: Array<{ value: string; label: string }>;
  };
  marquee: {
    items: string[];
  };
  services: {
    eyebrow: string;
    heading: string;
    description: string;
    currencySymbol: string;
    items: ServiceItem[];
    ctaLabel: string;
    note: string;
  };
  craft: {
    eyebrow: string;
    heading: string;
    italicHighlight: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
    imagePrimary: string;
    standards: Array<{ title: string; desc: string }>;
  };
  comparison: {
    eyebrow: string;
    heading: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    beforeImage: string;
    afterImage: string;
    title: string;
    treatmentDetails: string;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    description: string;
    categories: Array<{ id: string; label: string }>;
    items: GalleryItem[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    description: string;
    pillars: ExperiencePillar[];
    bannerImage: string;
    quote: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    items: TestimonialItem[];
  };
  visit: {
    eyebrow: string;
    heading: string;
    description: string;
    locationName: string;
    addressLine1: string;
    addressLine2: string;
    landmark: string;
    cityPin: string;
    hours: Array<{ days: string; time: string; note?: string }>;
    phone: string;
    phoneFormatted: string;
    email: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    valetNote: string;
  };
  bookingModal: {
    title: string;
    subtitle: string;
    submitLabel: string;
    whatsappBookingLabel: string;
    successTitle: string;
    successMessage: string;
    timeSlots: string[];
    barbers: Array<{ id: string; name: string; title: string }>;
  };
  whatsapp: {
    phoneNumberDigits: string;
    defaultMessage: string;
    floatingTooltip: string;
  };
  footer: {
    summary: string;
    quickLinksTitle: string;
    legalTitle: string;
    socialTitle?: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    copyright: string;
    curatedBy: string;
    fictionalNotice: string;
    socialLinks: Array<{ name: string; url: string; icon?: string; ariaLabel?: string }>;
    backToTopLabel: string;
  };
  features?: {
    enableMagneticButtons: boolean;
  };
}

export const siteConfig: SiteConfig = {
  meta: {
    title: "STOIC MEN'S SALON | Fine Barbering & Grooming Kolkata",
    description: "Kolkata's premier private luxury men's salon. Masterful Japanese scissor work, classic hot-towel shaves, and private acoustic suites in Ballygunge.",
    keywords: [
      "stoic mens salon kolkata",
      "luxury mens salon kolkata",
      "fine barbering kolkata",
      "barbershop ballygunge",
      "premium hair styling men kolkata",
      "straight razor shave kolkata"
    ],
    ogImage: "/images/hero_indian.jpg",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    disclaimer: "Fictional luxury demo presentation designed for portfolio showcase. All bookings and appointments are demo simulations."
  },

  brand: {
    name: "STOIC MEN'S SALON",
    monogram: "SMS",
    subheading: "FINE BARBERING & PRIVATE GROOMING",
    establishedYear: "MMXIV",
    locationShort: "Ballygunge • Kolkata",
    tagline: "The Discipline of Composure.",
    editorialStatement: "Where master Japanese shear craftsmanship meets quiet, dark luxury in the heart of South Kolkata."
  },

  theme: {
    colors: {
      backgroundDark: "#101010",
      surfaceDark: "#161616",
      cardDark: "#1c1c1c",
      primaryGold: "#D6B477",
      lightGold: "#E8CE9E",
      darkGold: "#B39151",
      ivoryText: "#F4F0E8",
      mutedGrey: "#8E8A85",
      borderSubtle: "#282624"
    },
    fonts: {
      serifHeading: "Cormorant Garamond, Georgia, serif",
      displayLogo: "Cinzel, serif",
      sansBody: "Plus Jakarta Sans, Inter, sans-serif"
    }
  },

  navigation: {
    links: [
      { label: "The Craft", href: "#craft" },
      { label: "Signature Services", href: "#services" },
      { label: "Transformation", href: "#transformation" },
      { label: "Style Gallery", href: "#gallery" },
      { label: "The Experience", href: "#experience" },
      { label: "Visit & Hours", href: "#visit" }
    ],
    ctaLabel: "Reserve Suite"
  },

  hero: {
    eyebrow: "MMXIV • BALLYGUNGE CIRCULAR ROAD",
    headlinePart1: "THE DISCIPLINE OF",
    headlineAccent: "STOIC",
    headlinePart2: "",
    description: "A private grooming space in Ballygunge for gentlemen who value precision over trend. Master shearwork, traditional hot-towel shaves, and quiet teakwood suites insulated from Kolkata's bustle.",
    primaryCta: "Reserve Appointment",
    secondaryCta: "View Services",
    scrollText: "SCROLL TO DISCOVER",
    backgroundImage: "/images/hero_indian.jpg",
    mobileBackgroundImage: "/images/hero_indian.jpg",
    stats: [
      { value: "100%", label: "Private Suite Seclusion" },
      { value: "440C", label: "Cobalt Japanese Shears" },
      { value: "60 Min", label: "Unrushed Appointment Standard" },
      { value: "4.98 ★", label: "Gentlemen's Distinction Rating" }
    ]
  },

  marquee: {
    items: [
      "MASTER SCISSOR WORK",
      "JAPANESE 440C COBALT STEEL",
      "TRADITIONAL HOT TOWEL SHAVES",
      "PRIVATE TEAKWOOD SUITES",
      "BALLYGUNGE CIRCULAR ROAD",
      "COLD PRESSED BOTANICAL TONICS",
      "SINGLE-ORIGIN DARJEELING COMPLIMENTARY",
      "BY APPOINTMENT ONLY"
    ]
  },

  services: {
    eyebrow: "MENS GROOMING MENU",
    heading: "SIGNATURE SERVICES",
    description: "Each service is delivered inside a quiet, individual room. Pricing includes personal consultation, herbal steam, and complimentary bar refreshments.",
    currencySymbol: "₹",
    ctaLabel: "Book This Service",
    note: "All appointments include a personal styling consultation and complimentary beverage service (Darjeeling First Flush tea or Speyside single malt).",
    items: [
      {
        id: "signature-cut",
        name: "The Signature Cut",
        subtitle: "Architectural Shear Cutting & Scalp Care",
        duration: "55 Mins",
        priceINR: 2400,
        featured: true,
        badge: "Most Requested",
        description: "A precision haircut tailored to head shape and hair growth direction. Includes an invigorating cedarwood scalp wash, warm towel compress, and neckline taper.",
        ritualSteps: [
          "Hair texture and growth pattern assessment",
          "Precision wet shear cutting with Japanese cobalt steel",
          "Botanical wash & rosemary oil scalp massage",
          "Straight-razor neck cleanup with warm eucalyptus lather",
          "Natural matte clay or low-shine pomade finish"
        ],
        image: "/images/service_cut.jpg"
      },
      {
        id: "classic-shave",
        name: "The Classic Straight Shave",
        subtitle: "Japanese Razor & Botanical Steam",
        duration: "45 Mins",
        priceINR: 1900,
        featured: false,
        badge: "Traditional Luxury",
        description: "The time-honored straight-razor shave. Four separate warm herbal towel wraps, artisan sandalwood lather, double-pass shave, and cool rosewater finish.",
        ritualSteps: [
          "Pre-shave sandalwood essential oil application",
          "Warm herbal steam to soften beard follicles",
          "Double-pass glide with Feather Artist Club razor",
          "Cool jade stone compress to close pores",
          "Alcohol-free botanical soothing balm"
        ],
        image: "/images/service_shave.jpg"
      },
      {
        id: "beard-sculpt",
        name: "Beard Sculpt & Hydro-Steam",
        subtitle: "Contour Shaping & Steam Treatment",
        duration: "40 Mins",
        priceINR: 1600,
        featured: false,
        description: "Precision beard shaping sculpted to your jawline. Softened with warm micro-steam vapor, trimmed by hand, and finished with organic jojoba beard oil.",
        ritualSteps: [
          "Jawline proportion framing and bulk reduction",
          "Cheek and neckline razor line cleanup",
          "Warm steam conditioning treatment",
          "Acupressure jaw massage with oud & bergamot oil",
          "Natural boar-bristle brush shaping"
        ],
        image: "/images/service_beard.jpg"
      },
      {
        id: "stoic-master",
        name: "The Stoic Master Service",
        subtitle: "The Complete 90-Minute Signature Experience",
        duration: "90 Mins",
        priceINR: 4800,
        featured: true,
        badge: "Full Service",
        description: "Our complete executive treatment: The Signature Cut, The Classic Straight Shave, deep detox facial mask, neck and shoulder acupressure, and hand care.",
        ritualSteps: [
          "Comprehensive hair sculpt and warm towel neck finish",
          "Full double-pass straight-razor shave",
          "Deep purifying volcanic clay face treatment",
          "20-minute cranial, neck, and shoulder pressure release",
          "Hand massage and cuticle conditioning"
        ],
        image: "/images/service_grand.jpg"
      }
    ]
  },

  craft: {
    eyebrow: "PHILOSOPHY & LINEAGE",
    heading: "HONED IN SHADOWS, ELEVATED BY RESTRAINT",
    italicHighlight: "grooming is not maintenance — it is an intimate ceremony of composure.",
    paragraphs: [
      "In a culture conditioned to relentless speed and assembly-line chairs, Stoic Men's Salon operates on an entirely distinct temporal plane. Founded in Kolkata, we reject sterile clippers in favor of quiet private chambers, hand-hammered brass, and the whispered glide of Japanese carbon steel.",
      "Our barbers bring decades of discipline honed across Tokyo, London, and Kolkata's historic heritage districts. Every hairline, jawline, and beard contour is cut with intentional precision."
    ],
    quote: "Perfection is attained not when there is nothing more to add, but when nothing can be taken away.",
    quoteAuthor: "Stoic Men's Salon — Founding Creed",
    imagePrimary: "/images/craft_artisan.jpg",
    standards: [
      {
        title: "Single-Guest Soundproof Chambers",
        desc: "Never sit elbow-to-elbow. Each appointment is conducted in complete auditory serenity with personal acoustic controls."
      },
      {
        title: "Medical-Grade Ultrasonic Sterilization",
        desc: "Blades, combs, and shear sets undergo hospital autoclave sterilization and are unsealed exclusively in your presence."
      },
      {
        title: "Cold-Pressed Botanical Formulations",
        desc: "All shampoos, waxes, and aftershaves are prepared in small batches using Himalayan cedar, vetiver, and pure bergamot."
      }
    ]
  },

  comparison: {
    eyebrow: "PRECISION BEFORE & AFTER",
    heading: "THE ARCHITECTURAL TRANSFORMATION",
    description: "Slide to inspect the refined transition achieved through cranial re-contouring, a low skin fade taper, and straight-razor beard framing.",
    beforeLabel: "Before — Unstructured Volume",
    afterLabel: "After — Stoic Refined Cut",
    beforeImage: "/images/transformation_before.jpg",
    afterImage: "/images/transformation_after.jpg",
    title: "Low Taper & Sculpted Jawline Profile",
    treatmentDetails: "Precision cranial shaping, low skin taper fade, and clean straight-razor beard framing for a distinguished Kolkata gentleman."
  },

  gallery: {
    eyebrow: "LOOKBOOK",
    heading: "STYLE ARCHIVE",
    description: "A visual record of our work — from clean skin tapers and scissor silhouettes to the quiet atmosphere of our Ballygunge suites.",
    categories: [
      { id: "all", label: "All Works" },
      { id: "cuts", label: "Haircuts & Styling" },
      { id: "fades", label: "Precision Tapers" },
      { id: "beards", label: "Beard Sculpting" },
      { id: "interior", label: "The Salon Space" }
    ],
    items: [
      {
        id: "gal-1",
        title: "The Executive Pompadour & Fade",
        category: "cuts",
        categoryLabel: "Signature Cut",
        image: "/images/service_cut.jpg",
        aspect: "aspect-[4/5]",
        caption: "Hand-finished modern pompadour with textured volume and skin fade.",
        details: "Japanese cobalt shear finish with hand-feathered crown."
      },
      {
        id: "gal-2",
        title: "Stoic Ballygunge Private Suite",
        category: "interior",
        categoryLabel: "Salon Interior",
        image: "/images/gallery_interior.jpg",
        aspect: "aspect-[3/4]",
        caption: "Private acoustic grooming suite with restored Takara Belmont hydraulic throne.",
        details: "Surrounded by brushed champagne brass and acoustic wood louvers."
      },
      {
        id: "gal-3",
        title: "Low Skin Taper & Textured Crop",
        category: "fades",
        categoryLabel: "Precision Taper",
        image: "/images/gallery_fade.jpg",
        aspect: "aspect-[4/5]",
        caption: "Seamless skin fade graduated into modern textured top with clean neckline.",
        details: "Zero harsh lines, natural transition preserving temple density."
      },
      {
        id: "gal-4",
        title: "Sculpted Jawline & Royal Beard",
        category: "beards",
        categoryLabel: "Beard Sculpting",
        image: "/images/service_beard.jpg",
        aspect: "aspect-[3/4]",
        caption: "Clean cheek razor finish with organic jojoba beard oil seal.",
        details: "Straight-edge razor definition with hand-sheared mustache drape."
      },
      {
        id: "gal-5",
        title: "The Classic Straight Shave",
        category: "interior",
        categoryLabel: "Shaves & Grooming",
        image: "/images/service_shave.jpg",
        aspect: "aspect-[4/5]",
        caption: "Artisan sandalwood foam, hot botanical compresses, and Feather razor glide.",
        details: "Finished with chilled rosewater and post-shave balm."
      },
      {
        id: "gal-6",
        title: "Classic Side Parting & Tailored Stubble",
        category: "cuts",
        categoryLabel: "Executive Cut",
        image: "/images/gallery_sidepart.jpg",
        aspect: "aspect-[3/4]",
        caption: "Tailored executive side part with medium luster pomade and designer stubble.",
        details: "Sculpted to facial symmetry and natural hairline direction."
      }
    ]
  },

  experience: {
    eyebrow: "THE SALON EXPERIENCE",
    heading: "AN ATMOSPHERE BUILT FOR COMPOSURE",
    description: "Every detail at Stoic Men's Salon — from the cedarwood ambient scent to our private single-malt bar — is designed for relaxation and focus.",
    bannerImage: "/images/service_grand.jpg",
    quote: "In a noisy world, quiet craftsmanship is the rarest luxury.",
    pillars: [
      {
        number: "01",
        title: "Acoustic Isolation",
        description: "Double-insulated private treatment rooms ensure complete confidentiality and calm, insulated from Kolkata's traffic.",
        iconName: "Shield"
      },
      {
        number: "02",
        title: "Gentlemen's Bar & Cellar",
        description: "Enjoy complimentary hand-pulled espresso, single-estate Darjeeling tea, or a dram of aged Highland scotch with every booking.",
        iconName: "Coffee"
      },
      {
        number: "03",
        title: "Artisanal Aromatherapeutics",
        description: "Our signature ambient scent weaves natural vetiver, Atlas cedarwood, and Sicilian bergamot through quiet diffusers.",
        iconName: "Sparkles"
      },
      {
        number: "04",
        title: "Master Guild Craftsmanship",
        description: "Each barber holds over a decade of salon experience, committed to unhurried, meticulous artistry.",
        iconName: "Scissors"
      }
    ]
  },

  testimonials: {
    eyebrow: "PATRON WORDS",
    heading: "CLIENT REVIEWS",
    items: [
      {
        id: "test-1",
        quote: "Stoic Men's Salon is easily the finest barbershop in Kolkata. The scissor control, attention to detail, and private suites make every visit exceptional.",
        author: "Devratn Sanyal",
        role: "Managing Director, Sovereign Equity",
        publication: "Client since 2021"
      },
      {
        id: "test-2",
        quote: "The hot towel straight razor shave alone is worth the visit to Ballygunge. Having a completely private suite makes your routine haircut feel like a quiet hour to recharge.",
        author: "Vikramaditya Roy",
        role: "Principal Architect, Studio Ballygunge",
        publication: "Client since 2022"
      },
      {
        id: "test-3",
        quote: "Remarkable restraint in design, uncompromising craftsmanship in every scissor cut. They understand that true quality speaks for itself.",
        author: "Anirban Mukherjee",
        role: "Author & Creative Director",
        publication: "Client since 2023"
      }
    ]
  },

  visit: {
    eyebrow: "LOCATION & HOURS",
    heading: "VISIT THE SALON",
    description: "Located along the quiet shaded avenues of Ballygunge Circular Road. Complimentary valet parking is provided at our private gates.",
    locationName: "STOIC MEN'S SALON BALLYGUNGE",
    addressLine1: "34/1 Ballygunge Circular Road",
    addressLine2: "Beside Tripura Castle Estate",
    landmark: "South Kolkata, Landmark: Opposite Birla Temple Avenue",
    cityPin: "Kolkata, West Bengal 700019",
    hours: [
      { days: "Tuesday — Saturday", time: "10:30 AM — 8:30 PM", note: "General Appointments" },
      { days: "Sunday", time: "11:00 AM — 7:00 PM", note: "Private Suite Appointments" },
      { days: "Monday", time: "Closed", note: "Master Barber Training & Maintenance" }
    ],
    phone: PRIMARY_PHONE_DISPLAY,
    phoneFormatted: PRIMARY_PHONE_DISPLAY,
    email: "contact@techzyan.org",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14741.053738096383!2d88.35515286977539!3d22.531818200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276dfac02e1b1%3A0xe54d6f85386dbd76!2sBallygunge%20Circular%20Rd%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Ballygunge+Circular+Road+Kolkata",
    valetNote: "Complimentary white-glove valet parking is provided at the main gate."
  },

  bookingModal: {
    title: "Reserve Your Private Suite",
    subtitle: "Select your preferred grooming service and date. Our concierge will confirm your suite immediately.",
    submitLabel: "Confirm Reservation Request",
    whatsappBookingLabel: "Book Instantly via WhatsApp",
    successTitle: "Reservation Request Received",
    successMessage: "Your private suite request has been forwarded to our Ballygunge concierge. A personalized confirmation voucher will be sent to your phone within 15 minutes.",
    timeSlots: [
      "10:30 AM", "11:45 AM", "01:00 PM", "02:30 PM",
      "03:45 PM", "05:00 PM", "06:15 PM", "07:30 PM"
    ],
    barbers: [
      { id: "any", name: "Next Available Master Craftsman", title: "Senior Stylist" },
      { id: "k-mukherjee", name: "Kaushik Mukherjee", title: "Master Barber — 14 Yrs Pedigree" },
      { id: "s-chatterjee", name: "Siddhartha Chatterjee", title: "Razor & Shave Specialist" },
      { id: "t-bose", name: "Tanmoy Bose", title: "Texture & Fade Architect" }
    ]
  },

  whatsapp: {
    phoneNumberDigits: PRIMARY_PHONE_DIGITS,
    defaultMessage: "Hello Stoic Men's Salon, I would like to reserve a private grooming appointment at your Ballygunge salon.",
    floatingTooltip: "Direct Concierge WhatsApp"
  },

  footer: {
    summary: "Kolkata's premier private luxury men's salon. Dedicated to classic Japanese scissor craftsmanship, clean skin tapers, and unhurried grooming.",
    quickLinksTitle: "Navigation",
    legalTitle: "Stoic Society",
    socialTitle: "Stoic Society",
    newsletterTitle: "The Gentlemen's Dispatch",
    newsletterDesc: "Receive our quarterly dispatch on classic haircutting, beard care, and private salon announcements.",
    newsletterPlaceholder: "Your email address",
    newsletterButton: "Request Invitation",
    copyright: "© 2026 STOIC MEN'S SALON KOLKATA. ALL RIGHTS RESERVED.",
    curatedBy: "Art Direction & Architectural Grooming System by Stoic Men's Salon.",
    fictionalNotice: "Fictional luxury demo presentation for portfolio purposes. No real transactions are processed.",
    socialLinks: [
      {
        name: "Facebook",
        url: "https://facebook.com/stoicmensalon",
        icon: "Facebook",
        ariaLabel: "Follow Stoic Men's Salon on Facebook"
      },
      {
        name: "Instagram",
        url: "https://instagram.com/stoicmensalon",
        icon: "Instagram",
        ariaLabel: "Follow Stoic Men's Salon on Instagram"
      },
      {
        name: "WhatsApp",
        url: `https://wa.me/${PRIMARY_PHONE_DIGITS}?text=${encodeURIComponent("Hello Stoic Men's Salon, I would like to inquire about appointments.")}`,
        icon: "WhatsApp",
        ariaLabel: "Chat with Stoic Men's Salon Concierge on WhatsApp"
      }
    ],
    backToTopLabel: "RETURN TO SUMMIT"
  },
  features: {
    // Set to false so CTA buttons stay completely stationary and firm on mouse hover
    enableMagneticButtons: false
  }
};
