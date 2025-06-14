
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PCLMultiLigament = () => {
  const procedures = [
    {
      title: "PCL Reconstruction",
      description: "Advanced PCL reconstruction surgery for posterior cruciate ligament injuries with specialized techniques",
      slug: "/pcl-reconstruction"
    },
    {
      title: "MCL Reconstruction", 
      description: "Medial collateral ligament reconstruction for comprehensive knee stability restoration",
      slug: "/mcl-reconstruction"
    },
    {
      title: "Multi-ligament Reconstruction",
      description: "Complex multi-ligament knee reconstruction for severe knee injuries involving multiple structures",
      slug: "/multi-ligament-reconstruction"
    },
    {
      title: "Posterolateral Corner Repair",
      description: "Specialized posterolateral corner repair for complete knee stability and function",
      slug: "/posterolateral-corner-repair"
    }
  ];

  return (
    <>
      <title>PCL & Multi-ligament Surgery in Patna | PCL Reconstruction India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert PCL and multi-ligament surgery in Patna by Dr. Gurudeo Kumar. PCL reconstruction, MCL repair, complex multi-ligament procedures. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="PCL reconstruction Patna, multi-ligament surgery India, MCL reconstruction Patna, Dr Gurudeo Kumar, PCL surgery Bengal, PCL Nepal" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              PCL & Multi-ligament Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive PCL and multi-ligament reconstruction procedures by Dr. Gurudeo Kumar and his expert team. Advanced techniques for complex knee injuries.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Appointment
            </Button>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/22a9001a-0766-4a86-b778-f8bdbe313c26.png" 
              alt="Dr. Gurudeo Kumar performing PCL and multi-ligament surgery at Arthros Center Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {procedures.map((procedure, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{procedure.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base">
                    {procedure.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <Link to={procedure.slug} className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                    >
                      View Procedure Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">PCL & Multi-ligament Surgery Excellence</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                PCL and multi-ligament injuries represent some of the most complex knee problems in orthopedic surgery, requiring specialized expertise and advanced surgical techniques. At Arthros Center in Patna, Dr. Gurudeo Kumar provides comprehensive care for these challenging cases, serving patients from across India, Bengal, North East regions, and Nepal. These injuries often result from high-energy trauma such as motor vehicle accidents or severe sports injuries, and successful treatment requires meticulous surgical planning and execution.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                The posterior cruciate ligament (PCL) is the strongest ligament in the knee, providing crucial stability during knee flexion and preventing posterior translation of the tibia. PCL injuries are less common than <a href="/acl-procedures" className="text-cyan-400 hover:text-cyan-300">ACL injuries</a> but often more complex to treat due to the ligament's anatomical position and healing characteristics. Dr. Gurudeo Kumar's approach to PCL reconstruction utilizes the latest surgical techniques and graft materials to restore optimal knee function and stability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Techniques</h3>
                <p className="text-slate-300">
                  State-of-the-art surgical methods for PCL reconstruction and complex multi-ligament procedures with optimal outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Complex Case Management</h3>
                <p className="text-slate-300">
                  Specialized expertise in handling the most challenging multi-ligament knee injuries with comprehensive reconstruction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Comprehensive Rehabilitation</h3>
                <p className="text-slate-300">
                  Specialized recovery programs designed for complex ligament reconstructions with dedicated support throughout healing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Expertise</h3>
                <p className="text-slate-300">
                  Leading center for complex knee surgery serving Patna, Bengal, North East India, and Nepal with world-class care.
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

export default PCLMultiLigament;
