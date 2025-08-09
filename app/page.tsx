"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { FaBitcoin, FaWindows } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { TbCurrencyDollarZimbabwean, TbWorld } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import Script from "next/script";
import { BiLock, BiMobile } from "react-icons/bi";
import { BsAndroid } from "react-icons/bs";
import { MdBatchPrediction } from "react-icons/md";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const sections = [
  { id: "intro", title: "Intro" },
  { id: "work", title: "Work" },
  { id: "background", title: "Background" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

const workProjects = [
  {
    title: "Relay",
    description:
      "I'm building a Flutter-based CRM companion that leverages Gmail and Zoho APIs to streamline follow-ups, automate handovers, and enhance team coordination within the Touch Africa Team.",
    tags: ["DART", "Gmail API", "Zoho API"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7359189121493364736/",
    platforms: [{ icon: BiMobile, color: "#00A4EF" }, { icon: BsAndroid }],
  },
  {
    title: "Churn Prediction Model",
    description:
      "I wrote and published a paper on customer attrition, which merits special attention by mobile telecom service providers. I then designed predictive telecom churn analysis model, specifically for the Zimbabwean market, using a Random Forest algorithm that has a 87% accuracy. Finally I developed a user-friendly flask web application for seamless model deployment.",
    tags: ["Python", "django", "HTML", "CSS", "Heroku"],
    link: "https://drive.google.com/drive/folders/1FY6Z3xyQW2narXeCFmuPvZSm0H1BgU5K?usp=drive_link",
    platforms: [{ icon: MdBatchPrediction, color: "#4285F4" }],
  },
  {
    title: "FDMS Buyer Details Compliance",
    description:
      "Integrated mandatory buyer detail capture into Ivend, UNITY, and QSR POS to meet ZIMRA's VAT Act Section 20(4) under Public Notice 30 of 2025. Coordinated fiscal device upgrades and validated compliance via the FDMS Portal, ensuring clients met the 31 May deadline and maintained tax claim eligibility.",
    tags: ["C#"],
    link: "https://drive.google.com/file/d/1Yd9fqgvYOKG1AgLCSjD20p1eMb3pExHb/view?usp=sharing",
    platforms: [{ icon: TbCurrencyDollarZimbabwean, color: "#2E7D32" }],
  },
  {
    title: "Zimbabwe Mental Health Survey Analysis",
    description:
      "With invaluable input and support from Mr. Butholenkosi Moyo, I created an insightful Power BI dashboard that analyzes a Mental Health Survey Dataset collected by Data Science Zimbabwe during one of their recent annual awareness drives. It offers clear visualizations and insights to enhance understanding of the underlying mental health dynamics.",
    tags: ["Python", "Power BI", "Excel"],
    link: "https://drive.google.com/file/d/1jfYG17LkdzakENnvtOPIZbjtui5qE6dO/view?usp=drive_link",
    platforms: [{ icon: MdBatchPrediction, color: "#4285F4" }],
  },

  {
    title: "SAP Sales Analysis Dashboard (Sample)",
    description:
      "As part of Touch's inaugural analytics launch, I developed this interactive sales analytics dashboard in SAP Business One as a cornerstone proof-of-concept—demonstrating how strategic data visualization transforms executive decision-making, particularly for businesses currently using platforms like iVend and exploring SAP as a next step. This sample highlights how SAP can consolidate and visualize critical sales data across regions, employees, customer groups, and warehouses. Executives can easily track top-selling items, profit margins, customer trends, and stock movement. Filters and dynamic charts empower leadership to drill into specific time periods or product lines—unlocking actionable insights for growth, margin protection, and strategic planning.",
    tags: ["SAP Business One", "Power BI (optional integration)"],
    link: "https://drive.google.com/file/d/1mW6f4qu-vXOqpruGjqNHdG_kX2c2Xw1t/view?usp=sharing",
    platforms: [{ icon: MdBatchPrediction, color: "#4285F4" }],
  },

  {
    title: "Kwizi",
    description:
      "To try and enhance Zimbabwe's digital presence, I've dedicated my free time to creating Kwizi. It is an engaging web application designed to test your knowledge of Zimbabwe's rich history and culture. It aims to revive and celebrate often overlooked trivia, providing an exciting digital platform for you to challenge your expertise in various categories of Zimbabwean general knowledge.",
    tags: ["HTML", "Bootstrap", "CSS", "Javascript", "Supabase"],
    link: "https://drive.google.com/drive/folders/1t26L4r-7iPTL7l9LrIrWK4Kw2Z1UvwoI?usp=sharing",
    platforms: [{ icon: TbWorld, color: "#4285F4" }],
  },
  {
    title: "Islamic Knowledge Hub",
    description:
      "I've created a web application that serves as a valuable resource for individuals eager to deepen their understanding of Islamic terminology and spirituality. Initially developed for a specific client, I am now attempting to expand it to cater to a diverse audience, including Islamic Studies Students, Spiritual Seekers, and Language Enthusiasts.",
    tags: ["HTML", "Bootstrap", "CSS", "Javascript", "Supabase"],
    link: "https://drive.google.com/file/d/1pfjt9q6vzFPYwapTXkNIlbF8zNHzROBG/view?usp=sharing",
    platforms: [{ icon: TbWorld, color: "#4285F4" }],
  },
  {
    title: "Asset Manager",
    description:
      "I developed a VB.Net-SQL desktop platform meticulously cataloging I.T. assets and streamlining clearance management for Cairns IT Department, intended to replace their outdated paper filing procedure.",
    tags: ["Visual Basic", "SQL"],
    platforms: [{ icon: BiLock, color: "#4285F4" }],
  },
  {
    title: "This Website!",
    description:
      "An online portfolio thoughtfully designed to showcase my skills, achievements, and projects. A digital representation of my journey, expertise, and passion in informatics, presented in a dynamic and user-friendly format.",
    tags: ["React", "Vite", "TypeScript", "Framer Motion", "Tailwind CSS"],
    platforms: [{ icon: BiLock, color: "#4285F4" }],
  },
];

type AudienceType = "anyone" | "recruiters" | "engineers" | "product-managers";

const audienceContent = {
  anyone: {
    title: "For Anyone",
    description:
      "I'm a developer who loves creating meaningful digital experiences, with a focus on tech, minimalism, and where they intersect.",
    skills: [""],
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
        href="https://drive.google.com/file/d/1du_GGes49oDgrJPLHi6PJRsrZR0Vhq2M/view?usp=sharing"
        download
        className="hover:text-[#fefeff] transition-colors"
      >
        Download Resume
      </a>,
    ],
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("intro");
  const [selectedAudience, setSelectedAudience] =
    useState<AudienceType>("anyone");
  const [isNameExpanded, setIsNameExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const sectionId = section.id;
          setActiveSection(sectionId);

          // Update URL hash based on scroll position
          if (sectionId !== "intro") {
            window.history.replaceState(null, "", `#${sectionId}`);
          } else {
            window.history.replaceState(null, "", window.location.pathname);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hash navigation support
  useEffect(() => {
    // Handle hash on initial page load
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1); // Remove the #
      if (hash && sections.some((section) => section.id === hash)) {
        setActiveSection(hash);
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          scrollToSection(hash);
        }, 100);
      }
    };

    // Check for hash on component mount (after loading is complete)
    if (!loading) {
      handleHashNavigation();
    }

    // Listen for hash changes (when user manually changes URL or uses back/forward)
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (newHash && sections.some((section) => section.id === newHash)) {
        setActiveSection(newHash);
        scrollToSection(newHash);
      } else if (!newHash) {
        // If hash is removed, go to intro
        setActiveSection("intro");
        scrollToSection("intro");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [loading]);

  const handleHorizontalScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleHorizontalScroll);
      return () =>
        container.removeEventListener("scroll", handleHorizontalScroll);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = sectionId === "intro" ? 0 : section.offsetTop;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      // Update the URL hash without causing a page reload
      if (sectionId !== "intro") {
        window.history.pushState(null, "", `#${sectionId}`);
      } else {
        // Remove hash for intro section
        window.history.pushState(null, "", window.location.pathname);
      }

      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (window.innerWidth < 768) {
      setIsNameExpanded(!isNameExpanded);
    } else {
      window.location.reload();
    }
  };

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
                  transition: { duration: 0.5, delay: 1.5 },
                }}
              >
                Tariro M.
              </motion.h1>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            {/* Logo */}
            <motion.div
              className="fixed top-8 left-4 md:left-8 z-50 cursor-pointer"
              onHoverStart={() => setIsNameExpanded(true)}
              onHoverEnd={() => setIsNameExpanded(false)}
              onClick={handleLogoClick}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative text-3xl font-medium flex">
                <span>T</span>
                <AnimatePresence>
                  {isNameExpanded && (
                    <div className="flex">
                      {["a", "r", "i", "r", "o", "M", "."].map(
                        (letter, index) => (
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
                        )
                      )}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="fixed top-8 right-4 z-50 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-2">
                <span
                  className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-8 h-0.5 bg-[#fefeff] transition-opacity ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-8 h-0.5 bg-[#fefeff] transition-transform ${
                    isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="fixed inset-0 bg-black z-40 md:hidden pt-24 px-8"
                >
                  {sections.map(({ id, title }) => (
                    <div key={id} className="mb-6">
                      <button
                        onClick={() => scrollToSection(id)}
                        className="text-2xl font-medium"
                      >
                        <span
                          className={`${
                            activeSection === id
                              ? "text-[#fefeff]"
                              : "text-[#969696]"
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

            {/* Header */}
            <header className="p-4 md:p-8 pt-24 md:pt-8">
              <div className="relative md:static mb-8">
                <div
                  className="absolute left-0 z-10 w-12 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"
                  style={{
                    opacity: scrollPosition > 0 ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                ></div>
                <div className="absolute right-0 z-10 w-12 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                <div
                  ref={scrollContainerRef}
                  className="flex gap-4 md:gap-8 justify-start md:justify-center text-sm overflow-x-auto scrollbar-hide"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  {(
                    [
                      "anyone",
                      "recruiters",
                      "engineers",
                      "product-managers",
                    ] as AudienceType[]
                  ).map((audience) => (
                    <button
                      key={audience}
                      onClick={() => setSelectedAudience(audience)}
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
            </header>

            {/* Desktop Navigation */}
            <nav className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
              {sections.map(({ id, title }) => (
                <div key={id} className="mb-4 text-left">
                  <button
                    onClick={() => scrollToSection(id)}
                    className="group flex items-center gap-2 text-sm"
                  >
                    <span
                      className={`transition-all duration-300 ${
                        activeSection === id
                          ? "text-[#fefeff]"
                          : "text-[#969696]"
                      }`}
                    >
                      {title}
                    </span>
                  </button>
                </div>
              ))}
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
              <section id="intro" className="min-h-screen px-4 md:px-24">
                <div className="pt-16 pb-8">
                  {" "}
                  {/* Adjusted padding-bottom to 8 */}
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
                          {audienceContent[selectedAudience].description}
                        </p>
                        <div className="flex gap-4 flex-wrap justify-center">
                          {audienceContent[selectedAudience].skills.map(
                            (skill, index) => (
                              <span
                                key={index}
                                className="text-sm text-[#969696]"
                              >
                                {skill}
                              </span>
                            )
                          )}
                        </div>

                        {/* Scroll Down Arrow */}
                        <motion.div
                          className="mt-16 flex justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          transition={{
                            delay: 1,
                            duration: 1.5,
                          }}
                        >
                          <motion.div
                            className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#fefeff]"
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
                            style={{ cursor: "pointer" }}
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
                        key={index}
                        className="group"
                        whileHover={{ y: -10 }}
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
                                key={tagIndex}
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
                  <div className="max-w-2xl mx-auto">
                    <div className="mt-16">
                      <div className="relative w-40 h-40 flex-shrink-0 mb-8">
                        <Image
                          src="/TOUCH-AFRICA.png"
                          alt="TA Logo"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
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
                        <p className="text-sm text-[#969696]">
                          Supported national POS systems{" "}
                          <a
                            href="https://touchafrica.biz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#969696] hover:text-[#fefeff] transition-colors"
                          >
                            (GAAP, Unity, iVend)
                          </a>
                          with a focus on technical deployments, automation, and
                          data insights. Delivered system integrations, built
                          compliance tools in C#, and enabled analytics for
                          sales, inventory, and speed-of-service metrics across
                          major retail and QSR clients like KFC and Simbisa.
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="relative w-48 h-40 flex-shrink-0 mb-4">
                      <Image
                        src="/Ecocash logo.png"
                        alt="Ecocash Holdings Logo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="font-mono text-sm text-[#969696]">
                        EcoCash Holdings
                      </p>
                      <h3 className="text-4xl font-medium text-[#fefeff]">
                        Cassava Advanced Data Analytics, Data Scientist Intern
                      </h3>
                      <p className="text-sm text-[#fefeff]">
                        2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HYBRID
                      </p>
                      <p className="text-sm text-[#969696]">
                        Built dashboards in an Azure environment to track login
                        issues, segment customers, and deliver personalized
                        insights across multiple strategic business units.
                        Developed daily performance dashboards for the insurance
                        division and supported data-driven decision-making
                        through a unified 360° customer view. Enhanced
                        engagement strategies and contributed to improved
                        customer satisfaction and retention.
                      </p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="mt-16">
                      <div className="relative w-24 h-24 flex-shrink-0 mb-8">
                        <Image
                          src="/Cairns-Food.png"
                          alt="Cairns Foods Logo"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="space-y-4">
                        <p className="font-mono text-sm text-[#969696]">
                          Cairns Holdings Limited
                        </p>
                        <h3 className="text-4xl font-medium text-[#fefeff]">
                          ICT Intern
                        </h3>
                        <p className="text-sm text-[#fefeff]">
                          2021 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HARARE
                        </p>
                        <p className="text-sm text-[#969696]">
                          Provided remote IT support to branches nationwide,
                          resolving technical issues and ensuring operational
                          continuity. Monitored and maintained computer systems
                          and networks across multiple sites. Installed and
                          configured hardware and software to support employee
                          productivity. Maintained the company asset register
                          and contributed to troubleshooting and maintenance
                          processes. Supported Windows Server administration and
                          implemented preventive maintenance strategies.
                          Prepared monthly reports covering responsibilities
                          such as Active Directory, Sage ERP, database
                          management, disaster recovery, antivirus, Office 365,
                          and IT procurement.
                        </p>
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
                  <h2 className="text-4xl md:text-7xl font-medium mb-8 max-w-4xl mx-auto">
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
                    <Image
                      src="/Me.jpg"
                      alt="Tariro M."
                      width={500}
                      height={300}
                      className="mb-8 mx-auto"
                    />
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


