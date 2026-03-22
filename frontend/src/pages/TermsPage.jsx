// src/pages/TermsPage.jsx
import { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function TermsPage({ navigate }) {
  useEffect(() => {
    document.title = "Terms of Service | FileConvert";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
      <Breadcrumb navigate={navigate} crumbs={[
        { label: "Home", path: "/" },
        { label: "Terms of Service" },
      ]} />

      <h1 className="font-extrabold text-slate-900 text-4xl mb-3">Terms of Service</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="space-y-8">

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">1. Acceptance of Terms</h2>
          <p className="text-slate-600 leading-relaxed">
            By accessing and using FileConvert ("the Service"), you accept and agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">2. Description of Service</h2>
          <p className="text-slate-600 leading-relaxed">
            FileConvert provides free online file conversion tools including PDF, Word, Excel, PowerPoint,
            and image conversions. The service is provided "as is" and is subject to change at any time.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">3. Acceptable Use</h2>
          <p className="text-slate-600 leading-relaxed mb-3">You agree NOT to use the service to:</p>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>Upload files containing malware, viruses, or malicious code</li>
            <li>Convert files that infringe on third-party intellectual property rights</li>
            <li>Attempt to overload, hack, or disrupt the service</li>
            <li>Use automated bots or scrapers without permission</li>
            <li>Upload illegal, harmful, or offensive content</li>
            <li>Upload files containing sensitive personal data of others</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">4. File Upload & Processing</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            <li>Maximum file size is 10 MB on the free plan</li>
            <li>Files are automatically deleted from our servers within 1 hour</li>
            <li>You retain full ownership of all files you upload</li>
            <li>We do not claim any rights over your uploaded or converted files</li>
            <li>You are responsible for ensuring you have the right to convert the files you upload</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">5. Free Service & Limitations</h2>
          <p className="text-slate-600 leading-relaxed">
            The service is provided free of charge and is supported by advertising. We reserve the right
            to impose rate limits (currently 10 conversions per minute per IP address) to ensure fair
            usage for all users. We reserve the right to modify or discontinue the free tier at any time.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">6. Disclaimer of Warranties</h2>
          <p className="text-slate-600 leading-relaxed">
            The service is provided "as is" without warranties of any kind. We do not guarantee that the
            service will be uninterrupted, error-free, or that converted files will be perfect. Conversion
            quality may vary depending on the complexity and format of the original file.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">7. Limitation of Liability</h2>
          <p className="text-slate-600 leading-relaxed">
            To the maximum extent permitted by law, FileConvert shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages resulting from your use of the service,
            including but not limited to loss of data or files.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">8. Intellectual Property</h2>
          <p className="text-slate-600 leading-relaxed">
            The FileConvert brand, website design, and software are the intellectual property of
            FileConvert. You may not copy, reproduce, or redistribute any part of our service without
            explicit written permission.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">9. Changes to Terms</h2>
          <p className="text-slate-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Continued use of the service after
            changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">10. Governing Law</h2>
          <p className="text-slate-600 leading-relaxed">
            These terms are governed by applicable law. Any disputes shall be resolved through binding
            arbitration or in courts of competent jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-slate-900 text-xl mb-3">11. Contact</h2>
          <p className="text-slate-600 leading-relaxed">
            For questions about these Terms of Service, contact us at:{" "}
            <a href="mailto:legal@fileconvert.io" className="text-blue-600 hover:underline">
              legal@fileconvert.io
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}