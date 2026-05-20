import Link from "next/link";

export default function StockRoomPrivacy() {
  return (
    <main className="min-h-screen bg-black text-[#fefeff] px-4 py-12 md:px-24 lg:px-32">
      <div className="max-w-4xl mx-auto space-y-10">
        <section className="space-y-4">
          <p className="text-sm text-[#969696]">Effective date: May 11, 2026</p>
          <h1 className="text-4xl md:text-6xl font-medium">StockRoom Privacy Policy</h1>
          <div className="text-sm text-[#969696] space-y-1">
            <p>Developer: Tariro M</p>
            <p>Contact: <a className="text-[#fefeff] underline" href="mailto:contact@tarirom.co.zw">contact@tarirom.co.zw</a></p>
            <p>Website: <a className="text-[#fefeff] underline" href="https://tarirom.co.zw" target="_blank" rel="noreferrer">https://tarirom.co.zw</a></p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Overview</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            StockRoom ("the App") is a mobile inventory management application built for enterprise use. It is designed for authorized retail staff and field technicians who perform physical stock counts using the iVend Point of Sale platform.
          </p>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            This Privacy Policy explains what data the App collects, how it is used, where it is stored, and your rights in relation to that data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Who This Policy Applies To</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            This policy applies to all users of the StockRoom mobile application on iOS and Android. The App is intended for use only by employees or contractors of organizations that have been licensed to use it. It is not a consumer application and is not intended for use by the general public or by minors.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Data We Collect</h2>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.1 Device Information</h3>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              To enforce device licensing and prevent unauthorized access, the App collects and transmits the following device details on startup:
            </p>
            <ul className="list-disc list-inside text-sm text-[#969696] space-y-1">
              <li><span className="text-[#fefeff]">Hardware identifier</span> — a unique device ID (on iOS: a persisted UUID stored in the Keychain; on Android: the Android SSAID or a persisted UUID)</li>
              <li><span className="text-[#fefeff]">Device model</span> — e.g. "iPhone 14 Pro", "Samsung Galaxy A52"</li>
              <li><span className="text-[#fefeff]">Operating system version</span> — e.g. "iOS 17.4", "Android 13"</li>
              <li><span className="text-[#fefeff]">Emulator status</span> — whether the app is running on a physical device or an emulator</li>
            </ul>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              This information is sent to a secure licensing server (Supabase) to verify that the device is authorized to use the App. It is not used for advertising or analytics.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.2 User Credentials</h3>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              The App requires the following credentials to connect to your organization’s iVend server:
            </p>
            <ul className="list-disc list-inside text-sm text-[#969696] space-y-1">
              <li><span className="text-[#fefeff]">API credentials</span> — a username and password used by the App to communicate with the iVend API, entered by an administrator during setup.</li>
              <li><span className="text-[#fefeff]">Stocktake user credentials</span> — a username and password entered by the individual technician at login.</li>
            </ul>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              API credentials (apiUserId and apiPassword) are stored in the device's hardware-backed secure enclave — Android Keystore on Android, iOS Keychain on iOS — using flutter_secure_storage. They are never written to unencrypted storage. Devices running a version of the App prior to v3.0 are automatically migrated to secure storage on first launch after update.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.3 Stock Count Data</h3>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              During a stock take session, the App records and stores locally:
            </p>
            <ul className="list-disc list-inside text-sm text-[#969696] space-y-1">
              <li>Product identifiers (ID, code, name, barcode)</li>
              <li>Counted quantities</li>
              <li>Unit of measure selections</li>
              <li>Physical location identifiers (if your warehouse uses location tracking)</li>
              <li>Timestamps for each count entry</li>
            </ul>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              This data is submitted to your organization’s iVend server upon session completion. It is not transmitted to the developer or any external service.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.4 Store / Warehouse Assignment</h3>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              The App stores the identifier and name of the store or warehouse assigned to this device. This is used to filter the warehouse selection to the appropriate site and is part of the device licensing record on the licensing server.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">3.5 Application Logs</h3>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              The App maintains diagnostic logs to support troubleshooting and bug reporting:
            </p>
            <ul className="list-disc list-inside text-sm text-[#969696] space-y-1">
              <li>An in-memory buffer of up to 500 recent log lines</li>
              <li>Daily rotating log files retained on-device for up to 30 days</li>
            </ul>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              Log content includes API request/response metadata, internal state transitions, and error messages. Logs do not capture user passwords or full stock count payloads.
            </p>
            <p className="text-sm text-[#fefeff] leading-relaxed">
              Logs are only shared externally if a user explicitly initiates the "Share Bug Report" feature, which packages the log files and sends them via the device’s native share sheet. No logs are automatically transmitted.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Camera Usage</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            The App requests access to the device camera exclusively for barcode scanning during stock take sessions. No photographs or video are taken, recorded, or stored. Camera access is used in real time to decode product barcodes and is not retained after the scan is complete.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. How We Use the Data</h2>
          <div className="overflow-x-auto rounded-lg border border-[#2c2c2c] bg-[#0f0f0f] p-4">
            <table className="w-full text-left text-sm text-[#969696]">
              <thead>
                <tr>
                  <th className="pb-3 font-medium text-[#fefeff]">Data</th>
                  <th className="pb-3 font-medium text-[#fefeff]">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2c2c2c]">
                <tr>
                  <td className="py-3">Device hardware ID, model, OS</td>
                  <td className="py-3">License validation — confirming only authorized devices can access the App</td>
                </tr>
                <tr>
                  <td className="py-3">Store ID</td>
                  <td className="py-3">License validation — confirming device is assigned to the correct store</td>
                </tr>
                <tr>
                  <td className="py-3">API and user credentials</td>
                  <td className="py-3">Authenticating requests to your organization’s iVend server</td>
                </tr>
                <tr>
                  <td className="py-3">Stock count entries</td>
                  <td className="py-3">Compiling and submitting inventory counts to iVend</td>
                </tr>
                <tr>
                  <td className="py-3">Application logs</td>
                  <td className="py-3">Diagnosing technical issues when bug reports are filed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            We do not use any collected data for advertising, analytics, profiling, or sale to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Data Storage and Retention</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            On-device storage and remote retention details are described below.
          </p>
          <div className="space-y-3 text-sm text-[#969696] leading-relaxed">
            <p className="text-[#fefeff] font-medium">On-Device Storage</p>
            <ul className="list-disc list-inside space-y-1">
              <li>API credentials (apiUserId, apiPassword) — Android Keystore / iOS Keychain (hardware-encrypted) — never written to unencrypted storage</li>
              <li>Non-sensitive config (baseUrl, storeId, storeName) — SharedPreferences — until manually cleared or app uninstalled</li>
              <li>User login session — SharedPreferences — until manual logout</li>
              <li>Active session draft (stock count in progress) — SharedPreferences — until submitted or explicitly discarded</li>
              <li>Device hardware ID — iOS Keychain / Android Keystore (via flutter_secure_storage) — persists across reinstalls</li>
              <li>Licence gate cache (gate_cache_v1) — Android Keystore / iOS Keychain — cleared on revocation or expiry</li>
              <li>Application log files — local file system — 30 days (rolling)</li>
            </ul>
            <p className="text-[#fefeff] font-medium mt-4">Remote Storage (Licensing Server)</p>
            <p>
              The following data is stored on the developer-operated Supabase licensing server:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Device hardware ID</li>
              <li>Device model</li>
              <li>Operating system version</li>
              <li>Assigned store ID</li>
              <li>First registration timestamp</li>
              <li>Last seen timestamp</li>
              <li>License status</li>
            </ul>
            <p>
              This data is used solely to enforce device licensing. It is stored in a PostgreSQL database hosted by Supabase with row-level security enabled. It is not accessible to the public or to third parties.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Data Sharing</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            We do not sell, rent, or share your personal data with third parties for commercial purposes.
          </p>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            Data may be shared in the following limited circumstances:
          </p>
          <ul className="list-disc list-inside text-sm text-[#969696] space-y-1">
            <li><span className="text-[#fefeff]">Your organization’s iVend server</span> — Stock count submissions and authentication requests are sent to the iVend server configured by your organization’s administrator.</li>
            <li><span className="text-[#fefeff]">Supabase (licensing server)</span> — Device metadata is sent to the developer’s Supabase instance for license validation only.</li>
            <li><span className="text-[#fefeff]">Bug report recipient</span> — If you choose to share a bug report, log files are shared via the share sheet to a recipient of your choosing.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Network Security</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            All communication between StockRoom and the Supabase licensing server is encrypted over HTTPS.
          </p>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            Communication with the iVend Retail API server (/iVendAPI/iVendAPI.svc/WebAPI) uses the transport protocol configured by your organisation's iVend Retail environment. Where that environment uses HTTP rather than HTTPS, API credentials and request data are transmitted without transport-layer encryption. StockRoom does not control or modify the iVend Retail API transport layer.
          </p>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            This risk is operationally controlled when StockRoom is deployed within a properly isolated private network (LAN, VLAN, or VPN) with no external access. It is the responsibility of the client's IT administrator to ensure that the iVend Retail API server is not exposed via public IP addresses, port forwarding, or any internet-accessible network configuration.
          </p>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            Before deploying StockRoom, all client IT administrators are required to review and sign the Network Security Acknowledgement — StockRoom Deployment (v1.0), which sets out the specific network isolation requirements and the developer's limitations of liability in full. A copy of this document is provided to the licensed organisation's administrator at onboarding.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Children’s Privacy</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            This App is intended exclusively for adult employees and contractors in enterprise settings. We do not knowingly collect data from or market to minors under the age of 18.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Your Rights</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc list-inside text-sm text-[#969696] space-y-1">
            <li><span className="text-[#fefeff]">Access</span> the personal data we hold about your device</li>
            <li><span className="text-[#fefeff]">Request deletion</span> of your device’s licensing record from our server</li>
            <li><span className="text-[#fefeff]">Opt out</span> of continued device registration</li>
          </ul>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            To exercise any of these rights, contact us at <a className="text-[#fefeff] underline" href="mailto:contact@tarirom.co.zw">contact@tarirom.co.zw</a>. Please include your device’s assigned store name and device model to help us locate your record.
          </p>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            Note that stock count data submitted to your organization’s iVend server is controlled by your employer, not by us. For requests relating to that data, contact your organization’s system administrator.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Changes to This Policy</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this document. Continued use of the App after an update constitutes acceptance of the revised policy.
          </p>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            If we make material changes that affect how we handle personal data, we will notify the licensed organization’s administrator.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">12. Contact</h2>
          <p className="text-sm text-[#fefeff] leading-relaxed">
            If you have questions or concerns about this Privacy Policy or the data practices of StockRoom, please contact:
          </p>
          <p className="text-sm text-[#fefeff] leading-relaxed font-medium">Tariro M</p>
          <p className="text-sm text-[#fefeff] leading-relaxed">Email: <a className="text-[#fefeff] underline" href="mailto:contact@tarirom.co.zw">contact@tarirom.co.zw</a></p>
          <p className="text-sm text-[#fefeff] leading-relaxed">Website: <a className="text-[#fefeff] underline" href="https://tarirom.co.zw" target="_blank" rel="noreferrer">https://tarirom.co.zw</a></p>
          <p className="text-sm text-[#969696] leading-relaxed">
            StockRoom is developed and maintained by Tariro M. The iVend platform is a product of CitiXsys Technologies. StockRoom is an independent integration application and is not affiliated with or endorsed by CitiXsys Technologies.
          </p>
        </section>

        <div className="pt-6">
          <Link href="/" className="text-sm text-[#fefeff] underline">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
