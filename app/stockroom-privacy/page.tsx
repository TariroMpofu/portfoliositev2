import Link from "next/link";

const sectionLinks = [
  { href: "#s1", label: "Overview", number: "01" },
  { href: "#s2", label: "Who this applies to", number: "02" },
  { href: "#s3", label: "Data we collect", number: "03" },
  { href: "#s4", label: "Camera usage", number: "04" },
  { href: "#s5", label: "How we use the data", number: "05" },
  { href: "#s6", label: "Storage & retention", number: "06" },
  { href: "#s7", label: "Data sharing", number: "07" },
  { href: "#s8", label: "Network security", number: "08" },
  { href: "#s9", label: "Children’s privacy", number: "09" },
  { href: "#s10", label: "Your rights", number: "10" },
  { href: "#s11", label: "Changes", number: "11" },
  { href: "#s12", label: "Contact", number: "12" },
];

export default function StockRoomPrivacy() {
  return (
    <main className="min-h-screen bg-black text-[#fefeff] px-4 py-12 md:px-24 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex flex-col gap-6 border-b border-[#1a1a1a] pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-[#969696]">Effective date: May 11, 2026</p>
            <h1 className="text-4xl font-medium leading-tight md:text-6xl">StockRoom Privacy Policy</h1>
            <p className="text-sm text-[#969696] leading-relaxed">
              This Privacy Policy explains what data the App collects, how it is used, where it is stored, and your rights in relation to that data.
            </p>
            <div className="grid gap-3 text-sm text-[#969696] sm:grid-cols-3">
              <p>Developer: Tariro M</p>
              <p>Contact: <a className="underline decoration-[#444] underline-offset-2 transition-colors duration-150 hover:decoration-white" href="mailto:contact@tarirom.co.zw">contact@tarirom.co.zw</a></p>
              <p>Website: <a className="underline decoration-[#444] underline-offset-2 transition-colors duration-150 hover:decoration-white" href="https://tarirom.co.zw" target="_blank" rel="noreferrer">tarirom.co.zw</a></p>
            </div>
          </div>
          <Link href="/" className="self-start text-sm underline decoration-[#444] underline-offset-2 transition-colors duration-150 hover:decoration-white md:self-auto">
            ← Back to portfolio
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f] p-6">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Contents</p>
              <nav className="mt-6 flex flex-col gap-3 text-sm text-[#969696]">
                {sectionLinks.map((item) => (
                  <a key={item.href} href={item.href} className="flex items-center gap-3 transition-colors duration-150 hover:text-[#fefeff]">
                    <span className="min-w-[30px] text-xs font-mono uppercase tracking-[0.24em] text-[#555]">{item.number}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="space-y-14">
            <section id="s1" className="space-y-5 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 01</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Overview</h2>
              <p className="text-sm leading-7 text-[#fefeff]">
                StockRoom ("the App") is a mobile inventory management application built for enterprise use. It is designed for authorized retail staff and field technicians who perform physical stock counts using the iVend Point of Sale platform.
              </p>
              <p className="text-sm leading-7 text-[#969696]">
                This Privacy Policy explains what data the App collects, how it is used, where it is stored, and your rights in relation to that data.
              </p>
            </section>

            <section id="s2" className="space-y-5 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 02</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Who This Policy Applies To</h2>
              <p className="text-sm leading-7 text-[#fefeff]">
                This policy applies to all users of the StockRoom mobile application on iOS and Android. The App is intended for use only by employees or contractors of organizations that have been licensed to use it.
              </p>
              <p className="text-sm leading-7 text-[#969696]">
                It is not a consumer application and is not intended for use by the general public or by minors.
              </p>
            </section>

            <section id="s3" className="space-y-8 border-t border-[#1a1a1a] pt-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 03</p>
                <h2 className="text-3xl font-semibold md:text-4xl">Data We Collect</h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-4 rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f] p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#969696]">3.1</span>
                    <h3 className="text-xl font-medium">Device Information</h3>
                  </div>
                  <p className="text-sm leading-7 text-[#fefeff]">
                    To enforce device licensing and prevent unauthorized access, the App collects and transmits the following device details on startup:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#969696]">
                    <li><span className="text-[#fefeff] font-medium">Hardware identifier</span> — a unique device ID (on iOS: a persisted UUID stored in the Keychain; on Android: the Android SSAID or a persisted UUID)</li>
                    <li><span className="text-[#fefeff] font-medium">Device model</span> — e.g. "iPhone 14 Pro", "Samsung Galaxy A52"</li>
                    <li><span className="text-[#fefeff] font-medium">Operating system version</span> — e.g. "iOS 17.4", "Android 13"</li>
                    <li><span className="text-[#fefeff] font-medium">Emulator status</span> — whether the app is running on a physical device or an emulator</li>
                  </ul>
                  <p className="text-sm leading-7 text-[#969696]">
                    This information is sent to a secure licensing server (Supabase) to verify that the device is authorized to use the App. It is not used for advertising or analytics.
                  </p>
                </div>

                <div className="space-y-4 rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f] p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#969696]">3.2</span>
                    <h3 className="text-xl font-medium">User Credentials</h3>
                  </div>
                  <p className="text-sm leading-7 text-[#fefeff]">
                    The App requires the following credentials to connect to your organization’s iVend server:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#969696]">
                    <li><span className="text-[#fefeff] font-medium">API credentials</span> — a username and password used by the App to communicate with the iVend API, entered by an administrator during setup.</li>
                    <li><span className="text-[#fefeff] font-medium">Stocktake user credentials</span> — a username and password entered by the individual technician at login.</li>
                  </ul>
                  <p className="text-sm leading-7 text-[#fefeff]">
                    API credentials (apiUserId and apiPassword) are stored in the device's hardware-backed secure enclave — Android Keystore on Android, iOS Keychain on iOS — using flutter_secure_storage. They are never written to unencrypted storage.
                  </p>
                  <p className="text-sm leading-7 text-[#969696]">
                    Devices running a version of the App prior to v3.0 are automatically migrated to secure storage on first launch after update.
                  </p>
                </div>

                <div className="space-y-4 rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f] p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#969696]">3.3</span>
                    <h3 className="text-xl font-medium">Stock Count Data</h3>
                  </div>
                  <p className="text-sm leading-7 text-[#fefeff]">
                    During a stock take session, the App records and stores locally:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#969696]">
                    <li>Product identifiers (ID, code, name, barcode)</li>
                    <li>Counted quantities</li>
                    <li>Unit of measure selections</li>
                    <li>Physical location identifiers (if your warehouse uses location tracking)</li>
                    <li>Timestamps for each count entry</li>
                  </ul>
                  <p className="text-sm leading-7 text-[#969696]">
                    This data is submitted to your organization’s iVend server upon session completion. It is not transmitted to the developer or any external service.
                  </p>
                </div>

                <div className="space-y-4 rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f] p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#969696]">3.4</span>
                    <h3 className="text-xl font-medium">Store / Warehouse Assignment</h3>
                  </div>
                  <p className="text-sm leading-7 text-[#fefeff]">
                    The App stores the identifier and name of the store or warehouse assigned to this device. This is used to filter the warehouse selection to the appropriate site and is part of the device licensing record on the licensing server.
                  </p>
                </div>

                <div className="space-y-4 rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f] p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#969696]">3.5</span>
                    <h3 className="text-xl font-medium">Application Logs</h3>
                  </div>
                  <p className="text-sm leading-7 text-[#fefeff]">
                    The App maintains diagnostic logs to support troubleshooting and bug reporting:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#969696]">
                    <li>An in-memory buffer of up to 500 recent log lines</li>
                    <li>Daily rotating log files retained on-device for up to 30 days</li>
                  </ul>
                  <p className="text-sm leading-7 text-[#fefeff]">
                    Log content includes API request/response metadata, internal state transitions, and error messages. Logs do not capture user passwords or full stock count payloads.
                  </p>
                  <p className="text-sm leading-7 text-[#969696]">
                    Logs are only shared externally if a user explicitly initiates the "Share Bug Report" feature, which packages the log files and sends them via the device’s native share sheet. No logs are automatically transmitted.
                  </p>
                </div>
              </div>
            </section>

            <section id="s4" className="space-y-5 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 04</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Camera Usage</h2>
              <p className="text-sm leading-7 text-[#fefeff]">
                The App requests access to the device camera exclusively for barcode scanning during stock take sessions. No photographs or video are taken, recorded, or stored.
              </p>
              <p className="text-sm leading-7 text-[#969696]">
                Camera access is used in real time to decode product barcodes and is not retained after the scan is complete.
              </p>
            </section>

            <section id="s5" className="space-y-6 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 05</p>
              <h2 className="text-3xl font-semibold md:text-4xl">How We Use the Data</h2>
              <p className="text-sm leading-7 text-[#969696]">
                We do not use any collected data for advertising, analytics, profiling, or sale to third parties.
              </p>

              <div className="overflow-x-auto rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f]">
                <table className="w-full border-separate border-spacing-0 text-sm">
                  <thead>
                    <tr>
                      <th className="border-b border-[#2c2c2c] px-6 py-4 text-left text-xs uppercase tracking-[0.24em] text-[#fefeff]">Data</th>
                      <th className="border-b border-[#2c2c2c] px-6 py-4 text-left text-xs uppercase tracking-[0.24em] text-[#fefeff]">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1a1a1a] text-[#969696]">
                    <tr className="transition-colors duration-150 hover:bg-[#141414]">
                      <td className="px-6 py-5 font-medium text-[#fefeff]">Device hardware ID, model, OS</td>
                      <td className="px-6 py-5">License validation — confirming only authorized devices can access the App</td>
                    </tr>
                    <tr className="transition-colors duration-150 hover:bg-[#141414]">
                      <td className="px-6 py-5 font-medium text-[#fefeff]">Store ID</td>
                      <td className="px-6 py-5">License validation — confirming device is assigned to the correct store</td>
                    </tr>
                    <tr className="transition-colors duration-150 hover:bg-[#141414]">
                      <td className="px-6 py-5 font-medium text-[#fefeff]">API and user credentials</td>
                      <td className="px-6 py-5">Authenticating requests to your organization’s iVend server</td>
                    </tr>
                    <tr className="transition-colors duration-150 hover:bg-[#141414]">
                      <td className="px-6 py-5 font-medium text-[#fefeff]">Stock count entries</td>
                      <td className="px-6 py-5">Compiling and submitting inventory counts to iVend</td>
                    </tr>
                    <tr className="transition-colors duration-150 hover:bg-[#141414]">
                      <td className="px-6 py-5 font-medium text-[#fefeff]">Application logs</td>
                      <td className="px-6 py-5">Diagnosing technical issues when bug reports are filed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="s6" className="space-y-6 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 06</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Data Storage and Retention</h2>
              <p className="text-sm leading-7 text-[#969696]">
                On-device storage and remote retention details are described below.
              </p>

              <div className="space-y-6">
                <div className="rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f] p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#fefeff] mb-4">On-Device Storage</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#969696]">
                    <li><span className="text-[#fefeff] font-medium">API credentials</span> (apiUserId, apiPassword) — Android Keystore / iOS Keychain (hardware-encrypted) — never written to unencrypted storage</li>
                    <li><span className="text-[#fefeff] font-medium">Non-sensitive config</span> (baseUrl, storeId, storeName) — SharedPreferences — until manually cleared or app uninstalled</li>
                    <li><span className="text-[#fefeff] font-medium">User login session</span> — SharedPreferences — until manual logout</li>
                    <li><span className="text-[#fefeff] font-medium">Active session draft</span> (stock count in progress) — SharedPreferences — until submitted or explicitly discarded</li>
                    <li><span className="text-[#fefeff] font-medium">Device hardware ID</span> — iOS Keychain / Android Keystore (via flutter_secure_storage) — persists across reinstalls</li>
                    <li><span className="text-[#fefeff] font-medium">Licence gate cache</span> (gate_cache_v1) — Android Keystore / iOS Keychain — cleared on revocation or expiry</li>
                    <li><span className="text-[#fefeff] font-medium">Application log files</span> — local file system — 30 days (rolling)</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f] p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#fefeff] mb-4">Remote Storage (Licensing Server)</p>
                  <p className="text-sm leading-7 text-[#969696] mb-3">
                    The following data is stored on the developer-operated Supabase licensing server:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#969696]">
                    <li>Device hardware ID</li>
                    <li>Device model</li>
                    <li>Operating system version</li>
                    <li>Assigned store ID</li>
                    <li>First registration timestamp</li>
                    <li>Last seen timestamp</li>
                    <li>License status</li>
                  </ul>
                  <p className="text-sm leading-7 text-[#969696] mt-4">
                    This data is used solely to enforce device licensing. It is stored in a PostgreSQL database hosted by Supabase with row-level security enabled. It is not accessible to the public or to third parties.
                  </p>
                </div>
              </div>
            </section>

            <section id="s7" className="space-y-5 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 07</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Data Sharing</h2>
              <p className="text-sm leading-7 text-[#fefeff]">
                We do not sell, rent, or share your personal data with third parties for commercial purposes.
              </p>
              <p className="text-sm leading-7 text-[#969696]">
                Data may be shared in the following limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#969696]">
                <li><span className="text-[#fefeff] font-medium">Your organization’s iVend server</span> — Stock count submissions and authentication requests are sent to the iVend server configured by your organization’s administrator.</li>
                <li><span className="text-[#fefeff] font-medium">Supabase (licensing server)</span> — Device metadata is sent to the developer’s Supabase instance for license validation only.</li>
                <li><span className="text-[#fefeff] font-medium">Bug report recipient</span> — If you choose to share a bug report, log files are shared via the share sheet to a recipient of your choosing.</li>
              </ul>
            </section>

            <section id="s8" className="space-y-5 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 08</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Network Security</h2>
              <p className="text-sm leading-7 text-[#fefeff]">
                All communication between StockRoom and the Supabase licensing server is encrypted over HTTPS.
              </p>
              <p className="text-sm leading-7 text-[#fefeff]">
                Communication with the iVend Retail API server (/iVendAPI/iVendAPI.svc/WebAPI) uses the transport protocol configured by your organisation's iVend Retail environment. Where that environment uses HTTP rather than HTTPS, API credentials and request data are transmitted without transport-layer encryption. StockRoom does not control or modify the iVend Retail API transport layer.
              </p>
              <p className="text-sm leading-7 text-[#969696]">
                This risk is operationally controlled when StockRoom is deployed within a properly isolated private network (LAN, VLAN, or VPN) with no external access. It is the responsibility of the client's IT administrator to ensure that the iVend Retail API server is not exposed via public IP addresses, port forwarding, or any internet-accessible network configuration.
              </p>
              <p className="text-sm leading-7 text-[#969696]">
                Before deploying StockRoom, all client IT administrators are required to review and sign the Network Security Acknowledgement — StockRoom Deployment (v1.0), which sets out the specific network isolation requirements and the developer's limitations of liability in full. A copy of this document is provided to the licensed organisation's administrator at onboarding.
              </p>
            </section>

            <section id="s9" className="space-y-5 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 09</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Children’s Privacy</h2>
              <p className="text-sm leading-7 text-[#fefeff]">
                This App is intended exclusively for adult employees and contractors in enterprise settings. We do not knowingly collect data from or market to minors under the age of 18.
              </p>
            </section>

            <section id="s10" className="space-y-5 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 10</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Your Rights</h2>
              <p className="text-sm leading-7 text-[#fefeff]">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-[#969696]">
                <li><span className="text-[#fefeff] font-medium">Access</span> the personal data we hold about your device</li>
                <li><span className="text-[#fefeff] font-medium">Request deletion</span> of your device’s licensing record from our server</li>
                <li><span className="text-[#fefeff] font-medium">Opt out</span> of continued device registration</li>
              </ul>
              <p className="text-sm leading-7 text-[#fefeff]">
                To exercise any of these rights, contact us at <a className="underline decoration-[#444] underline-offset-2 transition-colors duration-150 hover:decoration-white" href="mailto:contact@tarirom.co.zw">contact@tarirom.co.zw</a>. Please include your device’s assigned store name and device model to help us locate your record.
              </p>
              <p className="text-sm leading-7 text-[#969696]">
                Note that stock count data submitted to your organization’s iVend server is controlled by your employer, not by us. For requests relating to that data, contact your organization’s system administrator.
              </p>
            </section>

            <section id="s11" className="space-y-5 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 11</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Changes to This Policy</h2>
              <p className="text-sm leading-7 text-[#fefeff]">
                We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this document. Continued use of the App after an update constitutes acceptance of the revised policy.
              </p>
              <p className="text-sm leading-7 text-[#969696]">
                If we make material changes that affect how we handle personal data, we will notify the licensed organization’s administrator.
              </p>
            </section>

            <section id="s12" className="space-y-5 border-t border-[#1a1a1a] pt-10">
              <p className="text-xs uppercase tracking-[0.26em] text-[#969696]">Section 12</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
              <p className="text-sm leading-7 text-[#fefeff]">
                If you have questions or concerns about this Privacy Policy or the data practices of StockRoom, please contact:
              </p>
              <div className="rounded-3xl border border-[#2c2c2c] bg-[#0f0f0f] p-6">
                <p className="text-base font-medium">Tariro M</p>
                <div className="mt-4 grid gap-3 text-sm text-[#969696] sm:grid-cols-[80px_1fr]">
                  <span className="font-mono uppercase tracking-[0.22em]">Email</span>
                  <a className="underline decoration-[#444] underline-offset-2 transition-colors duration-150 hover:decoration-white" href="mailto:contact@tarirom.co.zw">contact@tarirom.co.zw</a>
                  <span className="font-mono uppercase tracking-[0.22em]">Website</span>
                  <a className="underline decoration-[#444] underline-offset-2 transition-colors duration-150 hover:decoration-white" href="https://tarirom.co.zw" target="_blank" rel="noreferrer">tarirom.co.zw</a>
                </div>
              </div>
              <p className="text-sm leading-7 text-[#969696]">
                StockRoom is developed and maintained by Tariro M. The iVend platform is a product of CitiXsys Technologies. StockRoom is an independent integration application and is not affiliated with or endorsed by CitiXsys Technologies.
              </p>
            </section>

            <div className="flex flex-col gap-4 border-t border-[#1a1a1a] pt-8 text-sm text-[#969696] md:flex-row md:items-center md:justify-between">
              <Link href="/" className="underline decoration-[#444] underline-offset-2 transition-colors duration-150 hover:decoration-white">
                ← Back to portfolio
              </Link>
              <p className="font-mono uppercase tracking-[0.26em]">© 2026 Tariro M · v1.2</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
