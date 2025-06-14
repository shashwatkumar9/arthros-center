
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const KneeSurgeries = () => {
  const procedures = [
    {
      title: "ACL Reconstruction",
      description: "Advanced ACL reconstruction surgery in Patna using state-of-the-art techniques",
      slug: "acl-reconstruction"
    },
    {
      title: "ACL Repair", 
      description: "Minimally invasive ACL repair procedures for faster recovery",
      slug: "acl-repair"
    },
    {
      title: "Revision ACL Surgery",
      description: "Specialized revision ACL surgery for failed primary reconstructions",
      slug: "revision-acl-surgery"
    },
    {
      title: "ACL with Meniscus Repair",
      description: "Combined ACL and meniscus repair surgery in one procedure",
      slug: "acl-with-meniscus-repair"
    },
    {
      title: "PCL Reconstruction",
      description: "Expert PCL reconstruction surgery using advanced techniques",
      slug: "pcl-reconstruction"
    },
    {
      title: "MCL Reconstruction",
      description: "Comprehensive MCL reconstruction for knee stability",
      slug: "mcl-reconstruction"
    },
    {
      title: "Multi-ligament Reconstruction",
      description: "Complex multi-ligament knee reconstruction surgery",
      slug: "multi-ligament-reconstruction"
    },
    {
      title: "Posterolateral Corner Repair",
      description: "Specialized posterolateral corner repair for complete knee stability",
      slug: "posterolateral-corner-repair"
    },
    {
      title: "Meniscus Repair",
      description: "Arthroscopic meniscus repair to preserve knee function",
      slug: "meniscus-repair"
    },
    {
      title: "Knee Replacement",
      description: "Total and partial knee replacement surgery in Patna",
      slug: "knee-replacement"
    },
    {
      title: "Patella Stabilization",
      description: "Patella stabilization surgery for recurrent dislocations",
      slug: "patella-stabilization"
    },
    {
      title: "Cartilage Restoration",
      description: "Advanced cartilage restoration techniques for knee joint preservation",
      slug: "cartilage-restoration"
    }
  ];

  return (
    <>
      <title>Knee Surgeries in Patna, India | ACL Reconstruction | Arthros Center</title>
      <meta name="description" content="Expert knee surgeries in Patna, India. ACL reconstruction, meniscus repair, knee replacement by experienced orthopedic surgeons. Book appointment today." />
      <meta name="keywords" content="knee surgery Patna, ACL reconstruction India, knee replacement Patna, meniscus repair India, orthopedic surgeon Patna" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Knee Surgeries in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Expert knee surgery procedures including ACL reconstruction, meniscus repair, and knee replacement 
              performed by experienced orthopedic surgeons in Patna, India.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {procedures.map((procedure, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{procedure.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {procedure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                    onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Arthros Center for Knee Surgery?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Expert Surgeons</h3>
                <p className="text-slate-300">
                  Our orthopedic surgeons specialize in knee surgeries with years of experience in ACL reconstruction, 
                  meniscus repair, and complex knee procedures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Technology</h3>
                <p className="text-slate-300">
                  State-of-the-art equipment and minimally invasive techniques for better outcomes and faster recovery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Comprehensive Care</h3>
                <p className="text-slate-300">
                  From diagnosis to rehabilitation, we provide complete care for all knee conditions and injuries.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Located in Patna</h3>
                <p className="text-slate-300">
                  Conveniently located in Patna, serving patients across Bihar and eastern India.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default KneeSurgeries;
