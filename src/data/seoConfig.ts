import { Metadata } from "next";

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://h2industries-eta.vercel.app";

/**
 * CENTRALIZED SEO CONFIGURATION
 * Edit titles, descriptions, keywords, canonical URLs, and OpenGraph tags manually for every page below.
 */
export const seoPagesConfig: Record<string, PageSeoConfig> = {
  home: {
    title: "H2 Industries | Precision Water Management & Waterworks Infrastructure",
    description: "H2 Industries designs and manufactures precision-engineered hydro-infrastructure — from modular sampling stations and AWWA gate valves to municipal curb inlet castings — dedicated to protecting natural waterways.",
    keywords: [
      "H2 Industries",
      "waterworks castings",
      "water management engineering",
      "modular sampling stations",
      "stormwater drainage infrastructure",
      "AWWA gate valves",
      "mechanical joint restraint gland",
      "curb box Minneapolis pattern",
      "ocean conservation engineering",
      "municipal water infrastructure"
    ],
    canonical: `${SITE_URL}/`,
    ogTitle: "H2 Industries | Precision Hydro-Infrastructure Engineering",
    ogDescription: "Next-generation waterworks castings, valve boxes, and sampling enclosures engineered for multi-decade municipal performance.",
    ogImage: "/images/2.webp",
    ogType: "website"
  },
  company: {
    title: "Company Profile & Corporate Heritage | H2 Industries",
    description: "Learn about H2 Industries' 25+ years of engineering heritage, 120,000 sq ft manufacturing complex, ISO 9001:2015 certified QA laboratory, and core corporate values.",
    keywords: [
      "H2 Industries company profile",
      "waterworks manufacturer background",
      "ISO 9001 certified waterworks",
      "hydro infrastructure facilities",
      "North American waterworks supplier",
      "AWWA compliant foundry",
      "precision polymer moulding",
      "corporate water sustainability"
    ],
    canonical: `${SITE_URL}/company`,
    ogTitle: "About H2 Industries | Precision Waterworks Engineering Heritage",
    ogDescription: "Over two decades of precision manufacturing excellence for municipal water, civil infrastructure, and clean energy hydro systems.",
    ogImage: "/images/4.webp",
    ogType: "website"
  },
  waterworksCastings: {
    title: "AWWA Ductile Iron Pipe Fittings & Waterworks Castings Catalog | H2 Industries",
    description: "Browse H2 Industries' complete line of AWWA C153/C110 ductile iron fittings, Series 4000 wedge-action joint restraints, resilient wedge gate valves, and telescoping curb boxes.",
    keywords: [
      "waterworks castings catalog",
      "AWWA C153 compact fittings",
      "AWWA C110 full body fittings",
      "Series 4000 wedge restraint",
      "mechanical joint gasket pack",
      "Corten T-head bolt set",
      "resilient wedge gate valve",
      "valve box extension riser ring",
      "C900 PVC pipe restraint harness",
      "TxDOT approved curb inlet frame"
    ],
    canonical: `${SITE_URL}/waterworks-castings`,
    ogTitle: "AWWA Waterworks Castings & Pipe Restraint Fittings Catalog | H2 Industries",
    ogDescription: "Full municipal product catalog: ductile iron pipe fittings, gate valves, restraint glands, curb boxes, and Corten hardware with instant quote request.",
    ogImage: "/images/waterworks/di-pipe-fitting.webp",
    ogType: "website"
  },
  products: {
    title: "Municipal & Industrial Products Catalog | H2 Industries",
    description: "Explore H2 Industries' full range of municipal waterworks products, modular sampling stations, catch basin inlets, and high-pressure process water drainage systems.",
    keywords: [
      "H2 Industries products",
      "municipal water hardware",
      "sampling station enclosure",
      "stormwater catch basin",
      "industrial process water drainage",
      "traffic rated manhole cover",
      "AASHTO H-20 inlet frame",
      "potable water pipe fittings"
    ],
    canonical: `${SITE_URL}/products`,
    ogTitle: "Municipal & Industrial Products Catalog | H2 Industries",
    ogDescription: "High-performance hydro infrastructure hardware engineered for municipalities, utility districts, and industrial complexes.",
    ogImage: "/images/2.webp",
    ogType: "website"
  },
  capabilities: {
    title: "Manufacturing & Engineering Capabilities | H2 Industries",
    description: "Discover H2 Industries' manufacturing capabilities — CNC precision machining, polymer injection moulding, hydrostatic pressure testing, and custom CAD casting fabrication.",
    keywords: [
      "H2 Industries capabilities",
      "waterworks manufacturing process",
      "CNC machining water fittings",
      "polymer injection moulding",
      "hydrostatic burst testing",
      "custom ductile iron casting",
      "AWWA submittal drawing CAD",
      "OEM waterworks fabrication"
    ],
    canonical: `${SITE_URL}/capabilities`,
    ogTitle: "Manufacturing & Engineering Capabilities | H2 Industries",
    ogDescription: "State-of-the-art 120,000 sq ft production complex equipped with automated molding, hydrostatic testing, and precision machining.",
    ogImage: "/images/5.webp",
    ogType: "website"
  },
  quality: {
    title: "Quality Compliance & Technical Standards | H2 Industries",
    description: "H2 Industries quality assurance protocols: ISO 9001:2015 certified testing, AWWA C515/C110 compliance, NSF/ANSI 61 lead-free certification, and AASHTO H-20 load ratings.",
    keywords: [
      "H2 Industries quality compliance",
      "ISO 9001 2015 waterworks",
      "NSF ANSI 61 lead free certified",
      "AWWA C515 testing standard",
      "AASHTO M306 40000 lb proof load",
      "ASTM A48 Class 35B grey iron",
      "water quality compliance lab"
    ],
    canonical: `${SITE_URL}/quality`,
    ogTitle: "Quality Assurance & Compliance Standards | H2 Industries",
    ogDescription: "Zero-compromise testing protocols exceeding international engineering and environmental safety standards.",
    ogImage: "/images/3.webp",
    ogType: "website"
  },
  industries: {
    title: "Sectors & Global Industries We Serve | H2 Industries",
    description: "H2 Industries supplies tailored hydro-infrastructure hardware for Municipal Water, Marine & Coastal Outfalls, Civil Highways, Environmental Monitoring, Clean Energy, and Agriculture.",
    keywords: [
      "industries served H2 Industries",
      "municipal water authority supplier",
      "marine coastal outfall outfalls",
      "highway civil drainage castings",
      "environmental sampling infrastructure",
      "industrial chemical water management",
      "agricultural irrigation valve boxes"
    ],
    canonical: `${SITE_URL}/industries`,
    ogTitle: "Global Industries & Sectors Served | H2 Industries",
    ogDescription: "Precision water management hardware deployed across municipal, coastal, transportation, environmental, and clean energy projects.",
    ogImage: "/images/7.webp",
    ogType: "website"
  },
  calculator: {
    title: "Hydro Infrastructure Calculators & Engineering Tools | H2 Industries",
    description: "Interactive engineering tools for municipal contractors: calculate pipe restraint thrust resistance, waterworks fitting weights, and flow capacity dimensions.",
    keywords: [
      "waterworks calculator",
      "pipe restraint thrust calculator",
      "ductile iron fitting weight calculator",
      "valve box sizing tool",
      "stormwater runoff flow estimator",
      "AWWA fitting dimension reference"
    ],
    canonical: `${SITE_URL}/calculator`,
    ogTitle: "Engineering Calculators & Weight Estimation Tools | H2 Industries",
    ogDescription: "Interactive calculators for civil engineers and utility contractors specifying pipe restraints, valves, and waterworks castings.",
    ogImage: "/images/2.webp",
    ogType: "website"
  },
  blog: {
    title: "Industry Insights, Technical News & Engineering Blog | H2 Industries",
    description: "Read the latest technical articles, municipal case studies, and engineering insights on stormwater interception, clean energy water systems, and AWWA standards.",
    keywords: [
      "waterworks engineering blog",
      "H2 Industries technical articles",
      "stormwater interception research",
      "AWWA standards guide",
      "clean energy electrolyser water systems",
      "municipal infrastructure trends"
    ],
    canonical: `${SITE_URL}/blog`,
    ogTitle: "Hydro Infrastructure Insights & Engineering Blog | H2 Industries",
    ogDescription: "Expert technical articles on waterworks castings, municipal compliance, and sustainable water management.",
    ogImage: "/images/6.webp",
    ogType: "website"
  },
  login: {
    title: "Client & Contractor Portal Login | H2 Industries",
    description: "Sign in to access engineering submittals, 3D CAD library files, wholesale municipal pricing, and active RFQ project quotes.",
    keywords: ["H2 login", "waterworks contractor portal", "municipal engineering login", "CAD submittal download"],
    canonical: `${SITE_URL}/login`,
    ogTitle: "Client & Contractor Portal Login | H2 Industries",
    ogDescription: "Secure gateway for municipal water engineers, utility contractors, and master distributors.",
    ogImage: "/images/2.webp",
    ogType: "website"
  },
  register: {
    title: "Request Contractor & Municipal Portal Access | H2 Industries",
    description: "Apply for verified contractor, municipal engineer, or regional distributor access to H2 Industries CAD libraries, AWWA submittals, and wholesale jobsite pricing.",
    keywords: ["H2 register", "contractor trade account", "municipal engineering access", "waterworks distributor application"],
    canonical: `${SITE_URL}/register`,
    ogTitle: "Request Trade & Engineering Access | H2 Industries",
    ogDescription: "Apply for verified trade account access for waterworks submittals and CAD files.",
    ogImage: "/images/3.webp",
    ogType: "website"
  },
  portal: {
    title: "Client & Engineering Portal | H2 Industries",
    description: "Manage engineering submittals, download 3D CAD/DWG drawings, track project quote submittals, and access trade wholesale pricing.",
    keywords: ["H2 portal", "spec binder", "active project quotes", "AWWA CAD downloads"],
    canonical: `${SITE_URL}/portal`,
    ogTitle: "Client & Engineering Portal | H2 Industries",
    ogDescription: "Centralized hub for municipal engineers and utility contractors.",
    ogImage: "/images/4.webp",
    ogType: "website"
  },
  submittals: {
    title: "Engineering Submittals & CAD Library | H2 Industries",
    description: "Download official AWWA C515, ASTM A536, and AASHTO H-20 engineering submittals, AutoCAD DWG drawings, and third-party metallurgical test reports.",
    keywords: ["waterworks submittals", "AWWA C515 spec", "ASTM A536 submittal", "AutoCAD waterworks drawings", "DWG curb box"],
    canonical: `${SITE_URL}/submittals`,
    ogTitle: "Engineering Submittals & CAD Library | H2 Industries",
    ogDescription: "Official municipal specification sheets and native CAD/DWG drawings for waterworks infrastructure.",
    ogImage: "/images/5.webp",
    ogType: "website"
  },
  contact: {
    title: "Contact Engineering Sales & Regional Hubs | H2 Industries",
    description: "Get in touch with H2 Industries municipal waterworks engineers, request custom submittals, or connect with regional distribution hubs in NY, FL, and ON.",
    keywords: ["H2 Industries contact", "waterworks engineering sales", "municipal casting quotes", "Melville NY foundry", "Stuart FL distribution"],
    canonical: `${SITE_URL}/contact`,
    ogTitle: "Contact Engineering Sales | H2 Industries",
    ogDescription: "Connect directly with our applications engineering desk and regional distribution operations.",
    ogImage: "/images/7.webp",
    ogType: "website"
  },
  homepageTwo: {
    title: "Interactive Presentation Overview | H2 Industries",
    description: "Slide-based interactive overview of H2 Industries' core products, manufacturing facilities, global supply network, and quality standards.",
    keywords: [
      "H2 Industries presentation overview",
      "interactive waterworks tour",
      "hydro infrastructure showcase"
    ],
    canonical: `${SITE_URL}/homepage-two`,
    ogTitle: "Interactive Presentation Overview | H2 Industries",
    ogDescription: "Explore H2 Industries through an interactive presentation slide overview.",
    ogImage: "/images/2.webp",
    ogType: "website"
  }
};

/**
 * Helper function to generate Next.js Metadata object from seoPagesConfig
 */
export function getSeoMetadata(pageKey: keyof typeof seoPagesConfig, custom?: Partial<Metadata>): Metadata {
  const conf = seoPagesConfig[pageKey] || seoPagesConfig.home;

  return {
    title: custom?.title || conf.title,
    description: custom?.description || conf.description,
    keywords: custom?.keywords || conf.keywords,
    alternates: {
      canonical: conf.canonical,
    },
    openGraph: {
      title: conf.ogTitle || conf.title,
      description: conf.ogDescription || conf.description,
      url: conf.canonical,
      siteName: "H2 Industries",
      type: conf.ogType || "website",
      images: [
        {
          url: conf.ogImage || "/images/2.webp",
          width: 1200,
          height: 630,
          alt: conf.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: conf.ogTitle || conf.title,
      description: conf.ogDescription || conf.description,
      images: [conf.ogImage || "/images/2.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...custom,
  };
}
