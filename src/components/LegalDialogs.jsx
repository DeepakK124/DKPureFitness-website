import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GYM_NAME, WEBSITE_URL, CONTACT_EMAIL, ADDRESS } from '@/lib/constants';

const effectiveDate = "June 6, 2026";

// ─── Shared styles ────────────────────────────────────────────────────────────
const H2 = ({ children }) => (
  <h2 className="text-foreground text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-border pb-1">
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 className="text-foreground text-sm font-semibold mb-2 uppercase tracking-wider">
    {children}
  </h3>
);

// ─── Terms & Conditions ───────────────────────────────────────────────────────
export function TermsDialog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-border text-muted-foreground p-6 md:p-8 shadow-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl md:text-2xl text-foreground uppercase">
            Terms &amp; Conditions
          </DialogTitle>
          <p className="font-mono text-[10px] tracking-widest text-primary">
            EFFECTIVE DATE: {effectiveDate}
          </p>
        </DialogHeader>

        <div className="space-y-6 md:space-y-8 font-body leading-relaxed text-xs md:text-sm mt-4">

          <section>
            <p>
              These Terms and Conditions ("Terms") govern your use of the {GYM_NAME} website ({WEBSITE_URL}),
              online booking services, and physical gym facilities located at {ADDRESS}. By accessing our
              website or entering our premises, you confirm that you have read, understood, and agree to
              be bound by these Terms.
            </p>
          </section>

          <section>
            <H2>1. Health &amp; Medical Disclaimer</H2>
            <p className="text-primary font-medium">
              The content on this website — including workouts, transformation stories, and fitness guidance —
              is for informational purposes only and does not constitute professional medical advice,
              diagnosis, or treatment.
            </p>
            <p className="mt-2">
              You must consult a qualified physician before starting any new exercise or nutrition program,
              particularly if you have a pre-existing medical condition, injury, or are pregnant.
              {GYM_NAME} does not guarantee specific results such as weight loss, muscle gain, or
              athletic performance improvement. Individual results depend on effort, consistency, diet,
              genetics, and other factors outside our control.
            </p>
          </section>

          <section>
            <H2>2. Membership &amp; Registration</H2>
            <div className="space-y-3">
              <p>
                <strong>2.1 Eligibility:</strong> Membership is open to individuals aged 16 and above.
                Members aged 16–17 require written consent from a parent or legal guardian before
                enrolling.
              </p>
              <p>
                <strong>2.2 Accurate Information:</strong> You agree to provide truthful and complete
                information when registering or booking. {GYM_NAME} reserves the right to cancel
                memberships obtained through false information without refund.
              </p>
              <p>
                <strong>2.3 Membership Fees:</strong> Membership fees are payable in advance for the
                chosen plan period. Fees are subject to change; existing members will be notified at
                least 15 days before any price revision takes effect.
              </p>
              <p>
                <strong>2.4 Cancellation &amp; Refunds:</strong> Monthly memberships are
                non-refundable once activated. For quarterly or longer plans, a pro-rata refund may
                be considered only in cases of a medically documented inability to train, subject to
                management approval. No refunds are issued for missed sessions, travel, or change of
                mind.
              </p>
              <p>
                <strong>2.5 Suspension:</strong> {GYM_NAME} reserves the right to suspend or
                terminate your membership without refund if you violate these Terms, engage in
                misconduct on the premises, or fail to settle outstanding dues.
              </p>
            </div>
          </section>

          <section>
            <H2>3. Gym Rules &amp; Code of Conduct</H2>
            <p className="mb-3">
              All members and visitors must comply with the following rules at all times on {GYM_NAME}
              premises:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Wear appropriate athletic clothing and clean, closed-toe footwear at all times.</li>
              <li>Re-rack all weights and return equipment to its designated place after use.</li>
              <li>Wipe down equipment with the provided sanitiser after each use.</li>
              <li>Respect fellow members' personal space and training time. Unsolicited coaching or
                  physical contact is not permitted.</li>
              <li>Harassment, discrimination, intimidation, or abusive language of any kind will
                  result in immediate and permanent termination of membership without refund.</li>
              <li>Loud, disruptive behaviour, or use of mobile phones on loudspeaker in the training
                  area is not permitted.</li>
              <li>The use, possession, or distribution of any performance-enhancing drugs or
                  controlled substances on the premises is strictly prohibited and may be reported
                  to relevant authorities.</li>
              <li>Smoking, alcohol, and consumption of non-gym-approved supplements on the premises
                  are prohibited.</li>
              <li>{GYM_NAME} reserves the right to refuse entry to anyone who appears intoxicated,
                  unwell, or poses a safety risk to others.</li>
            </ul>
          </section>

          <section>
            <H2>4. Photography &amp; Media</H2>
            <div className="space-y-3">
              <p>
                <strong>4.1 Personal Use:</strong> You may take photos or videos of yourself on the
                premises for personal use. You must obtain the explicit verbal consent of any other
                person who appears in your content before publishing it on any platform.
              </p>
              <p>
                <strong>4.2 Prohibited Areas:</strong> Photography or video recording in changing
                areas, washrooms, or any area where privacy is reasonably expected is strictly
                prohibited and may be treated as a criminal offence under applicable law.
              </p>
              <p>
                <strong>4.3 Commercial Use:</strong> You may not use content recorded on the premises
                for commercial purposes, brand partnerships, or paid promotions without prior written
                approval from {GYM_NAME} management.
              </p>
              <p>
                <strong>4.4 {GYM_NAME} Media:</strong> By participating in gym activities, you
                consent to being incidentally captured in photos or videos taken by {GYM_NAME} for
                use on our website, social media, and marketing materials. If you wish to opt out,
                please notify staff in writing.
              </p>
            </div>
          </section>

          <section>
            <H2>5. Free Demo Booking</H2>
            <div className="space-y-3">
              <p>
                <strong>5.1 Validity:</strong> A free demo entitles you to one 1-hour visit during
                the booked time slot. Unused slots expire automatically and cannot be rolled over.
              </p>
              <p>
                <strong>5.2 One Per Person:</strong> Free demo sessions are limited to one per person
                per 30-day period. Duplicate or fraudulent bookings will be cancelled without notice.
              </p>
              <p>
                <strong>5.3 Booking Platform:</strong> Bookings are processed through Google Calendar
                Appointment Scheduling. By booking, you agree to Google's Terms of Service and
                Privacy Policy.
              </p>
              <p>
                <strong>5.4 Rescheduling &amp; Cancellation:</strong> {GYM_NAME} may cancel or
                reschedule bookings due to operational requirements. You will be notified via the
                email address provided at the time of booking.
              </p>
              <p>
                <strong>5.5 Conduct During Demo:</strong> All gym rules in Section 3 apply during
                your demo visit. {GYM_NAME} is not liable for injuries sustained during the visit,
                and you participate at your own risk.
              </p>
            </div>
          </section>

          <section>
            <H2>6. Intellectual Property</H2>
            <p>
              All content on this website — including text, logos, trademarks, photographs, videos,
              and graphic design — is the intellectual property of {GYM_NAME} or its licensors and
              is protected under the Copyright Act, 1957 and other applicable Indian IP laws. You
              may not reproduce, distribute, modify, or commercially exploit any content without
              prior written permission. Unauthorised use may result in legal action.
            </p>
          </section>

          <section>
            <H2>7. Limitation of Liability</H2>
            <p>
              To the fullest extent permitted by applicable Indian law, {GYM_NAME}, its owner,
              trainers, and staff shall not be liable for any direct, indirect, incidental,
              consequential, or punitive damages arising from:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Your use of or inability to access this website.</li>
              <li>Injuries, accidents, or illness sustained on the premises during any training
                  activity, including free demos.</li>
              <li>Loss or damage to personal property on the premises.</li>
              <li>Reliance on any fitness or nutritional information published on this website.</li>
            </ul>
            <p className="mt-2">
              You acknowledge that physical exercise carries inherent risk and that you participate
              entirely at your own discretion and risk.
            </p>
          </section>

          <section>
            <H2>8. Governing Law &amp; Dispute Resolution</H2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India.
              In the event of a dispute, you agree to first contact {GYM_NAME} in writing to
              seek an amicable resolution. If unresolved within 30 days, disputes shall be
              subject to the exclusive jurisdiction of the competent courts in Hyderabad,
              Telangana.
            </p>
          </section>

          <section>
            <H2>9. Changes to These Terms</H2>
            <p>
              {GYM_NAME} reserves the right to modify these Terms at any time. Changes will be
              posted on this page with an updated effective date. Your continued use of the website
              or gym facilities after any modification constitutes your acceptance of the revised
              Terms. We recommend reviewing this page periodically.
            </p>
          </section>

          <section>
            <div className="bg-secondary/30 border border-border p-4 space-y-2 mt-2">
              <H3>Contact</H3>
              <p className="text-xs">For questions regarding these Terms, contact us at:</p>
              <p className="text-xs"><strong>Email:</strong> {CONTACT_EMAIL}</p>
              <p className="text-xs"><strong>Address:</strong> {ADDRESS}</p>
            </div>
          </section>

        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Privacy Policy ───────────────────────────────────────────────────────────
export function PrivacyDialog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-border text-muted-foreground p-6 md:p-8 shadow-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl md:text-2xl text-foreground uppercase">
            Privacy Policy
          </DialogTitle>
          <p className="font-mono text-[10px] tracking-widest text-primary">
            LAST UPDATED: {effectiveDate}
          </p>
        </DialogHeader>

        <div className="space-y-6 md:space-y-8 font-body leading-relaxed text-xs md:text-sm mt-4">

          <section>
            <p>
              {GYM_NAME} ("we", "us", "our") is committed to protecting your privacy. This Policy
              explains what personal information we collect, how we use it, and your rights under
              the <strong>Digital Personal Data Protection Act (DPDPA), 2023</strong> and the
              <strong> Information Technology Act, 2000</strong> of India.
            </p>
            <p className="mt-2">
              This website operates without a proprietary backend server or database. We do not
              directly store personal data on our own infrastructure. Any personal data processed
              is handled entirely by the trusted third-party services described below.
            </p>
          </section>

          <section>
            <H2>1. Information We Collect</H2>
            <p className="mb-3">
              We collect personal information only through the following means:
            </p>
            <div className="space-y-4">
              <div>
                <H3>1.1 Demo Booking (Google Calendar)</H3>
                <p>
                  When you book a free demo session via the embedded calendar widget, Google LLC
                  collects your <strong>name, email address, and selected time slot</strong> directly
                  on their infrastructure. We receive a copy of this booking through our linked
                  Google Calendar account. This data is used solely to confirm and manage your
                  appointment.
                </p>
              </div>
              <div>
                <H3>1.2 Direct Contact (Phone / WhatsApp / Instagram)</H3>
                <p>
                  If you contact us directly by phone, WhatsApp, or through our Instagram
                  (@dk_purefitness), any information you share (such as your name, phone number,
                  or fitness query) is used only to respond to your enquiry and is not stored in
                  any centralised database.
                </p>
              </div>
              <div>
                <H3>1.3 Website Analytics (Vercel)</H3>
                <p>
                  We use Vercel Analytics and Speed Insights to monitor website performance.
                  These services collect <strong>anonymised, non-personally-identifiable</strong> data
                  such as page views, device type, country-level location, and Core Web Vitals.
                  No cookies are set. No individual user is tracked or identified.
                </p>
              </div>
              <div>
                <H3>1.4 Browser Local Storage</H3>
                <p>
                  We store a single key (<code className="text-primary text-[10px]">dkpf_cookie_consent</code>)
                  in your browser's localStorage to record whether you have acknowledged our
                  privacy notice. This value is never transmitted to any server.
                </p>
              </div>
            </div>
            <p className="mt-3 italic">
              We do not knowingly collect personal data from children under 18 without verifiable
              parental consent.
            </p>
          </section>

          <section>
            <H2>2. How We Use Your Information</H2>
            <p>Personal data processed through our services is used exclusively for:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Confirming, managing, and sending reminders for demo bookings.</li>
              <li>Responding to direct enquiries made via phone, WhatsApp, or Instagram.</li>
              <li>Monitoring and improving website performance and user experience.</li>
            </ul>
            <p className="mt-2 font-medium text-primary">
              We do not send promotional emails, SMS blasts, newsletters, or any unsolicited
              marketing communications. We do not use your data for profiling or automated
              decision-making.
            </p>
          </section>

          <section>
            <H2>3. Third-Party Data Processors</H2>
            <p className="mb-3">
              We rely on the following third-party services, each bound by their own privacy
              commitments:
            </p>
            <div className="space-y-3">
              <p>
                <strong>Google LLC</strong> — Appointment scheduling and calendar management.
                Data processed: name, email, time slot.
                Governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">Google's Privacy Policy</a>.
              </p>
              <p>
                <strong>Vercel Inc.</strong> — Website hosting, deployment, and anonymised
                analytics.
                Governed by <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">Vercel's Privacy Policy</a>.
              </p>
              <p>
                <strong>Meta Platforms (Instagram)</strong> — If you contact or interact with us
                via Instagram, your interaction is subject to <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">Instagram's Privacy Policy</a>.
                We do not control data collected by Meta.
              </p>
            </div>
            <p className="mt-3">
              We do not sell, rent, share, or trade your personal data with any third party for
              commercial or marketing purposes.
            </p>
          </section>

          <section>
            <H2>4. Data Retention</H2>
            <p>
              Since we do not operate our own database, retention is governed by our third-party
              processors:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Google Calendar booking data</strong> is retained in our Google account for
                up to <strong>12 months</strong> after your appointment date, after which it is
                deleted. You may request earlier deletion by contacting us at {CONTACT_EMAIL}.
              </li>
              <li>
                <strong>Vercel analytics data</strong> is aggregated and anonymised; no individual
                data is retained beyond the platform's own rolling retention window.
              </li>
              <li>
                <strong>localStorage consent flag</strong> persists in your browser until you
                clear your browser data or we update the consent version.
              </li>
            </ul>
          </section>

          <section>
            <H2>5. Cookies &amp; Tracking</H2>
            <p>
              This website does <strong>not</strong> use advertising cookies, tracking pixels,
              or third-party cookie-based analytics. The only browser storage we write is the
              localStorage key described in Section 1.4 above. Vercel Analytics operates
              without cookies. You may clear your localStorage at any time through your
              browser's developer tools or privacy settings.
            </p>
          </section>

          <section>
            <H2>6. Data Security</H2>
            <p>
              All connections to this website are encrypted via HTTPS. Since we do not operate a
              backend database, there is no centralised personal data store that could be
              compromised. Booking data held in Google Calendar is protected by Google's
              enterprise-grade security infrastructure. We follow industry-standard practices to
              protect any direct communications we receive.
            </p>
          </section>

          <section>
            <H2>7. Your Rights</H2>
            <p>Under the Digital Personal Data Protection Act (DPDPA), 2023, you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Access</strong> — Request confirmation of whether we hold your personal data and obtain a copy.</li>
              <li><strong>Correction</strong> — Request correction of any inaccurate or incomplete data.</li>
              <li><strong>Erasure</strong> — Request deletion of your personal data, subject to legal retention obligations.</li>
              <li><strong>Withdraw Consent</strong> — Withdraw any consent previously given, without affecting the lawfulness of prior processing.</li>
              <li><strong>Grievance Redressal</strong> — Lodge a complaint with our Grievance Officer (see below) or escalate to the Data Protection Board of India once constituted.</li>
            </ul>
            <p className="mt-3">
              To exercise rights over booking data held by Google, you may also manage your information
              directly via your{' '}
              <a href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-2">
                Google Account
              </a>.
            </p>
          </section>

          <section>
            <H2>8. Changes to This Policy</H2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, services, or applicable law. The "Last Updated" date at the top of this
              page will be revised accordingly. We encourage you to review this Policy periodically.
              Continued use of our website or services after changes are posted constitutes
              acceptance of the revised Policy.
            </p>
          </section>

          <section>
            <div className="bg-secondary/30 border border-border p-4 space-y-2 mt-2">
              <H3>9. Grievance Officer</H3>
              <p className="text-xs mb-2">
                In accordance with the Information Technology Act, 2000 and the DPDPA, 2023,
                the contact details of our Grievance Officer are:
              </p>
              <p className="text-xs"><strong>Name:</strong> Deepak Kumar</p>
              <p className="text-xs"><strong>Designation:</strong> Founder &amp; Data Controller</p>
              <p className="text-xs"><strong>Email:</strong> {CONTACT_EMAIL}</p>
              <p className="text-xs"><strong>Address:</strong> {ADDRESS}</p>
              <p className="text-xs text-muted-foreground mt-2">
                We will acknowledge your grievance within 48 hours and endeavour to resolve it
                within 15 business days.
              </p>
            </div>
          </section>

        </div>
      </DialogContent>
    </Dialog>
  );
}
