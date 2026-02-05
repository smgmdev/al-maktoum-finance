import PageLayout from "@/components/layout/PageLayout";

const TermsAndConditions = () => {
  return (
    <PageLayout>
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Last updated: February 2026</p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
            <p>
              These Terms and Conditions ("Terms") govern your access to and use of the website and all related services operated by AbdulHakim AlMaktoum Kanak Financial Brokerage LLC ("Al Maktoum Finance," "we," "us," or "our").
            </p>
            <p>
              By accessing or using our Website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with these Terms, do not use the Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">2. Use of the Website</h2>
            <p>
              You agree to use the Website for lawful purposes only and in a way that does not infringe on the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Upload or transmit any material that is harmful, threatening, abusive, defamatory, or otherwise objectionable</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              <li>Attempt to interfere with the proper working of the Website or compromise its security</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">3. Eligibility</h2>
            <p>You represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are at least 18 years of age or the age of legal majority in your jurisdiction</li>
              <li>You have the legal capacity and authority to enter into these Terms</li>
              <li>You will use the Website in compliance with these Terms and all applicable laws</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">4. Intellectual Property</h2>
            <p>
              All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of Al Maktoum Finance or its licensors and is protected by intellectual property laws.
            </p>
            <p>
              You may not copy, reproduce, distribute, modify, or create derivative works from any part of the Website without prior written consent from Al Maktoum Finance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">5. Third-Party Links</h2>
            <p>
              The Website may contain links to third-party websites or services that are not owned or controlled by Al Maktoum Finance. We are not responsible for the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p>
              You acknowledge and agree that Al Maktoum Finance shall not be responsible or liable for any damage or loss caused by your use of any such content, goods, or services available through any third-party websites or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">6. Account Registration and Security</h2>
            <p>To access certain features of our services, you may be required to register for an account. When registering, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept all risks of unauthorized access to your account and any activity under your account</li>
            </ul>
            <p>You are solely responsible for any activity conducted under your account.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">7. Prohibited Conduct</h2>
            <p>You agree not to use the services to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any law, regulation, or contractual obligation</li>
              <li>Infringe intellectual property rights</li>
              <li>Distribute viruses, worms, defects, Trojan horses, or any items of a destructive nature</li>
              <li>Engage in conduct that could damage, disable, overburden, or impair the functioning of the services</li>
              <li>Use any automated system, including "robots," "spiders," or "offline readers," without prior written consent</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">8. Disclaimers</h2>
            <p>
              The Website and services are provided on an "as is" and "as available" basis. Al Maktoum Finance expressly disclaims all warranties of any kind, whether express or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>That the Website or services will be uninterrupted, secure, or error-free</li>
              <li>That any content is accurate, reliable, or complete</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Al Maktoum Finance shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
              <li>Resulting from (i) your access to or use of the services; (ii) any conduct or content of any third party; (iii) unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@almaktoumfinance.com
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsAndConditions;
