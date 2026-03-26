import Image from "next/image";
import logo from "../_constants/Images/Logos/AR PAY LOGO.svg"
export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      <div className="max-w-4xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src={logo}
            alt="AR Pay Logo"
            width={90}
            height={60}
            className="mb-4"
          />

          <h1 className="text-3xl font-bold text-gray-800">
            Terms & Conditions
          </h1>

          <p className="text-gray-500 text-center mt-2 max-w-xl">
            Please read these terms carefully before using the AR Pay platform.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-600 leading-relaxed">
            Please read the following Terms and Conditions carefully before
            registering, accessing, browsing, downloading, or using the AR Pay
            application. By accessing or using the application or services,
            you agree to be bound by these Terms and Conditions, including any
            future updates or modifications.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            If at any time you do not agree with these terms, you should not
            access or use the application and must immediately discontinue
            the use of the services.
          </p>
        </section>

        {/* Agreement */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            User Agreement
          </h2>

          <p className="text-gray-600 leading-relaxed">
            These Terms and Conditions constitute a legal agreement between
            you (the user) and AR Pay. By using our services, you confirm
            that you are at least 18 years of age and legally capable of
            entering into a binding agreement.
          </p>
        </section>

        {/* Service Ownership */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Platform Ownership
          </h2>

          <p className="text-gray-600 leading-relaxed">
            AR Pay is a digital platform providing payment and financial
            services. All rights, ownership, and operational control of
            the platform remain with AR Pay and its authorized operators.
          </p>
        </section>

        {/* Modifications */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Changes to Terms
          </h2>

          <p className="text-gray-600 leading-relaxed">
            AR Pay reserves the right to modify, update, or remove portions
            of these Terms and Conditions at any time without prior notice.
            Users are encouraged to review this page periodically to stay
            informed about updates.
          </p>
        </section>

        {/* Usage */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Acceptable Use
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Users must use AR Pay services only for lawful purposes.
            Any fraudulent, illegal, or unauthorized use of the platform
            may result in suspension or termination of access.
          </p>
        </section>

        {/* Contact */}
        <section className="border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Contact Information
          </h2>

          <p className="text-gray-600 mb-3">
            For questions regarding these Terms & Conditions, please contact us.
          </p>

          <div className="text-gray-700 space-y-1">
            <p>support@arpay.com</p>
            <p>Mumbai, India</p>
          </div>
        </section>

      </div>

    </div>
  );
}