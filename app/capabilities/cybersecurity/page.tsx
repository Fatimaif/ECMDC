import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CybersecurityPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
          CYBERSECURITY
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl">
          Protect your organization from evolving cyber threats with our comprehensive cybersecurity solutions. We provide end-to-end security services that safeguard your critical assets, ensure compliance, and build resilience against sophisticated attacks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Security Assessment</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conduct comprehensive security audits and vulnerability assessments to identify risks and strengthen your security posture across all systems and networks.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Vulnerability Scanning</li>
              <li>• Penetration Testing</li>
              <li>• Risk Assessment</li>
              <li>• Security Audits</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Threat Detection & Response</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implement advanced threat detection systems and incident response capabilities to identify, contain, and neutralize security threats in real-time.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• 24/7 Security Monitoring</li>
              <li>• Incident Response</li>
              <li>• Threat Intelligence</li>
              <li>• SIEM Solutions</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Compliance & Governance</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ensure regulatory compliance and establish robust security governance frameworks that align with industry standards and best practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Regulatory Compliance</li>
              <li>• Policy Development</li>
              <li>• Security Frameworks</li>
              <li>• Compliance Auditing</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-light text-black mb-4">Identity & Access Management</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Secure user identities and control access to critical resources with advanced authentication and authorization solutions.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Multi-Factor Authentication</li>
              <li>• Zero Trust Architecture</li>
              <li>• Privileged Access Management</li>
              <li>• Identity Governance</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-12 text-white" style={{ backgroundColor: '#193362' }}>
          <h2 className="text-3xl font-light mb-4">Strengthen Your Security Posture</h2>
          <p className="text-lg mb-6 opacity-90">
            Protect your organization from cyber threats with our comprehensive security solutions. Schedule a consultation to assess your security needs.
          </p>
          <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ color: '#193362' }}>
            Contact Us
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CybersecurityPage;
