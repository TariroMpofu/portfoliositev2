// Portfolio home — static content. Copy is final; do not paraphrase.

export type Audience = "anyone" | "recruiters" | "engineers" | "product";

export interface AudienceConfig {
  label: string;
  eyebrow: string;
  statement: string;
  caption: string;
  order: ProjectId[];
}

export type ProjectId =
  | "stockroom"
  | "relay"
  | "churn"
  | "fdms"
  | "mental"
  | "shelfline"
  | "sap"
  | "kwizi"
  | "islamic"
  | "asset"
  | "website";

export interface Project {
  title: string;
  meta: string;
  year: string;
  blurb: string;
  tags: string[];
  linkLabel: string;
  linkHref: string;
  // Optional second link (e.g. store listing + privacy policy).
  link2Label?: string;
  link2Href?: string;
  // Per-audience highlight callout. Optional — extra projects have none.
  hi?: { recruiters: string; engineers: string; product: string };
}

// Extra projects always shown after the ranked group (same order for every audience).
const EXTRA_ORDER: ProjectId[] = ["sap", "kwizi", "islamic", "asset", "website"];

export const AUDIENCES: Record<Audience, AudienceConfig> = {
  anyone: {
    label: "For Anyone",
    eyebrow: "FOR ANYONE",
    statement:
      "I'm a developer who loves creating meaningful digital experiences — with a focus on tech, minimalism, and where they intersect.",
    caption: "SELECTED PROJECTS",
    order: ["stockroom", "shelfline", "relay", "churn", "fdms", "mental", ...EXTRA_ORDER],
  },
  recruiters: {
    label: "Recruiters",
    eyebrow: "FOR RECRUITERS",
    statement:
      "4+ years shipping production software across mobile, data and enterprise POS — for clients like KFC, Adidas and Simbisa Brands.",
    caption: "RANKED BY IMPACT",
    order: ["stockroom", "fdms", "churn", "shelfline", "relay", "mental", ...EXTRA_ORDER],
  },
  engineers: {
    label: "Engineers",
    eyebrow: "FOR ENGINEERS",
    statement:
      "Flutter, Python and C#. Offline-first mobile, Random-Forest ML, and fiscal-compliance integrations on iVend, Unity & GAAP.",
    caption: "RANKED BY DEPTH",
    order: ["stockroom", "shelfline", "churn", "relay", "fdms", "mental", ...EXTRA_ORDER],
  },
  product: {
    label: "Product Managers",
    eyebrow: "FOR PRODUCT MANAGERS",
    statement:
      "I turn ambiguous requirements into shipped product — barcode stock-takes, CRM automation, and compliance tooling that hit hard deadlines.",
    caption: "RANKED BY OUTCOMES",
    order: ["fdms", "stockroom", "shelfline", "relay", "mental", "churn", ...EXTRA_ORDER],
  },
};

export const HIGHLIGHT_LABEL: Record<
  Exclude<Audience, "anyone">,
  string
> = {
  recruiters: "WHY IT MATTERS",
  engineers: "UNDER THE HOOD",
  product: "THE OUTCOME",
};

export const PROJECTS: Record<ProjectId, Project> = {
  stockroom: {
    title: "StockRoom — iVend Stock Take App",
    meta: "MOBILE · iOS / ANDROID",
    year: "2026",
    blurb:
      "StockRoom turns the stock-take — usually a slow, paper-driven chore that ties up staff and still gets numbers wrong — into a fast, accurate mobile workflow. Teams scan to count, keep working when the network drops, and push reconciled inventory straight into iVend with zero manual re-keying. The payoff: counts finished in a fraction of the time, stock figures the business can actually trust, and a rollout that scales cleanly from a single store to an entire retail estate.",
    tags: [
      "Flutter",
      "Dart",
      "iOS",
      "Android",
      "Supabase",
      "REST API",
      "Provider",
      "Barcode Scanning",
      "Offline-first",
    ],
    linkLabel: "Get it on Google Play",
    linkHref:
      "https://play.google.com/store/apps/details?id=zw.co.tarirom.stocktake&pcampaignid=web_share",
    link2Label: "Privacy & details",
    link2Href: "/stockroom-privacy",
    hi: {
      recruiters:
        "The flagship of my portfolio — shipped to field staff across multiple retail sites.",
      engineers:
        "Offline-first sync, Keychain / SSAID device licensing via Supabase, Provider state, live barcode decode.",
      product:
        "Stock-takes done in a fraction of the time with inventory figures the business can trust — and it scales from one store to a whole estate.",
    },
  },
  relay: {
    title: "Relay",
    meta: "MOBILE · CRM COMPANION",
    year: "2025",
    blurb:
      "A Flutter CRM companion for the Touch Africa team — integrating Gmail and Zoho APIs to centralize communication, automate handovers, and streamline follow-ups.",
    tags: ["Flutter", "Dart", "Gmail API", "Zoho API", "OAuth"],
    linkLabel: "LinkedIn post",
    linkHref:
      "https://www.linkedin.com/feed/update/urn:li:activity:7359189121493364736/",
    hi: {
      recruiters: "Built for an internal team and adopted into daily workflows.",
      engineers:
        "OAuth into Gmail + Zoho, structured interaction tracking, automated handover logic.",
      product:
        "Cut manual follow-up effort and gave the team one source of truth for client comms.",
    },
  },
  churn: {
    title: "Churn Prediction Model",
    meta: "DATA · ML / WEB",
    year: "2024",
    blurb:
      "Published research on customer attrition in Zimbabwe's telecom sector, then built a Random-Forest churn model at 87% accuracy and deployed it as a Flask web app for non-technical stakeholders.",
    tags: ["Python", "Django", "Flask", "scikit-learn", "Heroku"],
    linkLabel: "Read the research",
    linkHref:
      "https://drive.google.com/drive/folders/1FY6Z3xyQW2narXeCFmuPvZSm0H1BgU5K?usp=drive_link",
    hi: {
      recruiters:
        "Authored and published research, then shipped the model to production.",
      engineers:
        "Random Forest with feature engineering, 87% accuracy, Flask deployment on Heroku.",
      product:
        "Turned a churn problem into a usable tool any stakeholder can run.",
    },
  },
  fdms: {
    title: "FDMS Buyer Details Compliance",
    meta: "ENTERPRISE · POS",
    year: "2025",
    blurb:
      "Integrated mandatory buyer-detail capture into iVend, Unity and QSR POS systems to meet ZIMRA's VAT Act Section 20(4) — coordinating fiscal-device upgrades so clients hit the 31 May deadline and kept VAT-claim eligibility.",
    tags: ["C#", "iVend", "Unity POS", "FDMS Portal"],
    linkLabel: "Case notes",
    linkHref:
      "https://drive.google.com/file/d/1Yd9fqgvYOKG1AgLCSjD20p1eMb3pExHb/view?usp=sharing",
    hi: {
      recruiters:
        "Delivered a hard regulatory deadline across multiple national clients.",
      engineers:
        "POS integration in C# across three platforms; validated via the FDMS Portal.",
      product:
        "Kept clients compliant and VAT-eligible under a government-mandated deadline.",
    },
  },
  mental: {
    title: "Zimbabwe Mental Health Survey",
    meta: "DATA · BI",
    year: "2024",
    blurb:
      "An interactive Power BI dashboard built with Data Science Zimbabwe to analyze a national Mental Health Survey — clear visualizations and actionable insights to improve awareness.",
    tags: ["Power BI", "Data Analysis", "DAX"],
    linkLabel: "View dashboard",
    linkHref:
      "https://drive.google.com/file/d/1jfYG17LkdzakENnvtOPIZbjtui5qE6dO/view?usp=drive_link",
    hi: {
      recruiters: "Community collaboration with Data Science Zimbabwe.",
      engineers:
        "Data modeling + DAX measures over survey data in an interactive Power BI report.",
      product:
        "Translated raw survey data into insights that guide awareness efforts.",
    },
  },
  shelfline: {
    title: "ShelfLine — iVend Price Checker",
    meta: "MOBILE · iOS / ANDROID",
    year: "2026",
    blurb:
      "ShelfLine puts an instant, self-service price check in every aisle. A shopper scans or types a barcode and immediately sees the product name, price, product image (when set in iVend) and every unit-of-measure with its conversion (e.g. \"1 Pack = 6 EA\") — no waiting for staff, no surprises at the till. For the retailer that becomes a sales lever: confident shoppers buy more and abandon less, staff spend their time selling instead of fielding \"how much is this?\", and the aisle itself becomes an interactive touchpoint. Built on iVend and aligned to the store's planogram, so the price is always right for the products in front of the customer.",
    tags: [
      "Flutter",
      "Dart",
      "iOS",
      "Android",
      "iVend API",
      "Barcode Scanning",
      "REST API",
    ],
    linkLabel: "View demo",
    linkHref:
      "https://drive.google.com/file/d/1IuUoNudl18YZv6sCNfebvipsmmPiavkd/view?usp=share_link",
    hi: {
      recruiters:
        "A standalone, customer-facing retail product — self-service price checking deployed at the shelf edge.",
      engineers:
        "Layered repository / service / API architecture, pure-Dart and testable; reads product, image, UOM and pricing from iVend with every failure mapped to readable text. Planogram-aware, read-only.",
      product:
        "Shoppers get instant price confidence on their own — more sales, fewer abandoned baskets, and staff freed to actually sell.",
    },
  },
  sap: {
    title: "SAP Sales Analysis Dashboard (Sample)",
    meta: "DATA · BI / ERP",
    year: "2024",
    blurb:
      "Developed an interactive sales analytics dashboard in SAP Business One as part of Touch's inaugural analytics launch, demonstrating how seamlessly integrating SAP with iVend connects store operations to financial administration. Consolidated data across regions, employees, customer groups, and warehouses, with dynamic filters and visualizations that enabled executives to track top-selling items, profit margins, customer trends, and stock movement—unlocking actionable insights for growth, margin protection, and strategic planning.",
    tags: ["SAP Business One", "Power BI (optional integration)"],
    linkLabel: "View dashboard",
    linkHref:
      "https://drive.google.com/file/d/1mW6f4qu-vXOqpruGjqNHdG_kX2c2Xw1t/view?usp=sharing",
  },
  kwizi: {
    title: "Kwizi",
    meta: "WEB · QUIZ APP",
    year: "2023",
    blurb:
      "Created Kwizi, an engaging web application that tests knowledge of Zimbabwe's history and culture. Designed as a passion project to strengthen Zimbabwe's digital presence, it revives overlooked trivia through interactive quizzes across multiple categories—providing users with an exciting platform to celebrate and learn about national heritage.",
    tags: ["HTML", "Bootstrap", "CSS", "Javascript", "Supabase"],
    linkLabel: "Play Kwizi",
    linkHref: "https://kwizi.netlify.app/",
  },
  islamic: {
    title: "Islamic Knowledge Hub",
    meta: "WEB · LEARNING",
    year: "2023",
    blurb:
      "Developed a web application as a resource for exploring Islamic terminology and spirituality, initially for a specific client and now expanding to a broader audience including Islamic Studies students, spiritual seekers, and language enthusiasts. Designed to provide accessible, structured learning while supporting deeper engagement with religious and linguistic concepts.",
    tags: ["HTML", "Bootstrap", "CSS", "Javascript", "Supabase"],
    linkLabel: "View project",
    linkHref:
      "https://drive.google.com/file/d/1pfjt9q6vzFPYwapTXkNIlbF8zNHzROBG/view?usp=sharing",
  },
  asset: {
    title: "Asset Manager",
    meta: "DESKTOP · VB.NET",
    year: "2021",
    blurb:
      "Designed and developed a VB.Net-SQL desktop platform for Cairns IT Department to meticulously catalog IT assets and automate clearance management, replacing an inefficient paper-based filing system. Implemented structured databases, intuitive forms, and reporting features to track asset lifecycle, monitor approvals, and generate audit-ready records—enhancing operational efficiency, reducing administrative workload, and improving accuracy in asset management.",
    tags: ["Visual Basic", "SQL"],
    linkLabel: "",
    linkHref: "#",
  },
  website: {
    title: "This Website!",
    meta: "WEB · PORTFOLIO",
    year: "2026",
    blurb:
      "An online portfolio thoughtfully designed to showcase my skills, achievements, and projects. A digital representation of my journey, expertise, and passion in informatics, presented in a dynamic and user-friendly format.",
    tags: ["React", "Vite", "TypeScript", "Framer Motion", "Tailwind CSS"],
    linkLabel: "",
    linkHref: "#",
  },
};

export interface Section {
  id: string;
  label: string;
}

export const SECTIONS: Section[] = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "background", label: "Background" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export interface Role {
  period: string;
  place: string;
  company: string;
  role: string;
  detail: string;
  clients: string;
  logo: string;
  logoAlt: string;
  href?: string;
}

export const ROLES: Role[] = [
  {
    period: "NOW",
    place: "Harare",
    company: "TOUCH AFRICA",
    role: "Technical Consultant",
    detail:
      "Installed, configured and customized national POS systems (GAAP, Unity, iVend) for major retail, QSR and convenience clients. Specialized in fiscal-compliance integrations, built custom automation tools, and delivered real-time analytics dashboards that turned raw transactional data into C-suite business intelligence — driving improved margins and operational efficiency.",
    clients:
      "Adidas · KFC · Simbisa Brands · Buffalo Bicycles · Total · Puma · Zuva · Redan · Tsebo",
    logo: "/TOUCH-AFRICA.png",
    logoAlt: "Touch Africa logo",
    href: "https://touchafrica.biz/",
  },
  {
    period: "2022",
    place: "Hybrid",
    company: "ECOCASH HOLDINGS",
    role: "Associate Data Scientist — Cassava Advanced Data Analytics (Internship)",
    detail:
      "Built Power BI dashboards in an Azure environment to track login issues, segment customers and deliver personalized insights across strategic business units. Created daily performance dashboards for the insurance division and enabled data-driven decisions via a unified 360° customer view — improving engagement, satisfaction and retention.",
    clients: "Power BI · Azure · Customer 360 · Insurance Analytics",
    logo: "/Ecocash logo.png",
    logoAlt: "EcoCash Holdings logo",
    href: "https://ecocashholdings.co.zw/",
  },
  {
    period: "2021",
    place: "Harare",
    company: "CAIRNS HOLDINGS",
    role: "IT Infrastructure Support Specialist",
    detail:
      "Provided remote IT support to branches nationwide across Sage 1000, warehouse tracking systems and mobile vendor apps. Maintained networks and Windows Server environments (Active Directory, Office 365), managed the company asset register, and implemented preventive-maintenance and disaster-recovery strategies — reducing downtime and strengthening IT governance.",
    clients: "Sage 1000 · Windows Server · Active Directory · Office 365",
    logo: "/Cairns-Food.png",
    logoAlt: "Cairns Holdings logo",
    href: "https://cairnsfoods.co.zw/",
  },
];

export interface Social {
  label: string;
  href: string;
}

export const SOCIALS: Social[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tariro-m-772554231/" },
  { label: "GitHub", href: "https://github.com/TariroMpofu" },
  { label: "Email", href: "mailto:contact@tarirom.co.zw" },
];
