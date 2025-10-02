export default function TermsOfService() {
  return (
    <main className="mt-24 max-w-4xl mx-auto py-12 px-6 text-gray-800">
      <h1 className="underline text-4xl font-bold mb-8 text-center text-slate-900">
        Terms of Service
      </h1>

      <p className="mb-6 text-gray-600 leading-relaxed text-lg text-center">
        Welcome to <span className="font-semibold">NeedProduct</span>. These Terms of Service outline the rules, guidelines, and responsibilities for using our e-commerce platform.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Account Registration</h2>
        <p className="text-gray-600 leading-relaxed">
          Users must register an account to place orders. You agree to provide accurate information and keep your account credentials confidential.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Orders and Payment</h2>
        <p className="text-gray-600 leading-relaxed">
          By placing an order, you agree to pay the full price of the items, including taxes and shipping charges. Payments are securely processed through trusted third-party gateways.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Shipping & Delivery</h2>
        <p className="text-gray-600 leading-relaxed">
          Orders are delivered according to the selected shipping method. Estimated delivery times are provided, but delays may occur due to unforeseen circumstances.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Returns & Refunds</h2>
        <p className="text-gray-600 leading-relaxed">
          We offer refunds or replacements for damaged or incorrect items. Requests must be made within a specific period and in accordance with our return policy.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. User Conduct</h2>
        <p className="text-gray-600 leading-relaxed">
          Users agree not to misuse the platform, post illegal content, or infringe on any third-party rights. Violations may result in account suspension or termination.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed">
          NeedProduct is not liable for indirect, incidental, or consequential damages arising from the use of the platform. Full terms and legal limitations apply.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. Changes to Terms</h2>
        <p className="text-gray-600 leading-relaxed">
          We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
        <p className="text-gray-600 leading-relaxed">
          For any questions regarding these Terms, please contact us at:  
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
