import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">WorldAutoTrace Privacy Policy</h1>
      <p className="mb-6">
        At WorldAutoTrace, we are committed to protecting your privacy and ensuring the security of your personal information.
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services, including
        our website, mobile applications, and vehicle report services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>

        <h3 className="text-xl font-semibold mt-4">Personal Information</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Name, email address, phone number, and billing address.</li>
          <li>Vehicle Identification Number (VIN) or other vehicle details.</li>
          <li>Payment Information (e.g. credit card details) for processing transactions.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Non-Personal Information</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Browser type, IP address, device information, and operating system.</li>
          <li>Usage data, such as pages visited, time spent on the site, and clickstream data.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Cookies and Tracking Technologies</h3>
        <p className="ml-4">
          We use cookies and similar technologies to enhance your experience, analyze trends, and administer the website.
          You can control cookies through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside ml-4">
          <li>To provide, maintain, and improve our services.</li>
          <li>To process transactions and deliver vehicle reports.</li>
          <li>To communicate with you about your account, orders, or inquiries.</li>
          <li>To personalize your experience and provide relevant content.</li>
          <li>To detect, prevent, and address technical or fraudulent activities.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Service Providers:</strong> We may share data with trusted third-party vendors who assist in operating our website, processing payments, or delivering services.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights, property, or safety.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your information from unauthorized access, alteration,
          disclosure, or destruction. These measures include encryption, secure socket layer (SSL) technology, and regular security audits.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights and Choices</h2>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Access and Correction:</strong> You can request access to or correction of your personal data.</li>
          <li><strong>Opt-Out:</strong> You can opt out of receiving promotional emails by following the unsubscribe link in the email.</li>
          <li><strong>Data Deletion:</strong> You may request the deletion of your personal information, subject to legal obligations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites.
          We encourage you to review their privacy policies before providing any personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Children's Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children.
          If we become aware of such data, we will take steps to delete it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          We encourage you to review this policy periodically.
        </p>
      </section>
    </div>
  );
}