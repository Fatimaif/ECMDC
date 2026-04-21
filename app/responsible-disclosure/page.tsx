import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResponsibleDisclosurePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl font-light text-gray-900 mb-4">Responsible Disclosure</h1>
        <p className="text-gray-600 mb-12">Security Vulnerability Reporting Policy</p>

        <div className="space-y-10 text-gray-800">
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Our Commitment to Security</h2>
            <p className="leading-relaxed">
              At ECMDC, we take the security of our systems seriously, and we value the security community. The disclosure of security vulnerabilities helps us ensure the security and privacy of our users. If you believe you've found a security vulnerability in our service, we encourage you to notify us using the guidelines below.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Guidelines for Reporting</h2>
            <p className="leading-relaxed mb-4">We ask that:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>You give us reasonable time to investigate and mitigate an issue you report before making public any information about the report or sharing such information with others</li>
              <li>You do not interact with an individual account (which includes modifying or accessing data from the account) if the account owner has not consented to such actions</li>
              <li>You make a good faith effort to avoid privacy violations and disruptions to others, including (but not limited to) unauthorized access to or destruction of data, and interruption or degradation of our services</li>
              <li>You do not exploit a security issue you discover for any reason (This includes demonstrating additional risk, such as attempted compromise of sensitive company data or probing for additional issues)</li>
              <li>You do not violate any other applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">What We Promise</h2>
            <p className="leading-relaxed mb-4">If you submit a report through our responsible disclosure program and follow the guidelines:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>We will respond to your report within 5 business days with our evaluation of the report and an expected resolution date</li>
              <li>We will handle your report with strict confidentiality, and not pass on your personal details to third parties without your permission</li>
              <li>We will keep you informed of the progress towards resolving the problem</li>
              <li>In public disclosures concerning the problem reported, we will give your name as the discoverer of the problem (unless you desire otherwise)</li>
              <li>We will not take legal action against you or request law enforcement to investigate you provided you comply with these guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Scope</h2>
            <p className="leading-relaxed mb-4">This policy applies to the following systems and services:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>ecmdc.com and all subdomains</li>
              <li>ECMDC mobile applications (iOS and Android)</li>
              <li>ECMDC APIs and web services</li>
              <li>Any other services explicitly marked as in-scope</li>
            </ul>
            <p className="leading-relaxed mt-4">
              The following are explicitly out of scope: Social engineering attacks, Physical attacks against ECMDC offices or data centers, Denial of Service (DoS/DDoS) attacks.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">How to Report a Security Vulnerability</h2>
            <p className="leading-relaxed mb-4">
              If you believe you've found a security vulnerability in our service, please send it to us by emailing our security team. Please include the following details with your report:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Description of the location and potential impact of the vulnerability</li>
              <li>A detailed description of the steps required to reproduce the vulnerability (POC scripts, screenshots, and compressed screen captures are all helpful)</li>
              <li>Your name/handle and a link for recognition in our acknowledgments page</li>
            </ul>

            <div className="mt-6 p-8 rounded-3xl" style={{ backgroundColor: '#193362' }}>
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-white">
                <p><strong>Email:</strong> security@ecmdc.com</p>
                <p><strong>PGP Key:</strong> Available upon request</p>
                <p><strong>Response Time:</strong> Within 5 business days</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Safe Harbor</h2>
            <p className="leading-relaxed">
              Any activities conducted in a manner consistent with this policy will be considered authorized conduct and we will not initiate legal action against you. If legal action is initiated by a third party against you in connection with activities conducted under this policy, we will take steps to make it known that your actions were conducted in compliance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Recognition</h2>
            <p className="leading-relaxed">
              We recognize and appreciate the valuable contributions of security researchers who help keep ECMDC and our users safe. Researchers who responsibly disclose valid vulnerabilities may be recognized on our Security Hall of Fame page (with their permission).
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Questions</h2>
            <p className="leading-relaxed">
              If you have questions about this policy or how to submit a vulnerability report, please contact us at security@ecmdc.com.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResponsibleDisclosurePage;
