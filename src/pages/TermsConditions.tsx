
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Terms & Conditions</h1>
            <p className="text-xl text-slate-300">
              Last updated: January 2025
            </p>
          </div>

          <Card className="bg-slate-700/50 border-slate-600 max-w-4xl mx-auto">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-slate-300">
                  By accessing and using the services of Arthros Center, you agree to be bound by these Terms and Conditions. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Medical Services</h2>
                <div className="text-slate-300 space-y-3">
                  <p>Our medical services include:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Orthopedic consultations and treatments</li>
                    <li>• Surgical procedures and interventions</li>
                    <li>• Diagnostic services and imaging</li>
                    <li>• Rehabilitation and physical therapy</li>
                    <li>• Sports medicine and injury management</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Appointments and Scheduling</h2>
                <div className="text-slate-300 space-y-3">
                  <ul className="space-y-2">
                    <li>• Appointments must be scheduled in advance</li>
                    <li>• Cancellations should be made at least 24 hours in advance</li>
                    <li>• Late arrivals may result in rescheduling</li>
                    <li>• Emergency cases will be prioritized</li>
                    <li>• We reserve the right to reschedule appointments when necessary</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Payment and Insurance</h2>
                <div className="text-slate-300 space-y-3">
                  <ul className="space-y-2">
                    <li>• Payment is due at the time of service unless prior arrangements are made</li>
                    <li>• We accept cash, card payments, and insurance coverage</li>
                    <li>• Patients are responsible for understanding their insurance coverage</li>
                    <li>• Unpaid balances may be subject to collection procedures</li>
                    <li>• Financial assistance may be available for qualifying patients</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Patient Responsibilities</h2>
                <div className="text-slate-300 space-y-3">
                  <p>Patients are expected to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Provide accurate and complete medical information</li>
                    <li>• Follow prescribed treatment plans and instructions</li>
                    <li>• Attend scheduled appointments and follow-ups</li>
                    <li>• Treat staff and other patients with respect</li>
                    <li>• Report any changes in health status promptly</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-slate-300">
                  While we strive to provide the highest quality medical care, we cannot guarantee specific outcomes. 
                  Our liability is limited to the extent permitted by law. Medical treatments carry inherent risks, 
                  which will be discussed during consultations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Modifications to Terms</h2>
                <p className="text-slate-300">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on our website, 
                  and continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <div className="text-slate-300 space-y-3">
                  <p>For questions about these Terms and Conditions, please contact us:</p>
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

export default TermsConditions;
