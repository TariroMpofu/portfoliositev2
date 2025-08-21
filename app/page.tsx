"use client";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { FaBitcoin, FaWindows } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { TbCurrencyDollarZimbabwean, TbWorld } from "react-icons/tb";
import { FaLocationPin, FaXTwitter } from "react-icons/fa6";
import Script from "next/script";
import { BiLock, BiMobile } from "react-icons/bi";
import { BsAndroid } from "react-icons/bs";
import { MdBatchPrediction } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

// Constants
const LOADING_DURATION = 1500; // Reduced from 2500ms
const SCROLL_OFFSET = 100;
const THROTTLE_DELAY = 16; // ~60fps

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// Types
interface Section {
  id: string;
  title: string;
}

interface WorkProject {
  title: string;
  description: string;
  tags: string[];
  link: string;
  platforms: { icon: React.ComponentType<any>; color?: string }[];
}

type AudienceType = "anyone" | "recruiters" | "engineers" | "product-managers";

interface AudienceContent {
  title: string;
  description: React.ReactNode;
  skills: React.ReactNode[];
}

// Data
const sections: Section[] = [
  { id: "intro", title: "Intro" },
  { id: "work", title: "Work" },
  { id: "background", title: "Background" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

const workProjects: WorkProject[] = [
  {
    title: "Relay",
    description:
      "Designed and developed a Flutter-based CRM companion app for the Touch Africa team, integrating Gmail and Zoho APIs to centralize communication, automate handovers, and streamline follow-ups. Enhanced team coordination by enabling structured tracking of client interactions and reducing manual effort in daily workflows.",
    tags: ["DART", "Gmail API", "Zoho API"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7359189121493364736/",
    platforms: [{ icon: BiMobile, color: "#00A4EF" }, { icon: BsAndroid }],
  },
  {
    title: "Churn Prediction Model",
    description:
      "Authored and published research on customer attrition in the Zimbabwean telecom sector, then designed a predictive churn analysis model using Random Forest with 87% accuracy. Deployed the model via a user-friendly Flask web application, enabling seamless use by non-technical stakeholders.",
    tags: ["Python", "django", "HTML", "CSS", "Heroku"],
    link: "https://drive.google.com/drive/folders/1FY6Z3xyQW2narXeCFmuPvZSm0H1BgU5K?usp=drive_link",
    platforms: [{ icon: MdBatchPrediction, color: "#4285F4" }],
  },
  {
    title: "FDMS Buyer Details Compliance",
    description:
      "Integrated mandatory buyer detail capture into iVend, Unity, and QSR POS systems to ensure compliance with ZIMRA’s VAT Act Section 20(4) (Public Notice 30 of 2025). Coordinated fiscal device upgrades and validated compliance via the FDMS Portal, enabling clients to meet the 31 May deadline and maintain VAT claim eligibility.",
    tags: ["C#"],
    link: "https://drive.google.com/file/d/1Yd9fqgvYOKG1AgLCSjD20p1eMb3pExHb/view?usp=sharing",
    platforms: [{ icon: TbCurrencyDollarZimbabwean, color: "#2E7D32" }],
  },
  {
    title: "Zimbabwe Mental Health Survey Analysis",
    description:
      "Developed an interactive Power BI dashboard in collaboration with Mr. Butholenkosi Moyo to analyze a Mental Health Survey dataset from Data Science Zimbabwe’s annual awareness drive. Delivered clear visualizations and actionable insights to improve understanding of mental health dynamics.",
    tags: ["Python", "Power BI", "Excel"],
    link: "https://drive.google.com/file/d/1jfYG17LkdzakENnvtOPIZbjtui5qE6dO/view?usp=drive_link",
    platforms: [{ icon: MdBatchPrediction, color: "#4285F4" }],
  },
  {
    title: "SAP Sales Analysis Dashboard (Sample)",
    description:
      "Developed an interactive sales analytics dashboard in SAP Business One as part of Touch’s inaugural analytics launch, demonstrating how seamlessly integrating SAP with iVend connects store operations to financial administration. Consolidated data across regions, employees, customer groups, and warehouses, with dynamic filters and visualizations that enabled executives to track top-selling items, profit margins, customer trends, and stock movement—unlocking actionable insights for growth, margin protection, and strategic planning.",
    tags: ["SAP Business One", "Power BI (optional integration)"],
    link: "https://drive.google.com/file/d/1mW6f4qu-vXOqpruGjqNHdG_kX2c2Xw1t/view?usp=sharing",
    platforms: [{ icon: MdBatchPrediction, color: "#4285F4" }],
  },
  {
    title: "Kwizi",
    description:
      "Created Kwizi, an engaging web application that tests knowledge of Zimbabwe’s history and culture. Designed as a passion project to strengthen Zimbabwe’s digital presence, it revives overlooked trivia through interactive quizzes across multiple categories—providing users with an exciting platform to celebrate and learn about national heritage.",
    tags: ["HTML", "Bootstrap", "CSS", "Javascript", "Supabase"],
    link: "https://drive.google.com/drive/folders/1t26L4r-7iPTL7l9LrIrWK4Kw2Z1UvwoI?usp=sharing",
    platforms: [{ icon: TbWorld, color: "#4285F4" }],
  },
  {
    title: "Islamic Knowledge Hub",
    description:
      "Developed a web application as a resource for exploring Islamic terminology and spirituality, initially for a specific client and now expanding to a broader audience including Islamic Studies students, spiritual seekers, and language enthusiasts. Designed to provide accessible, structured learning while supporting deeper engagement with religious and linguistic concepts.",
    tags: ["HTML", "Bootstrap", "CSS", "Javascript", "Supabase"],
    link: "https://drive.google.com/file/d/1pfjt9q6vzFPYwapTXkNIlbF8zNHzROBG/view?usp=sharing",
    platforms: [{ icon: TbWorld, color: "#4285F4" }],
  },
  {
    title: "Asset Manager",
    description:
      "Designed and developed a VB.Net-SQL desktop platform for Cairns IT Department to meticulously catalog IT assets and automate clearance management, replacing an inefficient paper-based filing system. Implemented structured databases, intuitive forms, and reporting features to track asset lifecycle, monitor approvals, and generate audit-ready records—enhancing operational efficiency, reducing administrative workload, and improving accuracy in asset management.",
    tags: ["Visual Basic", "SQL"],
    platforms: [{ icon: BiLock, color: "#4285F4" }],
    link: "#", // ← Add the link here, replace '#' with actual URL if available
  },
  {
    title: "This Website!",
    description:
      "An online portfolio thoughtfully designed to showcase my skills, achievements, and projects. A digital representation of my journey, expertise, and passion in informatics, presented in a dynamic and user-friendly format.",
    tags: ["React", "Vite", "TypeScript", "Framer Motion", "Tailwind CSS"],
    platforms: [{ icon: FaLocationPin, color: "#4285F4" }],
    link: "#", // ← Same here
  },
];

const audienceContent: Record<AudienceType, AudienceContent> = {
  anyone: {
    title: "For Anyone",
    description:
      "I'm a developer who loves creating meaningful digital experiences, with a focus on tech, minimalism, and where they intersect.",
    skills: [],
  },
  recruiters: {
    title: "Recruiters",
    description: (
      <>
        Software developer with over 4 years of experience building software
        solutions. My expertise includes{" "}
        <span className="hover:text-[#3776AB] transition-colors cursor-default">
          Python
        </span>
        {", "}
        <span className="hover:text-[#F7DF1E] transition-colors cursor-default">
          JavaScript
        </span>{" "}
        etc.
      </>
    ),
    skills: [
      <a
        key="resume-recruiters"
        href="https://drive.google.com/file/d/1du_GGes49oDgrJPLHi6PJRsrZR0Vhq2M/view?usp=sharing"
        download
        className="hover:text-[#fefeff] transition-colors"
      >
        Download Resume
      </a>,
    ],
  },
  engineers: {
    title: "Engineers",
    description: (
      <>
        Driven by technology, innovation, and open source. Explore my technical
        deep dives and projects over at my{" "}
        <a
          href="https://github.com/TariroMpofu"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-sky-500"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          GitHub &#x2197;
        </a>
      </>
    ),
    skills: [
      <a
        key="resume-engineers"
        href="https://drive.google.com/file/d/1du_GGes49oDgrJPLHi6PJRsrZR0Vhq2M/view?usp=sharing"
        download
        className="hover:text-[#fefeff] transition-colors"
      >
        Download Resume
      </a>,
    ],
  },
  "product-managers": {
    title: "Product Managers",
    description:
      "I bring technical expertise to product development, bridging the gap between business objectives and technical execution.",
    skills: [
      <a
        key="resume-pm"
        href="https://drive.google.com/file/d/1du_GGes49oDgrJPLHi6PJRsrZR0Vhq2M/view?usp=sharing"
        download
        className="hover:text-[#fefeff] transition-colors"
      >
        Download Resume
      </a>,
    ],
  },
};

// Custom hooks
const useThrottledScroll = (
  callback: () => void,
  delay: number = THROTTLE_DELAY
) => {
  const callbackRef = useRef(callback);
  const lastRun = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback(() => {
    if (Date.now() - lastRun.current >= delay) {
      callbackRef.current();
      lastRun.current = Date.now();
    }
  }, [delay]);
};

const useNavigation = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const isScrollingRef = useRef(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      isScrollingRef.current = true;
      const offset = sectionId === "intro" ? 0 : section.offsetTop;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      // Update URL and state
      setActiveSection(sectionId);
      if (sectionId !== "intro") {
        window.history.pushState(null, "", `#${sectionId}`);
      } else {
        window.history.pushState(null, "", window.location.pathname);
      }

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  }, []);

  const updateActiveSection = useCallback(() => {
    if (isScrollingRef.current) return;

    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    let currentSection = "intro";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - SCROLL_OFFSET;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.id;
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);

      // Update URL without triggering scroll
      if (currentSection !== "intro") {
        window.history.replaceState(null, "", `#${currentSection}`);
      } else {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, [activeSection]);

  const throttledUpdateActiveSection = useThrottledScroll(updateActiveSection);

  useEffect(() => {
    window.addEventListener("scroll", throttledUpdateActiveSection, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", throttledUpdateActiveSection);
  }, [throttledUpdateActiveSection]);

  // Handle initial hash navigation
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sections.some((section) => section.id === hash)) {
        setTimeout(() => scrollToSection(hash), 100);
      }
    };

    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (newHash && sections.some((section) => section.id === newHash)) {
        scrollToSection(newHash);
      } else if (!newHash) {
        scrollToSection("intro");
      }
    };

    handleInitialHash();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [scrollToSection]);

  return { activeSection, scrollToSection };
};

// Components
const LoadingScreen = () => (
  <motion.div
    key="loader"
    className="h-screen w-screen flex items-center justify-center bg-black"
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.h1
        className="text-[12vw] md:text-[8vw] font-medium leading-none"
        animate={{
          opacity: [1, 0],
          y: [0, -20],
          transition: { duration: 0.5, delay: 1 },
        }}
      >
        Tariro M.
      </motion.h1>
    </motion.div>
  </motion.div>
);

const Logo = ({
  isExpanded,
  onToggle,
}: {
  isExpanded: boolean;
  onToggle: () => void;
}) => (
  <motion.div
    className="fixed top-8 left-4 md:left-8 z-50 cursor-pointer"
    onHoverStart={() => window.innerWidth >= 768 && onToggle()}
    onHoverEnd={() => window.innerWidth >= 768 && onToggle()}
    onClick={() =>
      window.innerWidth < 768 ? onToggle() : window.location.reload()
    }
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative text-3xl font-medium flex">
      <span>T</span>
      <AnimatePresence>
        {isExpanded && (
          <div className="flex">
            {["a", "r", "i", "r", "o", "M", "."].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.02,
                  ease: "easeOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

const MobileMenu = ({
  isOpen,
  onClose,
  activeSection,
  scrollToSection,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  scrollToSection: (section: string) => void;
}) => {
  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && !(e.target as Element).closest(".mobile-menu")) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="mobile-menu fixed inset-0 bg-black z-40 md:hidden pt-24 px-8"
        >
          {sections.map(({ id, title }) => (
            <div key={id} className="mb-6">
              <button
                onClick={() => {
                  scrollToSection(id);
                  onClose();
                }}
                className="text-2xl font-medium"
              >
                <span
                  className={`${
                    activeSection === id ? "text-[#fefeff]" : "text-[#969696]"
                  }`}
                >
                  {title}
                </span>
              </button>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DesktopNavigation = ({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (section: string) => void;
}) => (
  <nav className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
    {sections.map(({ id, title }) => (
      <div key={id} className="mb-4 text-left">
        <button
          onClick={() => scrollToSection(id)}
          className="group flex items-center gap-2 text-sm"
        >
          <span
            className={`transition-all duration-300 ${
              activeSection === id ? "text-[#fefeff]" : "text-[#969696]"
            }`}
          >
            {title}
          </span>
        </button>
      </div>
    ))}
  </nav>
);

const AudienceSelector = ({
  selectedAudience,
  onAudienceChange,
}: {
  selectedAudience: AudienceType;
  onAudienceChange: (audience: AudienceType) => void;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleHorizontalScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleHorizontalScroll, {
        passive: true,
      });
      return () =>
        container.removeEventListener("scroll", handleHorizontalScroll);
    }
  }, [handleHorizontalScroll]);

  const audiences: AudienceType[] = [
    "anyone",
    "recruiters",
    "engineers",
    "product-managers",
  ];

  return (
    <div className="relative md:static mb-8">
      <div
        className="absolute left-0 z-10 w-12 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"
        style={{
          opacity: scrollPosition > 0 ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <div className="absolute right-0 z-10 w-12 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-8 justify-start md:justify-center text-sm overflow-x-auto scrollbar-hide px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {audiences.map((audience) => (
          <button
            key={audience}
            onClick={() => onAudienceChange(audience)}
            className={`transition-colors whitespace-nowrap flex-shrink-0 ${
              selectedAudience === audience
                ? "text-[#fefeff] font-medium"
                : "text-[#969696] hover:text-[#fefeff]"
            }`}
          >
            {audienceContent[audience].title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedAudience, setSelectedAudience] =
    useState<AudienceType>("anyone");
  const [isNameExpanded, setIsNameExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADING_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const currentAudienceContent = useMemo(
    () => audienceContent[selectedAudience],
    [selectedAudience]
  );

  return (
    <div
      className={`${spaceGrotesk.className} bg-black text-[#fefeff] flex flex-col min-h-screen`}
    >
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CZNM8V2BK5"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CZNM8V2BK5');
        `}
      </Script>

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            <Logo
              isExpanded={isNameExpanded}
              onToggle={() => setIsNameExpanded(!isNameExpanded)}
            />

            {/* Mobile Menu Button */}
            <button
              className="fixed top-8 right-4 z-50 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-2">
                <span
                  className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`block w-8 h-0.5 bg-[#fefeff] transition-opacity ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${
                    isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>

            <MobileMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />

            {/* Header */}
            <header className="p-4 md:p-8 pt-24 md:pt-8">
              <AudienceSelector
                selectedAudience={selectedAudience}
                onAudienceChange={setSelectedAudience}
              />
            </header>

            <DesktopNavigation
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />

            {/* Main Content */}
            <main className="flex-grow">
              <section id="intro" className="min-h-screen px-4 md:px-24">
                <div className="pt-16 pb-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center max-w-7xl mx-auto"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedAudience}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="text-3xl md:text-6xl text-[#fefeff] leading-tight mb-12 max-w-3xl mx-auto">
                          {currentAudienceContent.description}
                        </p>
                        <div className="flex gap-4 flex-wrap justify-center">
                          {currentAudienceContent.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="text-sm text-[#969696]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Scroll Down Arrow */}
                        <motion.div
                          className="mt-16 flex justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          transition={{ delay: 1, duration: 1.5 }}
                        >
                          <motion.div
                            className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#fefeff] cursor-pointer"
                            animate={{
                              y: [0, 10, 0],
                              opacity: [0.6, 0.3, 0.6],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              ease: "easeInOut",
                            }}
                            onClick={() => scrollToSection("work")}
                          />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>
              </section>

              {/* Work Section */}
              <section
                id="work"
                className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20"
              >
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">
                    work.
                  </h2>
                  <div className="grid gap-8 md:gap-16 max-w-2xl mx-auto">
                    {workProjects.map((project, index) => (
                      <motion.div
                        key={`${project.title}-${index}`}
                        className="group"
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 md:p-8 border border-[#969696] rounded-lg hover:border-[#969696] transition-colors relative"
                        >
                          <h3 className="text-xl md:text-2xl font-medium mb-4">
                            {project.title}
                          </h3>
                          <p className="text-sm text-[#fefeff] mb-6">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={`${tag}-${tagIndex}`}
                                className="text-sm text-[#969696]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="absolute top-4 right-4 flex gap-2">
                            {project.platforms.map((Platform, i) => (
                              <Platform.icon
                                key={i}
                                className="text-xl"
                                style={
                                  Platform.color
                                    ? { color: Platform.color }
                                    : {}
                                }
                              />
                            ))}
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Background Section */}
              <section
                id="background"
                className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20"
              >
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">
                    background.
                  </h2>
                  <div className="max-w-2xl mx-auto">
                    <div className="mt-16">
                      <a
                        href="https://touchafrica.biz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-40 h-40 flex-shrink-0 mb-8 block hover:opacity-80 transition-opacity cursor-pointer"
                      >
                        <Image
                          src="/TOUCH-AFRICA.png"
                          alt="Touch Africa Logo"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "contain" }}
                        />
                      </a>
                      <div className="space-y-4">
                        <p className="font-mono text-sm text-[#969696]">
                          TOUCH AFRICA
                        </p>
                        <h3 className="text-4xl font-medium text-[#fefeff]">
                          TECHNICAL CONSULTANT
                        </h3>
                        <p className="text-sm text-[#fefeff]">
                          NOW &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HARARE
                        </p>
                        <p className="text-sm text-[#969696] leading-relaxed">
                          Installed, configured, and customized national POS
                          systems{" "}
                          <a
                            href="https://touchafrica.biz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            (GAAP, Unity, iVend)
                          </a>{" "}
                          for major retail, QSR, and convenience store clients
                          including{" "}
                          <a
                            href="https://www.samlevysvillage.com/store/adidas-ideal-range/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            Adidas
                          </a>
                          ,{" "}
                          <a
                            href="https://www.kfc.co.zw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            KFC
                          </a>
                          ,{" "}
                          <a
                            href="https://www.simbisabrands.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            Simbisa Brands
                          </a>
                          ,{" "}
                          <a
                            href="https://buffalobicycles.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            Buffalo Bicycles
                          </a>
                          ,{" "}
                          <a
                            href="https://liquorsupplies.co.zw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            Liquor Supplies
                          </a>
                          ,{" "}
                          <a
                            href="https://zw.totalenergies.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            Total
                          </a>
                          ,{" "}
                          <a
                            href="https://pumaenergy.com/country/zimbabwe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            Puma
                          </a>
                          ,{" "}
                          <a
                            href="https://www.zuvapetroleum.co.zw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            Zuva
                          </a>
                          ,{" "}
                          <a
                            href="https://www.redan.co.zw/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            Redan
                          </a>
                          , and{" "}
                          <a
                            href="https://www.linkedin.com/company/tsebo-zim/?originalSubdomain=zw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors underline decoration-dotted"
                          >
                            Tsebo
                          </a>
                          . Specialized in fiscal compliance integrations, built
                          custom automation tools, and delivered real-time
                          analytics dashboards that transformed raw
                          transactional data into actionable business
                          intelligence for C-suite decision-making. Enhanced
                          store operations through advanced inventory
                          optimization, sales forecasting dashboards, allowing loss
                          prevention analytics, and performance benchmarking
                          across multi-location deployments—driving improved
                          profit margins and operational efficiency.
                        </p>
                      </div>
                    </div>

                    {/* EcoCash Holdings Position */}
                    <div className="mt-16">
                      <a
                        href="https://ecocashholdings.co.zw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-48 h-40 flex-shrink-0 mb-4 block hover:opacity-80 transition-opacity cursor-pointer"
                      >
                        <Image
                          src="/Ecocash logo.png"
                          alt="Ecocash Holdings Logo"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "contain" }}
                        />
                      </a>
                      <div className="space-y-4">
                        <p className="font-mono text-sm text-[#969696]">
                          EcoCash Holdings
                        </p>
                        <h3 className="text-4xl font-medium text-[#fefeff]">
                          Cassava Advanced Data Analytics, Associate Data Scientist (Internship)
                        </h3>
                        <p className="text-sm text-[#fefeff]">
                          2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HYBRID
                        </p>
                        <p className="text-sm text-[#969696]">
                          Developed Power BI dashboards within an Azure
                          environment to track login issues, segment customers,
                          and deliver personalized insights across multiple
                          strategic business units. Created daily performance
                          dashboards for the insurance division and enabled
                          data-driven decision-making via a unified 360°
                          customer view, enhancing engagement strategies and
                          driving improved customer satisfaction and retention.
                        </p>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div className="mt-16">
                        <a
                          href="https://cairnsfoods.co.zw/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-24 h-24 flex-shrink-0 mb-8 block hover:opacity-80 transition-opacity cursor-pointer"
                        >
                          <Image
                            src="/Cairns-Food.png"
                            alt="Cairns Foods Logo"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "contain" }}
                          />
                        </a>
                        <div className="space-y-4">
                          <p className="font-mono text-sm text-[#969696]">
                            Cairns Holdings Limited
                          </p>
                          <h3 className="text-4xl font-medium text-[#fefeff]">
                            IT Infrastructure Support Specialist
                          </h3>
                          <p className="text-sm text-[#fefeff]">
                            2021 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HARARE
                          </p>
                          <p className="text-sm text-[#969696]">
                            Provided remote IT support to branches nationwide,
                            resolving technical issues and ensuring
                            uninterrupted operations across Sage 1000, internal
                            warehouse tracking systems, and mobile vendor
                            applications. Monitored and maintained computer
                            systems, networks, and Windows Server environments,
                            including domain and Office 365 email services,
                            while installing and configuring hardware and
                            software to optimize employee productivity.
                            Maintained the company asset register, supported
                            database management, Active Directory, and ERP
                            processes, and implemented preventive maintenance
                            and disaster recovery strategies—enhancing
                            operational efficiency, reducing downtime, and
                            strengthening IT governance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* About Section */}
              <section
                id="about"
                className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20"
              >
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-2xl">
                    about.
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div>
                      <div className="space-y-8">
                        <p className="text-sm text-[#fefeff]">
                          I'm a software developer based in Harare with over 4
                          years of experience across brand and product, at
                          companies large and small. I take pride in my craft,
                          and love mentoring earlier career developers. I
                          develop cross functional partnerships, and thrive in
                          complex, ambiguous environments.
                        </p>
                      </div>
                    </div>

                    <div className="md:mt-32">
                      <div className="space-y-8">
                        <p className="text-sm text-[#fefeff]">
                          My approach combines technical expertise with creative
                          problem-solving, always striving to build solutions
                          that are both elegant and practical. Zooming out on
                          company strategy, zooming in on details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />

                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div>
                      <div className="space-y-8">
                        <p className="text-sm text-[#fefeff]">
                          Beyond work, I find solace in literature, especially
                          manga, which condenses profound themes into
                          captivating stories. I'm also a passionate Premier
                          League and Chelsea fan, using my data analysis skills
                          to achieve top 50k finishes in Fantasy Premier League
                          from 2020-2022.
                        </p>
                      </div>
                    </div>

                    <div className="md:mt-32">
                      <div className="space-y-8">
                        <p className="text-sm text-[#fefeff]">
                          Creating something from the ground up and watching it
                          grow is incredibly fulfilling. Engaging in this
                          process with passion feels spiritual to me.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section
                id="contact"
                className="min-h-screen px-4 md:px-24 py-8 md:py-16 pt-20"
              >
                <div className="max-w-5xl mx-auto">
                  <div className="max-w-2xl mx-auto">
                    <div className="max-w-2xl mx-auto flex justify-center">
                      <Image
                        src="/Me.jpg"
                        alt="Tariro M."
                        width={350}
                        height={350} // Keep same ratio as image
                        className="rounded-lg object-contain"
                      />
                    </div>
                    <p className="text-xl md:text-xl text-[#fefeff] underline text-center">
                      contact@tarirom.co.zw
                    </p>
                    <div className="flex items-center gap-2 justify-center mt-4">
                      <div className="relative">
                        <div className="w-2 h-2 bg-[#fefeff] rounded-full animate-pulse"></div>
                        <div className="absolute top-0 left-0 w-2 h-2 bg-[#fefeff] rounded-full animate-[ping_1.5s_ease-in-out_infinite] opacity-90"></div>
                      </div>
                      <p className="text-l text-[#969696]">status : active</p>
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-8 pt-8 justify-center">
                      <a
                        href="https://www.linkedin.com/in/tariro-m-772554231/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/TariroMpofu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://x.com/thaquietknight"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#969696] hover:text-[#fefeff] transition-colors text-sm px-2 py-1"
                      >
                        X [Twitter]
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="px-4 md:px-24 py-8 text-[#969696]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
                <span className="text-sm text-center md:text-left">
                  © 2025 Tariro M.. All rights reserved.
                </span>
                <div className="flex gap-4 md:gap-8">
                  <span className="text-sm text-center md:text-left">
                    Design & Code by -{" "}
                    <a
                      href="/"
                      className="hover:text-[#fefeff] transition-colors"
                    >
                      Tariro M.
                    </a>
                  </span>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

