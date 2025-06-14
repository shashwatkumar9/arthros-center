
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-300">
              Last updated: January 2025
            </p>
          </div>

          <Card className="bg-slate-700/50 border-slate-600 max-w-4xl mx-auto">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <div className="text-slate-300 space-y-3">
                  <p>At Arthros Center, we collect the following types of information:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Personal identification information (name, email address, phone number)</li>
                    <li>• Medical history and health information relevant to your treatment</li>
                    <li>• Insurance information and payment details</li>
                    <li>• Appointment scheduling information</li>
                    <li>• Website usage data and cookies</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <div className="text-slate-300 space-y-3">
                  <p>We use your information for the following purposes:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Providing medical care and treatment services</li>
                    <li>• Scheduling and managing appointments</li>
                    <li>• Processing payments and insurance claims</li>
                    <li>• Communicating about your care and treatment</li>
                    <li>• Improving our services and website functionality</li>
                    <li>• Complying with legal and regulatory requirements</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                <div className="text-slate-300 space-y-3">
                  <p>We may share your information with:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Healthcare providers involved in your care</li>
                    <li>• Insurance companies for billing and claims processing</li>
                    <li>• Laboratory and diagnostic services</li>
                    <li>• Legal authorities when required by law</li>
                    <li>• Trusted third-party service providers (with appropriate safeguards)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <div className="text-slate-300 space-y-3">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Secure data storage and transmission</li>
                    <li>• Access controls and authentication</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Staff training on data protection</li>
                    <li>• Compliance with healthcare privacy regulations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <div className="text-slate-300 space-y-3">
                  <p>You have the right to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Access and review your personal information</li>
                    <li>• Request corrections to inaccurate information</li>
                    <li>• Request deletion of your data (subject to legal requirements)</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• File complaints about our privacy practices</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <div className="text-slate-300 space-y-3">
                  <p>For questions about this Privacy Policy, please contact us:</p>
                  <div className="space-y-2">
                    <p>Arthros Center</p>
                    <p>251 A Patliputra Colony, Patna, Bihar, India</p>
                    <p>Phone: +91 7258065424</p>
                    <p>Email: gurudeok@gmail.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
