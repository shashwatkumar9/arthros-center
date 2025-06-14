import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const KneeSurgeries = () => {
  const aclProcedures = [
    {
      title: "ACL Reconstruction",
      description: "Advanced ACL reconstruction surgery using state-of-the-art techniques for complete knee stability",
      slug: "/acl-reconstruction"
    },
    {
      title: "ACL Repair", 
      description: "Minimally invasive ACL repair procedures for faster recovery and optimal outcomes",
      slug: "/acl-repair"
    },
    {
      title: "Revision ACL Surgery",
      description: "Specialized revision ACL surgery for failed primary reconstructions with expert care",
      slug: "/revision-acl-surgery"
    },
    {
      title: "ACL with Meniscus Repair",
      description: "Combined ACL and meniscus repair surgery in one comprehensive procedure",
      slug: "/acl-with-meniscus-repair"
    }
  ];

  const pclMultiLigament = [
    {
      title: "PCL Reconstruction",
      description: "Expert PCL reconstruction surgery using advanced surgical techniques",
      slug: "/pcl-reconstruction"
    },
    {
      title: "MCL Reconstruction",
      description: "Comprehensive MCL reconstruction for complete knee stability and function",
      slug: "/mcl-reconstruction"
    },
    {
      title: "Multi-ligament Reconstruction",
      description: "Complex multi-ligament knee reconstruction surgery for severe injuries",
      slug: "/multi-ligament-reconstruction"
    },
    {
      title: "Posterolateral Corner Repair",
      description: "Specialized posterolateral corner repair for complete knee stability",
      slug: "/posterolateral-corner-repair"
    }
  ];

  const otherKneeProcedures = [
    {
      title: "Meniscus Repair",
      description: "Arthroscopic meniscus repair to preserve knee function and prevent arthritis",
      slug: "/meniscus-repair"
    },
    {
      title: "Knee Replacement",
      description: "Total and partial knee replacement surgery with modern implants",
      slug: "/knee-replacement"
    },
    {
      title: "Patella Stabilization",
      description: "Patella stabilization surgery for recurrent kneecap dislocations",
      slug: "/patella-stabilization"
    },
    {
      title: "Cartilage Restoration",
      description: "Advanced cartilage restoration techniques for knee joint preservation",
      slug: "/cartilage-restoration"
    }
  ];

  return (
    <>
      <title>Knee Surgeries in Patna, India | ACL Reconstruction | Dr. Gurudeo Kumar | Arthros Center</title>
      <meta name="description" content="Expert knee surgeries in Patna, India by Dr. Gurudeo Kumar. ACL reconstruction, meniscus repair, knee replacement. Serving Bengal, North East, Nepal patients." />
      <meta name="keywords" content="knee surgery Patna, ACL reconstruction India, knee replacement Patna, Dr Gurudeo Kumar, orthopedic surgeon Patna, knee surgery Bengal, knee surgery Nepal" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Knee Surgeries in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Expert knee surgery procedures by Dr. Gurudeo Kumar and his experienced team. Serving patients from Patna, Bengal, North East India, and Nepal with world-class orthopedic care.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Appointment
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/22a9001a-0766-4a86-b778-f8bdbe313c26.png" 
              alt="Dr. Gurudeo Kumar performing knee surgery at Arthros Center Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <div className="prose prose-lg max-w-none text-slate-300">
              <p className="text-lg leading-relaxed mb-6">
                At Arthros Center in Patna, Dr. Gurudeo Kumar and his expert team provide comprehensive knee surgery solutions for patients across India, with specialized care for those traveling from Bengal, North East India, and Nepal. Our state-of-the-art facility combines advanced surgical techniques with personalized patient care to ensure optimal outcomes for every knee condition.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Knee injuries and conditions can significantly impact your quality of life, affecting mobility, sports performance, and daily activities. Our comprehensive approach begins with thorough diagnosis using advanced imaging technologies, followed by customized treatment plans that may include conservative management or surgical intervention. Dr. Gurudeo Kumar's expertise spans from simple arthroscopic procedures to complex multi-ligament reconstructions, ensuring that every patient receives the most appropriate care for their specific condition.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our knee surgery services utilize minimally invasive techniques whenever possible, reducing recovery time and post-operative discomfort. From ACL reconstructions using the latest graft techniques to innovative cartilage restoration procedures, we stay at the forefront of orthopedic surgery. The surgical team employs computer-assisted navigation systems and arthroscopic technology to ensure precision and optimal outcomes. Post-operative care includes comprehensive rehabilitation programs designed to restore full function and prevent future injuries.
              </p>

              <p className="text-lg leading-relaxed">
                Located strategically in Patna, we serve as a regional center of excellence for patients from across Eastern India and neighboring countries. Our facility is equipped with modern operation theaters, advanced imaging systems, and dedicated rehabilitation areas. We understand the unique needs of patients traveling from distant locations and provide comprehensive care coordination, including accommodation assistance and follow-up planning to ensure seamless treatment experience.
              </p>
            </div>
          </div>

          {/* ACL Procedures Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">ACL Procedures</h2>
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Comprehensive ACL surgery options including reconstruction, repair, and revision procedures performed by Dr. Gurudeo Kumar's expert team.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {aclProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{procedure.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={procedure.slug}>
                      <Button 
                        variant="outline" 
                        className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link to="/acl-procedures">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  View All ACL Procedures
                </Button>
              </Link>
            </div>
          </div>

          {/* PCL & Multi-ligament Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">PCL & Multi-ligament Procedures</h2>
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Advanced PCL reconstruction and complex multi-ligament surgery for comprehensive knee stability restoration.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {pclMultiLigament.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{procedure.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={procedure.slug}>
                      <Button 
                        variant="outline" 
                        className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link to="/pcl-multi-ligament">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  View All PCL & Multi-ligament Procedures
                </Button>
              </Link>
            </div>
          </div>

          {/* Other Knee Procedures Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Other Knee Procedures</h2>
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Comprehensive knee treatments including meniscus repair, knee replacement, and cartilage restoration procedures.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {otherKneeProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{procedure.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={procedure.slug}>
                      <Button 
                        variant="outline" 
                        className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link to="/other-knee-procedures">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  View All Other Knee Procedures
                </Button>
              </Link>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Dr. Gurudeo Kumar for Knee Surgery?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Expert Surgeon</h3>
                <p className="text-slate-300">
                  Dr. Gurudeo Kumar brings years of specialized experience in knee surgery, with expertise in complex reconstructions and minimally invasive techniques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Technology</h3>
                <p className="text-slate-300">
                  State-of-the-art surgical equipment, computer-assisted navigation, and arthroscopic technology for precision surgery.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Excellence</h3>
                <p className="text-slate-300">
                  Serving patients from Patna, Bengal, North East India, and Nepal with comprehensive orthopedic care.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Comprehensive Care</h3>
                <p className="text-slate-300">
                  Complete treatment journey from diagnosis to rehabilitation with personalized care plans.
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
