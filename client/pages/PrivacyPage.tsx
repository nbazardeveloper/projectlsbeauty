import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";

const LAST_UPDATED = "April 7, 2025";

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | LS Beauty Salon & Spa — Paoli, PA"
        description="Privacy Policy for LS Beauty Salon & Spa located at 24 Paoli Pike, Paoli, PA 19301. Learn how we collect, use, and protect your personal information."
        path="/privacy"
      />

      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />

        <main className="pt-28 lg:pt-32 pb-0" id="main-content">
          <div className="max-w-3xl mx-auto px-6 py-12 lg:py-20">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-sans text-body-sm text-glowly-black/50">
                <li><Link to="/" className="hover:text-glowly-orange transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-glowly-black font-medium" aria-current="page">Privacy Policy</li>
              </ol>
            </nav>

            <h1 className="font-cormorant-heading text-h1 text-glowly-black mb-3">Privacy Policy</h1>
            <p className="font-sans text-body-sm text-glowly-black/40 mb-12">Last updated: {LAST_UPDATED}</p>

            <div className="prose-custom space-y-10 font-sans text-body-md text-glowly-black/70 leading-relaxed">

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">1. Introduction</h2>
                <p>LS Beauty Salon & Spa ("we," "us," or "our") is located at 24 Paoli Pike, Paoli, Pennsylvania 19301. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong>lsbeautysalon.com</strong> or interact with our salon services.</p>
                <p className="mt-3">By using our website or booking our services, you agree to the collection and use of information in accordance with this policy.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">2. Information We Collect</h2>
                <p className="mb-3"><strong>Information you provide directly:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, phone number, and email address when booking an appointment</li>
                  <li>Health or allergy information relevant to your beauty services</li>
                  <li>Payment information processed through our third-party booking platform (Vagaro)</li>
                  <li>Messages or inquiries you send to us via phone, email, or social media</li>
                </ul>
                <p className="mt-4 mb-3"><strong>Information collected automatically:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Browser type, operating system, and device information</li>
                  <li>IP address and general location data</li>
                  <li>Pages visited on our website and time spent</li>
                  <li>Referring URLs</li>
                </ul>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Schedule and manage your appointments</li>
                  <li>Send appointment confirmations and reminders</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Send promotional communications (only with your consent)</li>
                  <li>Comply with legal obligations under Pennsylvania and federal law</li>
                </ul>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">4. Sharing Your Information</h2>
                <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Vagaro:</strong> Our third-party booking platform that processes appointments and payments. Vagaro's privacy policy applies to information processed through their platform.</li>
                  <li><strong>Google:</strong> We use Google Maps and Google Analytics. Google's privacy policy governs their data practices.</li>
                  <li><strong>Law enforcement or legal proceedings:</strong> If required by law, court order, or to protect our rights.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">5. Cookies and Tracking</h2>
                <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">6. Data Security</h2>
                <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">7. Your Rights (Pennsylvania Residents)</h2>
                <p className="mb-3">As a Pennsylvania resident, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of inaccurate personal information</li>
                  <li>Request deletion of your personal information (subject to legal exceptions)</li>
                  <li>Opt out of promotional communications at any time</li>
                </ul>
                <p className="mt-4">To exercise these rights, contact us at <a href="tel:+12679624747" className="text-glowly-orange hover:underline">(267) 962-4747</a> or visit us at 24 Paoli Pike, Paoli, PA 19301.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">8. Children's Privacy</h2>
                <p>Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">9. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites, including Vagaro, Instagram, TikTok, and Google Maps. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last updated" date at the top of this page. Your continued use of our website after any changes constitutes acceptance of the updated policy.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">11. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <address className="not-italic mt-4 space-y-1">
                  <p><strong>LS Beauty Salon & Spa</strong></p>
                  <p>24 Paoli Pike, Paoli, PA 19301</p>
                  <p>Phone: <a href="tel:+12679624747" className="text-glowly-orange hover:underline">(267) 962-4747</a></p>
                  <p>Website: <a href="https://lsbeautysalon.com" className="text-glowly-orange hover:underline">lsbeautysalon.com</a></p>
                </address>
              </section>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}