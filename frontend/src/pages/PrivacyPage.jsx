// src/pages/PrivacyPage.jsx
import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function PrivacyPage({ navigate }) {
  useEffect(() => {
    document.title = "Privacy Policy | FileConvert";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
      <Breadcrumb navigate={navigate} crumbs={[
        { label: "Home", path: "/" },
        { label: "Privacy Policy" },
      ]} />

      <h1 className="font-extrabold text-slate-900 text-4xl mb-3">Privacy Policy</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="prose prose-slate max-w-none space-y-8">

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">1. Introduction</h2>
          <p className="text-slate-600 leading-relaxed">
            Welcome to FileConvert ("we", "our", or "us"). We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our file conversion service at{" "}
            <strong>file-converters.vercel.app</strong>.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">2. Information We Collect</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            We collect minimal information to provide our service:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li><strong>Uploaded files:</strong> Files you upload for conversion are processed on our servers and automatically deleted within 1 hour.</li>
            <li><strong>Usage data:</strong> We collect anonymous usage statistics (pages visited, tools used) via Google Analytics to improve our service.</li>
            <li><strong>Log data:</strong> Standard server logs including IP address, browser type, and request timestamps are retained for security purposes.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>To process and convert your files</li>
            <li>To improve our service and user experience</li>
            <li>To monitor for abuse or security threats</li>
            <li>To display relevant advertisements via Google AdSense</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">4. File Security & Deletion</h2>
          <p className="text-slate-600 leading-relaxed">
            All uploaded files are processed on secure servers using SSL/TLS encryption. Files are
            <strong> automatically deleted from our servers within 1 hour</strong> of upload. We do not
            store, read, or share the content of your files. We do not retain copies of converted files.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">5. Cookies & Advertising</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            We use the following third-party services which may set cookies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li><strong>Google Analytics:</strong> Collects anonymous usage data to help us understand how visitors use our site.</li>
            <li><strong>Google AdSense:</strong> Displays advertisements. Google may use cookies to serve ads based on your interests.</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mt-3">
            You can opt out of Google Analytics by installing the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Google Analytics opt-out browser add-on
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">6. Third-Party Services</h2>
          <p className="text-slate-600 leading-relaxed">
            Our service is hosted on Vercel (frontend) and Railway (backend). These providers may collect
            standard server logs. Please review their respective privacy policies for more information.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">7. Your Rights (GDPR)</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            If you are located in the European Economic Area, you have the following rights:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate data</li>
            <li>The right to erasure ("right to be forgotten")</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">8. Children's Privacy</h2>
          <p className="text-slate-600 leading-relaxed">
            Our service is not directed to children under 13 years of age. We do not knowingly collect
            personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">9. Changes to This Policy</h2>
          <p className="text-slate-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new policy on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">10. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:privacy@fileconvert.io" className="text-blue-600 hover:underline">
              privacy@fileconvert.io
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}