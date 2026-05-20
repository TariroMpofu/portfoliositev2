"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────────
   Helper components — all local to this file.
   Palette (no other colours permitted):
     #fefeff  foreground
     #969696  muted
     #0f0f0f  panel
     #2c2c2c  line
     #1a1a1a  soft line
     #141414  table row hover
     #555 #444 #333 #777  tick marks / decoration / separators
     #000     bg-black
   ───────────────────────────────────────────────────────────────── */

function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="doc-section scroll-mt-24 pt-14 border-t border-[#1a1a1a] first:border-0 first:pt-0 space-y-5"
    >
      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#969696]">
        Section {num}
      </p>
      <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.01em]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="pl-5 border-l border-[#2c2c2c] space-y-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-[#969696]">{num}</span>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Body({
  children,
  muted = false,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <p
      className={`text-[15px] leading-[1.75] max-w-[68ch] [text-wrap:pretty] ${
        muted ? "text-[#969696]" : "text-[#fefeff]"
      }`}
    >
      {children}
    </p>
  );
}

function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2 text-sm text-[#969696] [&_.k]:text-[#fefeff] [&_.k]:font-medium [&>li]:relative [&>li]:pl-5 [&>li]:leading-[1.7] [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[11px] [&>li]:before:w-[6px] [&>li]:before:h-px [&>li]:before:bg-[#555]">
      {children}
    </ul>
  );
}

function ScopeTitle({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-[#fefeff] font-medium text-sm mb-3 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#fefeff] before:inline-block before:flex-shrink-0 before:rounded-[1px]">
      {children}
    </p>
  );
}

const TOC_ITEMS = [
  { id: "s1", n: "01", label: "Overview" },
  { id: "s2", n: "02", label: "Who this applies to" },
  { id: "s3", n: "03", label: "Data we collect" },
  { id: "s4", n: "04", label: "Camera usage" },
  { id: "s5", n: "05", label: "How we use it" },
  { id: "s6", n: "06", label: "Storage & retention" },
  { id: "s7", n: "07", label: "Data sharing" },
  { id: "s8", n: "08", label: "Network security" },
  { id: "s9", n: "09", label: "Children's privacy" },
  { id: "s10", n: "10", label: "Your rights" },
  { id: "s11", n: "11", label: "Changes" },
  { id: "s12", n: "12", label: "Contact" },
];

export default function StockRoomPrivacy() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".doc-section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: [0, 0.1, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-[#fefeff]">
      {/* Sticky topbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-black/70 border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium tracking-tight text-[#fefeff]">
            Tariro M
          </Link>
          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-[#969696] uppercase tracking-[0.16em]">
            <span>Privacy Policy</span>
            <span className="text-[#444]">/</span>
            <span className="text-[#fefeff]">StockRoom</span>
          </div>
          <Link
            href="/"
            className="text-xs text-[#fefeff] underline underline-offset-[3px] decoration-[#444] hover:decoration-[#fefeff] transition"
          >
            ← Portfolio
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">

        {/* Hero */}
        <section className="space-y-8 mb-16 md:mb-24">
          {/* Meta strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[#969696]">
            <span>Effective · May 11, 2026</span>
            <span className="text-[#333]">·</span>
            <span>Version 1.2</span>
            <span className="text-[#333]">·</span>
            <span>12 sections</span>
          </div>

          <h1 className="text-[44px] md:text-[72px] leading-[1.02] tracking-[-0.025em] font-medium max-w-[14ch]">
            StockRoom
            <br />
            Privacy Policy
          </h1>

          <p className="text-[#969696] text-[15px] leading-[1.75] max-w-[60ch]">
            How the StockRoom mobile inventory app handles device, credential,
            and stock count data — written for the IT administrators and field
            staff who deploy and use it.
          </p>

          {/* Definition list */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-5 pt-8 border-t border-[#1a1a1a] max-w-3xl">
            <div>
              <dt className="text-[#969696] text-xs uppercase tracking-[0.14em]">
                Developer
              </dt>
              <dd className="mt-1.5 text-sm text-[#fefeff]">Tariro M</dd>
            </div>
            <div>
              <dt className="text-[#969696] text-xs uppercase tracking-[0.14em]">
                Contact
              </dt>
              <dd className="mt-1.5 text-sm">
                <a
                  className="text-[#fefeff] underline underline-offset-[3px] decoration-[#444] hover:decoration-[#fefeff] transition"
                  href="mailto:contact@tarirom.co.zw"
                >
                  contact@tarirom.co.zw
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[#969696] text-xs uppercase tracking-[0.14em]">
                Website
              </dt>
              <dd className="mt-1.5 text-sm">
                <a
                  className="text-[#fefeff] underline underline-offset-[3px] decoration-[#444] hover:decoration-[#fefeff] transition"
                  href="https://tarirom.co.zw"
                  target="_blank"
                  rel="noreferrer"
                >
                  tarirom.co.zw
                </a>
              </dd>
            </div>
          </dl>
        </section>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">

          {/* Sticky TOC */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#969696] mb-4">
              Contents
            </p>
            <nav className="flex flex-col">
              {TOC_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-baseline gap-3 py-1.5 text-[13px] transition ${
                    activeId === item.id
                      ? "text-[#fefeff]"
                      : "text-[#969696] hover:text-[#fefeff]"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] min-w-[22px] transition ${
                      activeId === item.id ? "text-[#fefeff]" : "text-[#555]"
                    }`}
                  >
                    {item.n}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Article */}
          <article className="min-w-0 space-y-0">

            {/* 1 — Overview */}
            <Section id="s1" num="01" title="Overview">
              <Body>
                StockRoom ("the App") is a mobile inventory management
                application built for enterprise use. It is designed for
                authorized retail staff and field technicians who perform
                physical stock counts using the iVend Point of Sale platform.
              </Body>
              <Body muted>
                This Privacy Policy explains what data the App collects, how it
                is used, where it is stored, and your rights in relation to
                that data.
              </Body>
            </Section>

            {/* 2 — Who this policy applies to */}
            <Section id="s2" num="02" title="Who this policy applies to">
              <Body>
                This policy applies to all users of the StockRoom mobile
                application on iOS and Android. The App is intended for use
                only by employees or contractors of organizations that have
                been licensed to use it.
              </Body>
              <Body muted>
                It is not a consumer application and is not intended for use by
                the general public or by minors.
              </Body>
            </Section>

            {/* 3 — Data we collect */}
            <Section id="s3" num="03" title="Data we collect">
              <Body muted>
                Five categories of data are collected or stored, each scoped to
                a specific operational purpose.
              </Body>

              <div className="space-y-8 pt-2">
                <SubSection num="3.1" title="Device information">
                  <Body>
                    To enforce device licensing and prevent unauthorized
                    access, the App collects and transmits the following
                    device details on startup:
                  </Body>
                  <Bullets>
                    <li>
                      <span className="k">Hardware identifier</span> — a unique
                      device ID (on iOS: a persisted UUID stored in the
                      Keychain; on Android: the Android SSAID or a persisted
                      UUID)
                    </li>
                    <li>
                      <span className="k">Device model</span> — e.g. "iPhone 14
                      Pro", "Samsung Galaxy A52"
                    </li>
                    <li>
                      <span className="k">Operating system version</span> —
                      e.g. "iOS 17.4", "Android 13"
                    </li>
                    <li>
                      <span className="k">Emulator status</span> — whether the
                      app is running on a physical device or an emulator
                    </li>
                  </Bullets>
                  <Body muted>
                    This information is sent to a secure licensing server
                    (Supabase) to verify that the device is authorized to use
                    the App. It is not used for advertising or analytics.
                  </Body>
                </SubSection>

                <SubSection num="3.2" title="User credentials">
                  <Body>
                    The App requires the following credentials to connect to
                    your organization's iVend server:
                  </Body>
                  <Bullets>
                    <li>
                      <span className="k">API credentials</span> — a username
                      and password used by the App to communicate with the
                      iVend API, entered by an administrator during setup.
                    </li>
                    <li>
                      <span className="k">Stocktake user credentials</span> — a
                      username and password entered by the individual
                      technician at login.
                    </li>
                  </Bullets>
                  <Body>
                    API credentials (
                    <span className="font-mono text-[13px]">apiUserId</span>{" "}
                    and{" "}
                    <span className="font-mono text-[13px]">apiPassword</span>)
                    are stored in the device's hardware-backed secure enclave —
                    Android Keystore on Android, iOS Keychain on iOS — using{" "}
                    <span className="font-mono text-[13px]">
                      flutter_secure_storage
                    </span>
                    . They are never written to unencrypted storage.
                  </Body>
                  <Body muted>
                    Devices running a version of the App prior to v3.0 are
                    automatically migrated to secure storage on first launch
                    after update.
                  </Body>
                </SubSection>

                <SubSection num="3.3" title="Stock count data">
                  <Body>
                    During a stock take session, the App records and stores
                    locally:
                  </Body>
                  <Bullets>
                    <li>Product identifiers (ID, code, name, barcode)</li>
                    <li>Counted quantities</li>
                    <li>Unit of measure selections</li>
                    <li>
                      Physical location identifiers (if your warehouse uses
                      location tracking)
                    </li>
                    <li>Timestamps for each count entry</li>
                  </Bullets>
                  <Body muted>
                    This data is submitted to your organization's iVend server
                    upon session completion. It is not transmitted to the
                    developer or any external service.
                  </Body>
                </SubSection>

                <SubSection num="3.4" title="Store / warehouse assignment">
                  <Body>
                    The App stores the identifier and name of the store or
                    warehouse assigned to this device. This is used to filter
                    the warehouse selection to the appropriate site and is part
                    of the device licensing record on the licensing server.
                  </Body>
                </SubSection>

                <SubSection num="3.5" title="Application logs">
                  <Body>
                    The App maintains diagnostic logs to support
                    troubleshooting and bug reporting:
                  </Body>
                  <Bullets>
                    <li>An in-memory buffer of up to 500 recent log lines</li>
                    <li>
                      Daily rotating log files retained on-device for up to 30
                      days
                    </li>
                  </Bullets>
                  <Body>
                    Log content includes API request/response metadata,
                    internal state transitions, and error messages. Logs do not
                    capture user passwords or full stock count payloads.
                  </Body>
                  <Body muted>
                    Logs are only shared externally if a user explicitly
                    initiates the "Share Bug Report" feature, which packages
                    the log files and sends them via the device's native share
                    sheet. No logs are automatically transmitted.
                  </Body>
                </SubSection>
              </div>
            </Section>

            {/* 4 — Camera usage */}
            <Section id="s4" num="04" title="Camera usage">
              <Body>
                The App requests access to the device camera exclusively for
                barcode scanning during stock take sessions. No photographs or
                video are taken, recorded, or stored.
              </Body>
              <Body muted>
                Camera access is used in real time to decode product barcodes
                and is not retained after the scan is complete.
              </Body>
            </Section>

            {/* 5 — How we use the data */}
            <Section id="s5" num="05" title="How we use the data">
              <Body muted>
                Every category of data collected maps to a specific operational
                purpose. We do not use any collected data for advertising,
                analytics, profiling, or sale to third parties.
              </Body>

              <div className="overflow-x-auto rounded-lg border border-[#2c2c2c] bg-[#0f0f0f]">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr>
                      <th className="px-5 py-4 text-[#fefeff] font-medium text-[11px] tracking-[0.16em] uppercase border-b border-[#2c2c2c]">
                        Data
                      </th>
                      <th className="px-5 py-4 text-[#fefeff] font-medium text-[11px] tracking-[0.16em] uppercase border-b border-[#2c2c2c]">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Device hardware ID, model, OS",
                        "License validation — confirming only authorized devices can access the App",
                      ],
                      [
                        "Store ID",
                        "License validation — confirming device is assigned to the correct store",
                      ],
                      [
                        "API and user credentials",
                        "Authenticating requests to your organization's iVend server",
                      ],
                      [
                        "Stock count entries",
                        "Compiling and submitting inventory counts to iVend",
                      ],
                      [
                        "Application logs",
                        "Diagnosing technical issues when bug reports are filed",
                      ],
                    ].map(([data, purpose], i) => (
                      <tr
                        key={i}
                        className="transition-colors hover:bg-[#141414] [&:not(:first-child)>td]:border-t [&:not(:first-child)>td]:border-[#1a1a1a]"
                      >
                        <td className="px-5 py-4 align-top text-[#fefeff] font-medium w-[38%] leading-[1.6]">
                          {data}
                        </td>
                        <td className="px-5 py-4 align-top text-[#969696] leading-[1.6]">
                          {purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* 6 — Data storage and retention */}
            <Section id="s6" num="06" title="Data storage and retention">
              <Body muted>
                On-device storage and remote retention details are described
                below.
              </Body>

              <div>
                <ScopeTitle>On-device storage</ScopeTitle>
                <Bullets>
                  <li>
                    <span className="k">API credentials</span>{" "}
                    <span className="font-mono text-[12px] text-[#777]">
                      (apiUserId, apiPassword)
                    </span>{" "}
                    — Android Keystore / iOS Keychain (hardware-encrypted) —
                    never written to unencrypted storage
                  </li>
                  <li>
                    <span className="k">Non-sensitive config</span>{" "}
                    <span className="font-mono text-[12px] text-[#777]">
                      (baseUrl, storeId, storeName)
                    </span>{" "}
                    — SharedPreferences — until manually cleared or app
                    uninstalled
                  </li>
                  <li>
                    <span className="k">User login session</span> —
                    SharedPreferences — until manual logout
                  </li>
                  <li>
                    <span className="k">Active session draft</span>{" "}
                    <span className="text-[#777]">
                      (stock count in progress)
                    </span>{" "}
                    — SharedPreferences — until submitted or explicitly
                    discarded
                  </li>
                  <li>
                    <span className="k">Device hardware ID</span> — iOS
                    Keychain / Android Keystore (via{" "}
                    <span className="font-mono text-[12px]">
                      flutter_secure_storage
                    </span>
                    ) — persists across reinstalls
                  </li>
                  <li>
                    <span className="k">Licence gate cache</span>{" "}
                    <span className="font-mono text-[12px] text-[#777]">
                      (gate_cache_v1)
                    </span>{" "}
                    — Android Keystore / iOS Keychain — cleared on revocation
                    or expiry
                  </li>
                  <li>
                    <span className="k">Application log files</span> — local
                    file system — 30 days (rolling)
                  </li>
                </Bullets>
              </div>

              <div className="pt-2">
                <ScopeTitle>Remote storage (licensing server)</ScopeTitle>
                <Body muted>
                  The following data is stored on the developer-operated
                  Supabase licensing server:
                </Body>
                <div className="mt-3">
                  <Bullets>
                    <li>Device hardware ID</li>
                    <li>Device model</li>
                    <li>Operating system version</li>
                    <li>Assigned store ID</li>
                    <li>First registration timestamp</li>
                    <li>Last seen timestamp</li>
                    <li>License status</li>
                  </Bullets>
                </div>
                <div className="mt-4">
                  <Body muted>
                    This data is used solely to enforce device licensing. It is
                    stored in a PostgreSQL database hosted by Supabase with
                    row-level security enabled. It is not accessible to the
                    public or to third parties.
                  </Body>
                </div>
              </div>
            </Section>

            {/* 7 — Data sharing */}
            <Section id="s7" num="07" title="Data sharing">
              <Body>
                We do not sell, rent, or share your personal data with third
                parties for commercial purposes.
              </Body>
              <Body muted>
                Data may be shared in the following limited circumstances:
              </Body>
              <Bullets>
                <li>
                  <span className="k">Your organization's iVend server</span> —
                  Stock count submissions and authentication requests are sent
                  to the iVend server configured by your organization's
                  administrator.
                </li>
                <li>
                  <span className="k">Supabase (licensing server)</span> —
                  Device metadata is sent to the developer's Supabase instance
                  for license validation only.
                </li>
                <li>
                  <span className="k">Bug report recipient</span> — If you
                  choose to share a bug report, log files are shared via the
                  share sheet to a recipient of your choosing.
                </li>
              </Bullets>
            </Section>

            {/* 8 — Network security */}
            <Section id="s8" num="08" title="Network security">
              <Body>
                All communication between StockRoom and the Supabase licensing
                server is encrypted over HTTPS.
              </Body>
              <Body>
                Communication with the iVend Retail API server{" "}
                <span className="font-mono text-[13px] text-[#969696]">
                  (/iVendAPI/iVendAPI.svc/WebAPI)
                </span>{" "}
                uses the transport protocol configured by your organisation's
                iVend Retail environment. Where that environment uses HTTP
                rather than HTTPS, API credentials and request data are
                transmitted without transport-layer encryption. StockRoom does
                not control or modify the iVend Retail API transport layer.
              </Body>
              <Body muted>
                This risk is operationally controlled when StockRoom is
                deployed within a properly isolated private network (LAN, VLAN,
                or VPN) with no external access. It is the responsibility of
                the client's IT administrator to ensure that the iVend Retail
                API server is not exposed via public IP addresses, port
                forwarding, or any internet-accessible network configuration.
              </Body>
              <Body muted>
                Before deploying StockRoom, all client IT administrators are
                required to review and sign the Network Security Acknowledgement
                — StockRoom Deployment (v1.0), which sets out the specific
                network isolation requirements and the developer's limitations
                of liability in full. A copy of this document is provided to the
                licensed organisation's administrator at onboarding.
              </Body>
            </Section>

            {/* 9 — Children's privacy */}
            <Section id="s9" num="09" title="Children's privacy">
              <Body>
                This App is intended exclusively for adult employees and
                contractors in enterprise settings. We do not knowingly collect
                data from or market to minors under the age of 18.
              </Body>
            </Section>

            {/* 10 — Your rights */}
            <Section id="s10" num="10" title="Your rights">
              <Body>
                Depending on your jurisdiction, you may have the right to:
              </Body>
              <Bullets>
                <li>
                  <span className="k">Access</span> the personal data we hold
                  about your device
                </li>
                <li>
                  <span className="k">Request deletion</span> of your device's
                  licensing record from our server
                </li>
                <li>
                  <span className="k">Opt out</span> of continued device
                  registration
                </li>
              </Bullets>
              <Body>
                To exercise any of these rights, contact us at{" "}
                <a
                  className="text-[#fefeff] underline underline-offset-[3px] decoration-[#444] hover:decoration-[#fefeff] transition"
                  href="mailto:contact@tarirom.co.zw"
                >
                  contact@tarirom.co.zw
                </a>
                . Please include your device's assigned store name and device
                model to help us locate your record.
              </Body>
              <Body muted>
                Note that stock count data submitted to your organization's
                iVend server is controlled by your employer, not by us. For
                requests relating to that data, contact your organization's
                system administrator.
              </Body>
            </Section>

            {/* 11 — Changes to this policy */}
            <Section id="s11" num="11" title="Changes to this policy">
              <Body>
                We may update this Privacy Policy from time to time. When we
                do, we will update the effective date at the top of this
                document. Continued use of the App after an update constitutes
                acceptance of the revised policy.
              </Body>
              <Body muted>
                If we make material changes that affect how we handle personal
                data, we will notify the licensed organization's administrator.
              </Body>
            </Section>

            {/* 12 — Contact */}
            <Section id="s12" num="12" title="Contact">
              <Body>
                If you have questions or concerns about this Privacy Policy or
                the data practices of StockRoom, please contact:
              </Body>
              <div className="rounded-lg border border-[#2c2c2c] bg-[#0f0f0f] p-6 md:p-8 max-w-2xl">
                <p className="text-base font-medium text-[#fefeff]">Tariro M</p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-y-2 gap-x-6 text-sm">
                  <span className="text-[#969696]">Email</span>
                  <a
                    className="text-[#fefeff] underline underline-offset-[3px] decoration-[#444] hover:decoration-[#fefeff] transition"
                    href="mailto:contact@tarirom.co.zw"
                  >
                    contact@tarirom.co.zw
                  </a>
                  <span className="text-[#969696]">Website</span>
                  <a
                    className="text-[#fefeff] underline underline-offset-[3px] decoration-[#444] hover:decoration-[#fefeff] transition"
                    href="https://tarirom.co.zw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    tarirom.co.zw
                  </a>
                </div>
              </div>
              <Body muted>
                StockRoom is developed and maintained by Tariro M. The iVend
                platform is a product of CitiXsys Technologies. StockRoom is an
                independent integration application and is not affiliated with
                or endorsed by CitiXsys Technologies.
              </Body>
            </Section>

            {/* Footer */}
            <div className="pt-16 mt-12 border-t border-[#1a1a1a] flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="text-sm text-[#fefeff] underline underline-offset-[3px] decoration-[#444] hover:decoration-[#fefeff] transition"
              >
                ← Back to portfolio
              </Link>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#969696]">
                © 2026 Tariro M · v1.2
              </p>
            </div>

          </article>
        </div>
      </div>
    </main>
  );
}
