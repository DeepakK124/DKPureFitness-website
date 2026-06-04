import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GYM_NAME, WEBSITE_URL, CONTACT_EMAIL, ADDRESS } from '@/lib/constants';

const effectiveDate = "June 3, 2026";

export function TermsDialog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-border text-muted-foreground p-6 md:p-8 shadow-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl md:text-2xl text-foreground uppercase">Terms &amp; Conditions</DialogTitle>
          <p className="font-mono text-[10px] tracking-widest text-primary">EFFECTIVE DATE: {effectiveDate}</p>
        </DialogHeader>
        
        <div className="space-y-6 md:space-y-8 font-body leading-relaxed text-xs md:text-sm mt-4">
          <section>
            <p>
              These Terms and Conditions ("Terms") govern your use of the {GYM_NAME} website ({WEBSITE_URL}),
              booking services, and physical gym facilities. By accessing our site or facilities, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">1. Health &amp; Medical Disclaimer</h2>
            <p className="text-primary font-medium"><strong>The content on this website (including workouts, nutrition information, and transformation stories) is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</strong></p>
            <p className="mt-2">Always consult a physician before beginning any new fitness or nutrition program. Individual results vary, and {GYM_NAME} does not guarantee specific outcomes such as weight loss or muscle gain.</p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">2. Membership &amp; Registration</h2>
            <div className="space-y-3">
              <p><strong>2.1 Eligibility:</strong> Membership and free demo bookings are open to individuals aged 16 and above.</p>
              <p><strong>2.2 Acceptance:</strong> {GYM_NAME} reserves the right to refuse membership or booking access to anyone violating these terms or gym policies.</p>
            </div>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">3. Content Ownership &amp; Acceptable Use</h2>
            <p>All logos, trademarks, images, and content on this website are the property of {GYM_NAME} or its licensors. You may not copy, distribute, or use this content without explicit written permission. You agree not to use the website for any unlawful purpose or to submit false or spam bookings.</p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">4. Limitation of Liability</h2>
            <p>To the maximum extent permitted by Indian law, {GYM_NAME} shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the website or participation in gym activities. You participate in physical activities at your own risk.</p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">5. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.</p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">6. Free Demo Booking</h2>
            <div className="space-y-3">
              <p><strong>6.1 Validity:</strong> A free demo booking is valid for a single 1-hour visit during the specific time slot booked. Unused slots expire automatically.</p>
              <p><strong>6.2 Booking Platform:</strong> Demo bookings are processed through Google Calendar Appointment Scheduling. By booking, you acknowledge and agree to Google's Terms of Service and Privacy Policy.</p>
              <p><strong>6.3 Rescheduling &amp; Cancellation:</strong> {GYM_NAME} reserves the right to cancel or reschedule any booking due to operational requirements. You will be notified via the email address provided during booking.</p>
              <p><strong>6.4 Fair Use:</strong> Free demo bookings are limited to one per person per 30-day period. Repeat or fraudulent bookings may be cancelled without notice.</p>
              <p><strong>6.5 Conduct:</strong> During your demo visit, you must follow all gym rules and safety guidelines. {GYM_NAME} is not liable for injuries sustained during your visit.</p>
            </div>
          </section>

          <section>
            <div className="bg-secondary/30 border border-border p-4 space-y-2 mt-6">
              <h3 className="text-foreground font-display text-sm uppercase">Contact Information</h3>
              <p className="text-xs">Email: {CONTACT_EMAIL}</p>
              <p className="text-xs">Address: {ADDRESS}</p>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function PrivacyDialog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-border text-muted-foreground p-6 md:p-8 shadow-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl md:text-2xl text-foreground uppercase">Privacy Policy</DialogTitle>
          <p className="font-mono text-[10px] tracking-widest text-primary">LAST UPDATED: {effectiveDate}</p>
        </DialogHeader>
        
        <div className="space-y-6 md:space-y-8 font-body leading-relaxed text-xs md:text-sm mt-4">
          <section>
            <p>
              At {GYM_NAME}, we respect your privacy and are committed to protecting your personal data in compliance with the Digital Personal Data Protection Act (DPDPA), 2023 and the Information Technology Act, 2000 of India.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">1. Information We Collect</h2>
            <p>This website does not operate its own backend server or database. We do not directly collect, store, or process personal data on our infrastructure. However, personal information may be collected by the following third-party services integrated into this website:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Google Calendar Appointment Scheduling:</strong> When you book a free demo via our embedded booking widget, your name and email address are collected and processed directly by Google LLC under their <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">Privacy Policy</a>. We receive your booking details through our linked Google Calendar account.</li>
              <li><strong>Vercel Analytics &amp; Speed Insights:</strong> We use Vercel's analytics services to monitor website performance. These services collect anonymized, non-personally-identifiable metrics such as page views, load times, and web vitals. No cookies are set by these services.</li>
              <li><strong>Local Storage:</strong> We store a single key (<code className="text-primary text-[10px]">dkpf_cookie_consent</code>) in your browser's localStorage to remember whether you have acknowledged the cookie/privacy banner. This data is never transmitted to any server.</li>
            </ul>
            <p className="mt-3 text-xs italic">Note: We do not knowingly collect personal data from minors under 18 without parental consent.</p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">2. Purpose of Collection</h2>
            <p>Personal data processed through third-party services is used strictly for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Coordinating and managing free demo bookings at {GYM_NAME}.</li>
              <li>Sending automated booking confirmations and reminders (via Google Calendar).</li>
              <li>Monitoring website performance and improving user experience (via Vercel Analytics).</li>
            </ul>
            <p className="mt-2 font-medium text-primary">We do not send promotional emails, newsletters, or marketing communications of any kind.</p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">3. Third-Party Data Processors</h2>
            <p>We rely on the following trusted third parties to process data on our behalf:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Google LLC</strong> — Provides the booking and scheduling system. Data processed includes your name, email, and selected time slot. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">Google's Privacy Policy</a>.</li>
              <li><strong>Vercel Inc.</strong> — Provides website hosting and anonymized analytics. Subject to <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">Vercel's Privacy Policy</a>.</li>
            </ul>
            <p className="mt-2">We do not sell, rent, or trade your personal data to any third party for marketing purposes. All data sharing is strictly functional and necessary for the services described above.</p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">4. Data Security</h2>
            <p>All connections to this website are encrypted via HTTPS with HSTS preloading. We enforce a strict Content Security Policy (CSP) to prevent cross-site scripting and data injection attacks. Since we do not operate a backend database, there is no centralized personal data store that could be breached.</p>
          </section>

          <section>
            <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">5. Your Rights</h2>
            <p>Under the Digital Personal Data Protection Act (DPDPA), 2023, you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Request access to your personal data held by us or our third-party processors.</li>
              <li>Request correction of inaccurate personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Withdraw consent at any time by contacting our Grievance Officer.</li>
            </ul>
            <p className="mt-2">To exercise these rights regarding booking data held by Google, you may also manage your data directly through your <a href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">Google Account settings</a>.</p>
          </section>

          <section>
            <div className="bg-secondary/30 border border-border p-4 space-y-2 mt-6">
              <h3 className="text-foreground font-display text-sm uppercase">6. Grievance Officer</h3>
              <p className="text-xs mb-2">In accordance with the Information Technology Act, 2000, and rules made thereunder, the name and contact details of the Grievance Officer are provided below:</p>
              <p className="text-xs"><strong>Name:</strong> Deepak Kumar</p>
              <p className="text-xs"><strong>Email:</strong> {CONTACT_EMAIL}</p>
              <p className="text-xs"><strong>Address:</strong> {ADDRESS}</p>
              <p className="text-xs text-muted-foreground mt-2">We will acknowledge your grievance within 24 hours and resolve it within 15 days.</p>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}