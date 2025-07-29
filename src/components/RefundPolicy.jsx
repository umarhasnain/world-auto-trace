export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">WorldAutoTrace Refund Policy</h1>
      <p className="mb-6">
        At WorldAutoTrace, we strive to provide accurate and comprehensive vehicle reports to help you make informed
        decisions. However, we understand that there may be circumstances where you may request a refund. Please
        review our refund policy below:
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Eligibility for Refunds</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            The vehicle report contains significant errors or inaccuracies that were not disclosed at the time of
            purchase.
          </li>
          <li>The report was not delivered to you after successful payment.</li>
          <li>You accidentally purchased the wrong report (e.g., incorrect VIN or vehicle details).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Non-Refundable Situations</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>If you change your mind after purchasing the report.</li>
          <li>If the vehicle report meets the described standards but does not align with your expectations.</li>
          <li>If the report was accessed, downloaded, or viewed.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. How to Request a Refund</h2>
        <p className="mb-2">
          To request a refund, please contact our customer support team within <strong>7 days</strong> of your purchase.
        </p>
        <p className="mb-2">
          Provide your order number, the reason for the request, and any supporting evidence (e.g., proof of inaccuracies
          in the report).
        </p>
        <p className="mb-2">
          Refund requests can be submitted via email at <strong>support@vehiclescrafter.com</strong> or through our
          website’s contact form.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Refund Processing</h2>
        <p className="mb-2">
          Once your refund request is received and approved, we will process the refund within <strong>5-7 business
          days</strong>.
        </p>
        <p>Refunds will be issued to the original payment method used during the purchase.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. Disputes and Further Assistance</h2>
        <p className="mb-2">
          If you are dissatisfied with the resolution of your refund request, please reach out to us for further
          assistance. We are committed to ensuring your satisfaction.
        </p>
        <p className="text-sm text-gray-600">
          Note: This policy is subject to change without prior notice. Please review the policy periodically for updates.
        </p>
      </section>
    </div>
  );
}