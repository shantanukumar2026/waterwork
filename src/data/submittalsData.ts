export interface SubmittalItem {
  id: string;
  code: string;
  title: string;
  category: "Castings & Iron" | "Valves & Controls" | "Enclosures & Boxes" | "Quality & Certifications" | "Drainage & Stormwater";
  standard: string;
  trafficRating?: string;
  revision: string;
  format: "PDF" | "DWG / CAD" | "ZIP Pack";
  fileSize: string;
  description: string;
  downloadUrl: string;
}

export const SUBMITTALS_LIST: SubmittalItem[] = [
  {
    id: "sub-awwa-c515",
    code: "SUB-GV-C515-01",
    title: "AWWA C515 Resilient Wedge Gate Valve Specification & Submittal Package",
    category: "Valves & Controls",
    standard: "AWWA C515 / NSF 61 / UL-FM",
    trafficRating: "Full 250 PSI Rated",
    revision: "Rev 2026.2",
    format: "PDF",
    fileSize: "2.4 MB",
    description: "Full submittal packet with dimensional cross-sections, epoxy coating mil-thickness certifications, and hydrostatic body test data.",
    downloadUrl: "#"
  },
  {
    id: "sub-astm-a536",
    code: "SUB-DI-A536-04",
    title: "ASTM A536 Ductile Iron 65-45-12 Mechanical Restraint Gland Submittal",
    category: "Castings & Iron",
    standard: "ASTM A536 / AWWA C111",
    trafficRating: "AASHTO H-20",
    revision: "Rev 2026.1",
    format: "PDF",
    fileSize: "1.8 MB",
    description: "Metallurgical analysis, wedge hardness ratings, torque requirements, and deflection angle tolerances for PVC and ductile iron pipe.",
    downloadUrl: "#"
  },
  {
    id: "sub-curb-box-mn",
    code: "SUB-CB-MN5620",
    title: "Curb Box Minneapolis Pattern 5620-Series Adjustable Engineering Drawing",
    category: "Enclosures & Boxes",
    standard: "AWWA / City Municipal Standard",
    trafficRating: "Heavy Duty Municipal",
    revision: "Rev 2025.4",
    format: "DWG / CAD",
    fileSize: "4.1 MB",
    description: "Precision 2D CAD and 3D STEP drawings including arch pattern bases, pentagon brass operating plugs, and telescoping upper sections.",
    downloadUrl: "#"
  },
  {
    id: "sub-wedge-restraint",
    code: "SUB-WR-2000-08",
    title: "Series 2000 Wedge Joint Restraint Submittal for Ductile Iron & C900 PVC",
    category: "Castings & Iron",
    standard: "AWWA C111 / UNI-B-13",
    trafficRating: "AASHTO H-20 / HS-20",
    revision: "Rev 2026.2",
    format: "PDF",
    fileSize: "3.2 MB",
    description: "Includes twist-off torque nut specs, heat-treated ductile iron gripping wedges, and recommended field installation procedures.",
    downloadUrl: "#"
  },
  {
    id: "sub-gate-valves",
    code: "SUB-GV-C509-02",
    title: "AWWA C509 Heavy-Duty Resilient Seated Gate Valve with Non-Rising Stem (NRS)",
    category: "Valves & Controls",
    standard: "AWWA C509 / NSF/ANSI 372",
    trafficRating: "Full 250 PSI Rated",
    revision: "Rev 2025.9",
    format: "PDF",
    fileSize: "2.1 MB",
    description: "NSF/ANSI 61 and 372 lead-free certified gate valves with 316 stainless steel stem bolts and fusion-bonded epoxy internal coating.",
    downloadUrl: "#"
  },
  {
    id: "sub-valve-box-series",
    code: "SUB-VB-ARCH-12",
    title: "Cast Iron Two-Piece Slip & Screw Type Valve Box Architectural Submittal",
    category: "Enclosures & Boxes",
    standard: "ASTM A48 Class 35B",
    trafficRating: "AASHTO H-20 Highway Rated",
    revision: "Rev 2026.1",
    format: "DWG / CAD",
    fileSize: "5.6 MB",
    description: "Complete AutoCAD DWG packet showing 5-1/4 inch shaft assemblies, extension stems, and round drop lids marked 'WATER' or 'SEWER'.",
    downloadUrl: "#"
  },
  {
    id: "sub-di-fittings",
    code: "SUB-FT-C153-06",
    title: "Compact Ductile Iron Mechanical Joint Pipe Fittings (AWWA C153)",
    category: "Castings & Iron",
    standard: "AWWA C153 / ANSI A21.53",
    trafficRating: "350 PSI Working Pressure",
    revision: "Rev 2026.1",
    format: "PDF",
    fileSize: "4.8 MB",
    description: "Submittals covering tees, 45/90 bends, reducers, and crosses lined with cement mortar and seal coat per ANSI/AWWA C104.",
    downloadUrl: "#"
  },
  {
    id: "sub-meter-boxes",
    code: "SUB-MB-HDPE-14",
    title: "Heavy-Duty Polymer Composite Meter Box Enclosure & Reader Lid Submittal",
    category: "Enclosures & Boxes",
    standard: "AASHTO H-10 / H-20 Tier 15",
    trafficRating: "Pedestrian & Light Traffic",
    revision: "Rev 2025.11",
    format: "PDF",
    fileSize: "1.9 MB",
    description: "UV-stabilized HDPE high-density polymer box specifications with touch-read AMR/AMI antenna knockouts and cast iron reader lids.",
    downloadUrl: "#"
  },
  {
    id: "sub-drainage-column",
    code: "SUB-CD-6000-01",
    title: "Column Drainage Precast Infiltration & Catch Basin Engineering Package",
    category: "Drainage & Stormwater",
    standard: "EPA NPDES / ASTM C478",
    trafficRating: "Airport & Highway Rated",
    revision: "Rev 2026.2",
    format: "DWG / CAD",
    fileSize: "6.2 MB",
    description: "Engineering flow analysis, trash rack dimensions, and sediment trap calculations meeting regional environmental stormwater guidelines.",
    downloadUrl: "#"
  },
  {
    id: "sub-complete-catalog",
    code: "SUB-CAT-2026-ALL",
    title: "H2 Industries 2026 Master Engineering Catalog & Submittals Compendium",
    category: "Quality & Certifications",
    standard: "Full AWWA, ASTM & CSA Line",
    trafficRating: "Comprehensive",
    revision: "Annual Edition 2026",
    format: "ZIP Pack",
    fileSize: "38.5 MB",
    description: "Complete ZIP archive containing all 48 waterworks casting spec sheets, 3D CAD library files, material test reports, and ISO certs.",
    downloadUrl: "#"
  },
  {
    id: "sub-iso-9001",
    code: "CERT-ISO-9001-2015",
    title: "Official ISO 9001:2015 Quality Management Certificate & Foundry Audit",
    category: "Quality & Certifications",
    standard: "ISO 9001:2015 Accredited",
    trafficRating: "Quality Assurance",
    revision: "Valid thru 2027",
    format: "PDF",
    fileSize: "1.1 MB",
    description: "Accredited third-party registrar certificate covering melting, molding, machining, testing, and distribution of waterworks castings.",
    downloadUrl: "#"
  },
  {
    id: "sub-buy-american",
    code: "CERT-BAA-AIS-2026",
    title: "Buy American Act (BAA) & American Iron and Steel (AIS) Compliance Declaration",
    category: "Quality & Certifications",
    standard: "EPA AIS & Federal BAA",
    trafficRating: "Federal Compliance",
    revision: "Rev 2026",
    format: "PDF",
    fileSize: "950 KB",
    description: "Manufacturer signed certification stating all covered iron and steel products are produced in the United States and Canada.",
    downloadUrl: "#"
  }
];

