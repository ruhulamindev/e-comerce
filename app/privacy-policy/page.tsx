export default function PrivacyPolicy() {
  return (
    <main className="mt-24 max-w-4xl mx-auto py-12 px-6 text-gray-800">
      <h1 className="underline text-4xl font-bold mb-8 text-center text-slate-900">
        Privacy Policy
      </h1>

      <p className="mb-6 text-gray-600 leading-relaxed text-lg text-center">
        At <span className="font-semibold">NeedProduct</span>, we respect your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how we
        collect, use, and safeguard your data when you use our e-commerce platform.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
          <li>Personal details (name, email, phone number, address)</li>
          <li>Payment details (processed securely through third-party gateways)</li>
          <li>Browsing activity, device information, and cookies</li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-600 leading-relaxed">
          We use your data to:
        </p>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 mt-2">
          <li>Process and deliver your orders</li>
          <li>Provide customer support and resolve issues</li>
          <li>Improve our website, products, and services</li>
          <li>Send promotional offers, discounts, and updates (if you opt-in)</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Data Protection & Security</h2>
        <p className="text-gray-600 leading-relaxed">
          We implement industry-standard security measures to safeguard your data.
          Your payment information is always processed through secure, encrypted
          gateways and never stored on our servers.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Sharing Your Information</h2>
        <p className="text-gray-600 leading-relaxed">
          We do not sell or rent your personal information to third parties. 
          However, we may share it with trusted service providers (like payment 
          gateways, shipping partners) necessary to complete your orders.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p className="text-gray-600 leading-relaxed">
          You have the right to access, update, or request deletion of your personal 
          data. If you wish to exercise these rights, please contact us at{" "}
          <span className="font-semibold">needproduct.support@gmail.com</span>.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Changes to This Policy</h2>
        <p className="text-gray-600 leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will be 
          posted on this page with an updated "Last Updated" date.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
        <p className="text-gray-600 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at:  
          <br />
          <span className="font-semibold">Email:</span> needproduct.support@gmail.com  
          <br />
          <span className="font-semibold">Phone:</span> +880 1782-####  
        </p>
      </section>

      <p className="mt-12 text-sm text-gray-500 text-center">
        Last Updated: January 2025
      </p>
    </main>
  );
}
