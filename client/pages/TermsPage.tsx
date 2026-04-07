import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";

const LAST_UPDATED = "April 7, 2025";

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Use | LS Beauty Salon & Spa — Paoli, PA"
        description="Terms of Use for LS Beauty Salon & Spa located at 24 Paoli Pike, Paoli, PA 19301. Please read these terms carefully before using our website or booking our services."
        path="/terms"
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
                <li className="text-glowly-black font-medium" aria-current="page">Terms of Use</li>
              </ol>
            </nav>

            <h1 className="font-cormorant-heading text-h1 text-glowly-black mb-3">Terms of Use</h1>
            <p className="font-sans text-body-sm text-glowly-black/40 mb-12">Last updated: {LAST_UPDATED}</p>

            <div className="space-y-10 font-sans text-body-md text-glowly-black/70 leading-relaxed">

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using the website at <strong>lsbeautysalon.com</strong> (the "Site") or booking services at LS Beauty Salon & Spa ("Salon," "we," "us," or "our"), located at 24 Paoli Pike, Paoli, Pennsylvania 19301, you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site or our services.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">2. Use of the Website</h2>
                <p className="mb-3">You agree to use this Site only for lawful purposes. You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Site in any way that violates applicable federal, state, or local laws</li>
                  <li>Attempt to gain unauthorized access to any part of the Site or our systems</li>
                  <li>Transmit any harmful, offensive, or disruptive content</li>
                  <li>Use automated tools to scrape, copy, or collect content from the Site without written permission</li>
                  <li>Impersonate LS Beauty Salon & Spa or any employee</li>
                </ul>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">3. Appointment Booking & Cancellation Policy</h2>
                <p className="mb-3">Appointments are booked through our third-party platform, Vagaro. By booking an appointment, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cancellation:</strong> We require at least 24 hours notice for cancellations or rescheduling. Late cancellations may be subject to a cancellation fee.</li>
                  <li><strong>No-shows:</strong> Clients who do not show up without notice may be charged a no-show fee or required to prepay for future bookings.</li>
                  <li><strong>Lateness:</strong> If you arrive more than 15 minutes late, we may need to shorten or reschedule your service to accommodate other clients.</li>
                  <li><strong>Deposits:</strong> Certain services may require a deposit at the time of booking. Deposits are non-refundable if you cancel with less than 24 hours notice.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">4. Service Results & Maintenance Guarantee</h2>
                <p className="mb-3">We take pride in the quality of our work. Please note:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>10-Day Manicure Guarantee:</strong> If you experience lifting or chipping within 10 days of your manicure service, contact us to schedule a complimentary repair. This guarantee applies to normal wear and excludes damage caused by improper aftercare, trauma, or exposure to harsh chemicals.</li>
                  <li>Individual results may vary based on nail condition, skin type, lifestyle, and aftercare practices.</li>
                  <li>We are not responsible for reactions to products in clients who have not disclosed known allergies or sensitivities prior to service.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">5. Health & Safety</h2>
                <p>For the safety of all clients and staff, please inform your technician of any allergies, skin conditions, health conditions, or medications that may affect your service. We reserve the right to decline service if we determine it may pose a health or safety risk.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">6. Intellectual Property</h2>
                <p>All content on this Site — including text, images, graphics, logos, and design — is the property of LS Beauty Salon & Spa or its content suppliers and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">7. Third-Party Services</h2>
                <p>Our Site links to and integrates with third-party services including Vagaro (booking), Google Maps, Instagram, and TikTok. We are not responsible for the content, privacy practices, or terms of these third-party platforms. Your use of those services is governed by their own terms.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">8. Disclaimer of Warranties</h2>
                <p>This Site and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses. We make no warranties regarding the accuracy or completeness of any content on the Site.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">9. Limitation of Liability</h2>
                <p>To the fullest extent permitted by Pennsylvania law, LS Beauty Salon & Spa shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this Site or our services. Our total liability to you shall not exceed the amount you paid for the specific service giving rise to the claim.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">10. Governing Law</h2>
                <p>These Terms of Use are governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Chester County, Pennsylvania.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">11. Changes to These Terms</h2>
                <p>We reserve the right to update these Terms of Use at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new terms.</p>
              </section>

              <section>
                <h2 className="font-cormorant-heading text-display-lg text-glowly-black mb-4">12. Contact Us</h2>
                <p>If you have any questions about these Terms of Use, please contact us:</p>
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