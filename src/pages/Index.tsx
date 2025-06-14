
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DoctorProfile from "@/components/DoctorProfile";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Hero />
      <Services />
      <DoctorProfile />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
