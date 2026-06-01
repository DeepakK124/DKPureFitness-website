import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const gymName = "DK Pure Fitness";
const websiteUrl = "dkpurefitness.com";
const contactEmail = "support@dkpurefitness.com";
const address = "8JCG+F7V, Laxma Reddy Palem Colony, Hyderabad, Telangana 501513";
const effectiveDate = "June 1, 2026";

export function TermsDialog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#0A0A0B] border-white/10 text-[#9CA3AF] p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="font-display text-xl md:text-2xl text-[#F3F4F6] uppercase">Terms & Conditions</DialogTitle>
          <p className="font-mono text-[10px] tracking-widest text-[#F97316]">EFFECTIVE DATE: {effectiveDate}</p>
        </DialogHeader>
        
        <div className="space-y-6 md:space-y-8 font-body leading-relaxed text-xs md:text-sm mt-4">
          <section>
            <p>
              These Terms and Conditions ("Terms") govern your use of the {gymName} website ({websiteUrl}),
              membership services, and physical gym facilities. By accessing our site or facilities, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-[#F3F4F6] text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-white/5 pb-1">1. Health & Medical Disclaimer</h2>
            <p className="text-[#F97316]"><strong>The content on this website (including workouts, nutrition, and transformation stories) is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</strong></p>
            <p className="mt-2">Always consult a physician before beginning any new fitness or nutrition program. Individual results vary, and {gymName} does not guarantee specific outcomes such as weight loss or muscle gain.</p>
          </section>

          <section>
            <h2 className="text-[#F3F4F6] text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-white/5 pb-1">2. Membership & Registration</h2>
            <div className="space-y-3">
              <p><strong>2.1 Eligibility:</strong> Membership is open to individuals aged 16 and above.</p>
              <p><strong>2.2 Acceptance:</strong> {gymName} reserves the right to refuse membership to anyone violating these terms or gym policies.</p>
            </div>
          </section>

          <section>
            <h2 className="text-[#F3F4F6] text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-white/5 pb-1">3. Content Ownership & Acceptable Use</h2>
            <p>All logos, trademarks, images, and content on this website are the property of {gymName} or its licensors. You may not copy, distribute, or use this content without explicit written permission. You agree not to use the website for any unlawful purpose or to submit false/spam inquiries.</p>
          </section>

          <section>
            <h2 className="text-[#F3F4F6] text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-white/5 pb-1">4. Limitation of Liability</h2>
            <p>To the maximum extent permitted by Indian law, {gymName} shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the website or participation in gym activities. You participate in physical activities at your own risk.</p>
          </section>

          <section>
            <h2 className="text-[#F3F4F6] text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-white/5 pb-1">5. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.</p>
          </section>

          <section>
            <div className="bg-[#111113] border border-white/5 p-4 space-y-2 mt-6">
              <h3 className="text-[#F3F4F6] font-display text-sm uppercase">Contact Information</h3>
              <p className="text-xs">Email: {contactEmail}</p>
              <p className="text-xs">Address: {address}</p>
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
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#0A0A0B] border-white/10 text-[#9CA3AF] p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="font-display text-xl md:text-2xl text-[#F3F4F6] uppercase">Privacy Policy</DialogTitle>
          <p className="font-mono text-[10px] tracking-widest text-[#F97316]">LAST UPDATED: {effectiveDate}</p>
        </DialogHeader>
        
        <div className="space-y-6 md:space-y-8 font-body leading-relaxed text-xs md:text-sm mt-4">
          <section>
            <p>
              At {gymName}, we respect your privacy and are committed to protecting your personal data in compliance with the Digital Personal Data Protection Act (DPDPA) and the Information Technology Rules of India.
            </p>
          </section>

          <section>
            <h2 className="text-[#F3F4F6] text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-white/5 pb-1">1. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when using our contact forms, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Details of your inquiry (Interest/Message)</li>
            </ul>
            <p className="mt-2 text-xs italic">Note: We do not knowingly collect personal data from minors under 18 without parental consent.</p>
          </section>

          <section>
            <h2 className="text-[#F3F4F6] text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-white/5 pb-1">2. Purpose of Collection</h2>
            <p>Your data is collected strictly for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To respond to your specific inquiries and membership requests.</li>
              <li>To send promotional material and fitness updates, <strong>only if you have provided explicit consent</strong>.</li>
              <li>To improve our website analytics and user experience via necessary cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#F3F4F6] text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-white/5 pb-1">3. Data Sharing & Security</h2>
            <p>We do not sell your personal data. Data may be shared with trusted third-party service providers (e.g., secure hosting or email dispatchers) who are bound by confidentiality agreements. We implement industry-standard security practices, including HTTPS encryption, to protect your data from unauthorized access.</p>
          </section>

          <section>
            <h2 className="text-[#F3F4F6] text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase tracking-wider border-b border-white/5 pb-1">4. Your Rights (Withdrawal of Consent)</h2>
            <p>You have the right to request access to, correction of, or erasure of your personal data. If you have opted into marketing communications, you may withdraw your consent at any time by clicking "unsubscribe" in our emails or contacting our Grievance Officer.</p>
          </section>

          <section>
            <div className="bg-[#111113] border border-white/5 p-4 space-y-2 mt-6">
              <h3 className="text-[#F3F4F6] font-display text-sm uppercase">5. Grievance Officer</h3>
              <p className="text-xs mb-2">In accordance with the Information Technology Act, 2000, and rules made thereunder, the name and contact details of the Grievance Officer are provided below:</p>
              <p className="text-xs"><strong>Name:</strong> Deepak Kumar</p>
              <p className="text-xs"><strong>Email:</strong> {contactEmail}</p>
              <p className="text-xs"><strong>Address:</strong> {address}</p>
              <p className="text-xs text-muted-foreground mt-2">We will acknowledge your grievance within 24 hours and resolve it within 15 days.</p>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}