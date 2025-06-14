
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ACLProcedures = () => {
  const procedures = [
    {
      title: "ACL Reconstruction",
      description: "Complete ACL reconstruction using autograft or allograft techniques for optimal knee stability",
      slug: "/acl-reconstruction"
    },
    {
      title: "ACL Repair", 
      description: "Primary ACL repair for fresh tears with specialized suture techniques",
      slug: "/acl-repair"
    },
    {
      title: "Revision ACL Surgery",
      description: "Complex revision surgery for failed ACL reconstructions with expert techniques",
      slug: "/revision-acl-surgery"
    },
    {
      title: "ACL with Meniscus Repair",
      description: "Combined ACL reconstruction and meniscus repair in single procedure",
      slug: "/acl-with-meniscus-repair"
    }
  ];

  return (
    <>
      <title>ACL Procedures in Patna | ACL Reconstruction India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert ACL procedures in Patna by Dr. Gurudeo Kumar. ACL reconstruction, repair, revision surgery. Advanced techniques for patients from Bengal, North East, Nepal." />
      <meta name="keywords" content="ACL reconstruction Patna, ACL surgery India, ACL repair Patna, revision ACL surgery, Dr Gurudeo Kumar ACL" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ACL Procedures in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive ACL surgery procedures by Dr. Gurudeo Kumar and his team. Advanced reconstruction, repair, and revision techniques for optimal knee function.
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
              src="/lovable-uploads/243a83c3-ea4b-4413-a11e-c9de37592930.png" 
              alt="ACL reconstruction surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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

          {/* ACL Information Section */}
          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">ACL Surgery Excellence at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                The Anterior Cruciate Ligament (ACL) is one of the most critical structures in the knee, providing stability during rotational movements and preventing the tibia from sliding forward relative to the femur. ACL injuries are among the most common sports-related injuries, particularly in activities involving cutting, pivoting, and jumping movements. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in comprehensive ACL procedures, serving patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our ACL surgery program encompasses the full spectrum of procedures, from primary reconstruction to complex revision surgeries. Dr. Gurudeo Kumar employs the latest surgical techniques, including anatomical ACL reconstruction, which focuses on restoring the ACL to its natural anatomical position for optimal biomechanical function. This approach has been shown to provide superior outcomes in terms of knee stability, reduced risk of re-injury, and long-term joint health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Techniques</h3>
                <p className="text-slate-300">
                  Anatomical reconstruction, all-inside techniques, and computer-assisted surgery for precise graft placement and optimal outcomes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Graft Options</h3>
                <p className="text-slate-300">
                  Multiple graft choices including hamstring autograft, patellar tendon autograft, and allograft options based on individual patient needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Rapid Recovery</h3>
                <p className="text-slate-300">
                  Accelerated rehabilitation protocols designed to return athletes and active individuals to their pre-injury activity levels safely.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Expertise</h3>
                <p className="text-slate-300">
                  Specialized care for patients from Patna, Bengal, North East India, and Nepal with comprehensive follow-up programs.
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

export default ACLProcedures;
