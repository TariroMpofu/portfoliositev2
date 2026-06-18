"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import {
  AUDIENCES,
  HIGHLIGHT_LABEL,
  PROJECTS,
  ROLES,
  SECTIONS,
  SOCIALS,
  type Audience,
} from "./homeData";

/* Inline icons (no new deps) */
const ArrowDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);
const ArrowUpRight = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const SECTION_PAD =
  "pl-6 lg:pl-[240px] pr-6 lg:pr-20 pt-[120px] lg:pt-[140px] pb-24 lg:pb-[120px]";

const TitlePeriod = () => <span style={{ opacity: 0.35 }}>.</span>;

export default function Home() {
  const [audience, setAudience] = useState<Audience>("anyone");
  const [active, setActive] = useState("intro");
  const workRevealedRef = useRef(false);

  const cfg = AUDIENCES[audience];
  const projects = cfg.order.map((id, i) => ({
    id,
    no: "/ " + String(i + 1).padStart(2, "0"),
    ...PROJECTS[id],
  }));

  const revealCards = useCallback((base: number, stagger: number) => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-card]"));
    cards.forEach((c, i) =>
      setTimeout(() => c.classList.add("is-visible"), base + i * stagger)
    );
  }, []);

  // Mount: scroll-reveal, card reveal, and scroll-spy observers.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      document
        .querySelectorAll("[data-reveal],[data-card]")
        .forEach((el) => el.classList.add("is-visible"));
      workRevealedRef.current = true;
    }

    const observers: IntersectionObserver[] = [];

    if (!reduce) {
      const revealIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              revealIo.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      document.querySelectorAll("[data-reveal]").forEach((el) => revealIo.observe(el));
      observers.push(revealIo);

      const work = document.getElementById("work");
      if (work) {
        const cardIo = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting && !workRevealedRef.current) {
                workRevealedRef.current = true;
                revealCards(0, 90);
                cardIo.disconnect();
              }
            });
          },
          { threshold: 0.04 }
        );
        cardIo.observe(work);
        observers.push(cardIo);
      }
    }

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = (e.target as HTMLElement).dataset.section;
          if (e.isIntersecting && id) setActive(id);
        });
      },
      { threshold: 0.45 }
    );
    document.querySelectorAll("[data-section]").forEach((el) => spy.observe(el));
    observers.push(spy);

    return () => observers.forEach((o) => o.disconnect());
  }, [revealCards]);

  // Audience switch: quick card reshuffle (skip if reduced motion / not yet revealed).
  useEffect(() => {
    if (!workRevealedRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-card]"));
    cards.forEach((c) => c.classList.remove("is-visible"));
    requestAnimationFrame(() => revealCards(60, 70));
  }, [audience, revealCards]);

  return (
    <div className="relative min-h-screen bg-bg font-sans text-fg">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CZNM8V2BK5" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CZNM8V2BK5');`}
      </Script>

      {/* TOP BAR */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-5 lg:px-10"
        style={{ mixBlendMode: "difference" }}
      >
        <a
          href="#intro"
          className="font-mono text-[22px] font-medium text-white no-underline"
          style={{ letterSpacing: "-1px" }}
        >
          T<span style={{ opacity: 0.4 }}>.</span>
        </a>
        <nav className="flex items-center gap-1 overflow-x-auto max-w-[70vw] lg:max-w-none">
          {(Object.keys(AUDIENCES) as Audience[]).map((key) => {
            const on = key === audience;
            return (
              <button
                key={key}
                onClick={() => setAudience(key)}
                className="flex min-h-11 cursor-pointer items-center whitespace-nowrap border-b bg-transparent px-2 font-mono text-[13px] text-white transition-opacity duration-[250ms] hover:opacity-100"
                style={{
                  letterSpacing: ".02em",
                  opacity: on ? 1 : 0.42,
                  borderColor: on ? "#fff" : "transparent",
                }}
              >
                {AUDIENCES[key].label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* LEFT SECTION NAV (desktop) */}
      <nav
        className="fixed left-10 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-[18px] font-mono text-[13px] lg:flex"
        style={{ letterSpacing: ".04em" }}
      >
        {SECTIONS.map((s) => {
          const on = s.id === active;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-2.5 no-underline transition-colors duration-300 hover:!text-fg"
              style={{ color: on ? "#fefeff" : "#5a5a5a" }}
            >
              <span
                className="rounded-full bg-fg transition-all duration-300"
                style={{
                  width: 5,
                  height: 5,
                  opacity: on ? 1 : 0,
                  transform: `scale(${on ? 1 : 0.4})`,
                }}
              />
              {s.label}
            </a>
          );
        })}
      </nav>

      {/* MOBILE BOTTOM NAV — one-handed reach, 44px tap targets */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border-divider bg-black/80 backdrop-blur lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {SECTIONS.map((s) => {
          const on = s.id === active;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex min-h-[52px] flex-1 items-center justify-center font-mono text-[11px] no-underline transition-colors"
              style={{ color: on ? "#fefeff" : "#5a5a5a", letterSpacing: ".04em" }}
            >
              {s.label}
            </a>
          );
        })}
      </nav>

      {/* INTRO */}
      <section
        id="intro"
        data-section="intro"
        className={`relative box-border flex min-h-screen flex-col justify-center ${SECTION_PAD}`}
      >
        <div
          data-reveal
          className="reveal mb-[34px] font-mono text-[13px] text-text-label"
          style={{ letterSpacing: ".18em" }}
        >
          {cfg.eyebrow}
        </div>
        <h1
          data-reveal
          className="reveal delay-1 m-0 max-w-[1100px] font-medium"
          style={{
            fontSize: "clamp(38px,5.4vw,86px)",
            lineHeight: 1.04,
            letterSpacing: "-.025em",
          }}
        >
          {cfg.statement}
        </h1>
        <div
          data-reveal
          className="reveal delay-2 mt-[54px] flex flex-wrap items-baseline gap-x-10 gap-y-2 font-mono text-[13px] text-text-label"
          style={{ letterSpacing: ".04em" }}
        >
          <span>HARARE, ZW</span>
          <span>SOFTWARE DEVELOPER</span>
          <span className="text-fg">4+ YRS</span>
        </div>
        <a
          href="#work"
          className="arrow-bob absolute bottom-24 left-1/2 text-fg no-underline lg:bottom-12"
          aria-label="Scroll to work"
        >
          <ArrowDown />
        </a>
      </section>

      {/* WORK */}
      <section
        id="work"
        data-section="work"
        className={`box-border min-h-screen ${SECTION_PAD}`}
      >
        <div className="mb-[18px] flex items-end justify-between gap-6">
          <h2
            data-reveal
            className="reveal m-0 font-semibold"
            style={{
              fontSize: "clamp(48px,8vw,128px)",
              lineHeight: 0.9,
              letterSpacing: "-.04em",
            }}
          >
            work
            <TitlePeriod />
          </h2>
          <span
            data-reveal
            className="reveal pb-3.5 font-mono text-[13px] text-text-label"
            style={{ letterSpacing: ".04em" }}
          >
            {cfg.caption}
          </span>
        </div>

        <div className="flex max-w-[980px] flex-col gap-[22px]">
          {projects.map((p) => (
            <article
              key={p.id}
              data-card
              className="card-reveal rounded-[14px] border border-border-card bg-card-bg px-5 py-7 hover:border-nav-idle hover:bg-card-bg-hover sm:px-9 sm:py-[34px]"
            >
              <div className="flex items-start justify-between gap-6">
                <div
                  className="font-mono text-[12px] text-text-meta"
                  style={{ letterSpacing: ".12em" }}
                >
                  {p.meta}
                </div>
                <div className="font-mono text-[12px] text-text-faint">{p.no}</div>
              </div>

              <h3
                className="my-3.5 font-semibold"
                style={{
                  fontSize: "clamp(24px,2.6vw,34px)",
                  letterSpacing: "-.02em",
                  lineHeight: 1.05,
                }}
              >
                {p.title}
              </h3>

              <p className="m-0 max-w-[680px] text-[16px] leading-[1.6] text-text-body">
                {p.blurb}
              </p>

              {audience !== "anyone" && p.hi && (
                <div
                  className="mt-5 py-1 pl-4"
                  style={{ borderLeft: "2px solid #fefeff" }}
                >
                  <div
                    className="mb-1.5 font-mono text-[11px] text-text-meta"
                    style={{ letterSpacing: ".14em" }}
                  >
                    {HIGHLIGHT_LABEL[audience]}
                  </div>
                  <div className="text-[15px] leading-[1.5] text-fg">
                    {p.hi[audience]}
                  </div>
                </div>
              )}

              <div className="mt-[26px] flex flex-wrap gap-x-2 gap-y-2.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border-pill px-[11px] py-[5px] font-mono text-[11px] text-text-tag"
                    style={{ letterSpacing: ".03em" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-[26px] flex items-center justify-between border-t border-border-divider pt-5">
                {p.linkHref && p.linkHref !== "#" ? (
                  <a
                    href={p.linkHref}
                    target={p.linkHref.startsWith("http") ? "_blank" : undefined}
                    rel={p.linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 font-mono text-[13px] text-fg no-underline transition-opacity hover:opacity-65"
                  >
                    {p.linkLabel}
                    <ArrowUpRight />
                  </a>
                ) : (
                  <span className="font-mono text-[13px] text-text-faint">
                    Internal / no public link
                  </span>
                )}
                <span className="font-mono text-[12px] text-text-faint">{p.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BACKGROUND */}
      <section
        id="background"
        data-section="background"
        className={`box-border min-h-screen ${SECTION_PAD}`}
      >
        <h2
          data-reveal
          className="reveal mb-16 mt-0 font-semibold"
          style={{
            fontSize: "clamp(48px,8vw,128px)",
            lineHeight: 0.9,
            letterSpacing: "-.04em",
          }}
        >
          background
          <TitlePeriod />
        </h2>
        <div className="flex max-w-[860px] flex-col gap-0.5">
          {ROLES.map((r) => (
            <div
              key={r.company}
              data-reveal
              className="reveal grid grid-cols-1 gap-3 border-t border-border-rule py-[34px] sm:grid-cols-[160px_1fr] sm:gap-8"
            >
              <div
                className="font-mono text-[12px] leading-[1.7] text-text-meta"
                style={{ letterSpacing: ".08em" }}
              >
                <div className="text-fg">{r.period}</div>
                <div>{r.place}</div>
              </div>
              <div>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-5 inline-flex h-20 w-44 items-center transition-opacity hover:opacity-70"
                  aria-label={r.company}
                >
                  <Image
                    src={r.logo}
                    alt={r.logoAlt}
                    width={176}
                    height={80}
                    className="h-full w-auto object-contain object-left"
                  />
                </a>
                <div
                  className="mb-2 font-mono text-[12px] text-text-meta"
                  style={{ letterSpacing: ".12em" }}
                >
                  {r.company}
                </div>
                <h3
                  className="mb-4 mt-0 font-semibold"
                  style={{
                    fontSize: "clamp(22px,2.4vw,32px)",
                    letterSpacing: "-.02em",
                  }}
                >
                  {r.role}
                </h3>
                <p className="m-0 max-w-[600px] text-[16px] leading-[1.65] text-text-body">
                  {r.detail}
                </p>
                <div className="mt-[18px] font-mono text-[12px] leading-[1.9] text-text-label">
                  {r.clients}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        data-section="about"
        className={`box-border min-h-screen ${SECTION_PAD}`}
      >
        <h2
          data-reveal
          className="reveal mb-16 mt-0 font-semibold"
          style={{
            fontSize: "clamp(48px,8vw,128px)",
            lineHeight: 0.9,
            letterSpacing: "-.04em",
          }}
        >
          about
          <TitlePeriod />
        </h2>
        <div className="grid max-w-[1100px] grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2">
          <p
            data-reveal
            className="reveal m-0"
            style={{
              fontSize: "clamp(18px,1.8vw,24px)",
              lineHeight: 1.55,
              letterSpacing: "-.01em",
            }}
          >
            A software developer based in Harare with 4+ years across brand and
            product, at companies large and small. I take pride in my craft and love
            mentoring earlier-career developers.
          </p>
          <p
            data-reveal
            className="reveal delay-1 m-0"
            style={{
              fontSize: "clamp(18px,1.8vw,24px)",
              lineHeight: 1.55,
              letterSpacing: "-.01em",
            }}
          >
            My approach combines technical depth with creative problem-solving —
            zooming out on company strategy, zooming in on the details. Always
            building solutions that are elegant{" "}
            <em className="not-italic underline" style={{ textUnderlineOffset: 3 }}>
              and
            </em>{" "}
            practical.
          </p>
          <p
            data-reveal
            className="reveal m-0 text-[16px] leading-[1.65] text-text-muted"
          >
            Beyond work, I find solace in literature — especially manga, which
            condenses profound themes into captivating stories.
          </p>
          <p
            data-reveal
            className="reveal delay-1 m-0 text-[16px] leading-[1.65] text-text-muted"
          >
            A passionate Premier League and Chelsea fan — I used data analysis to
            land top-50k finishes in Fantasy Premier League from 2020–2022. Creating
            something from the ground up and watching it grow feels close to
            spiritual.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        data-section="contact"
        className={`box-border flex min-h-screen flex-col justify-center ${SECTION_PAD}`}
      >
        <div
          data-reveal
          className="reveal mx-auto mb-10 overflow-hidden rounded-[18px] border border-border-card"
          style={{ width: "clamp(240px,75vw,420px)" }}
        >
          <Image
            src="/IMG_9141.JPG"
            alt="Tariro M."
            width={400}
            height={400}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>
        <div
          data-reveal
          className="reveal mb-[30px] font-mono text-[13px] text-text-label"
          style={{ letterSpacing: ".18em" }}
        >
          CONTACT
        </div>
        <a
          data-reveal
          href="mailto:contact@tarirom.co.zw"
          className="reveal max-w-full break-words font-medium text-fg no-underline transition-colors hover:text-text-muted lg:max-w-[1200px]"
          style={{
            fontSize: "clamp(26px,6vw,92px)",
            letterSpacing: "-.03em",
            lineHeight: 1.05,
            overflowWrap: "anywhere",
          }}
        >
          contact@tarirom.co.zw
        </a>
        <div
          data-reveal
          className="reveal mt-14 flex flex-wrap gap-3.5 font-mono text-[13px]"
        >
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-border-pill px-[18px] py-[9px] text-text-tag no-underline transition-colors duration-300 hover:border-nav-idle hover:text-fg"
            >
              {s.label} <span style={{ opacity: 0.5 }}>↗</span>
            </a>
          ))}
        </div>
        <div
          className="mt-[90px] font-mono text-[12px] text-text-faint"
          style={{ letterSpacing: ".04em" }}
        >
          © 2026 TARIRO M · HARARE, ZIMBABWE
        </div>
      </section>
    </div>
  );
}
