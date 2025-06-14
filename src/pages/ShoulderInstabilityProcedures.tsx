
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ShoulderInstabilityProcedures = () => {
  const procedures = [
    {
      title: "Bankart Repair",
      description: "Arthroscopic repair for anterior shoulder instability and labral tears using advanced suture techniques",
      slug: "/bankart-repair"
    },
    {
      title: "Latarjet Procedure", 
      description: "Bone block procedure for recurrent shoulder dislocations with bone loss and complex instability",
      slug: "/latarjet-procedure"
    },
    {
      title: "SLAP Repair",
      description: "Superior labrum anterior-posterior tear repair for overhead athletes and active individuals",
      slug: "/slap-repair"
    }
  ];

  return (
    <>
      <title>Shoulder Instability Surgery in Patna | Bankart Repair India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert shoulder instability surgery in Patna by Dr. Gurudeo Kumar. Bankart repair, Latarjet procedure, SLAP repair. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="shoulder instability surgery Patna, Bankart repair India, Latarjet procedure Patna, SLAP repair, Dr Gurudeo Kumar shoulder dislocation" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Shoulder Instability Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced shoulder instability surgery procedures by Dr. Gurudeo Kumar. Expert treatment for shoulder dislocations, labral tears, and complex instability patterns.
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
              alt="Shoulder instability surgery being performed by Dr. Gurudeo Kumar's team in Patna"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
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

          {/* Shoulder Instability Information Section */}
          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Advanced Shoulder Instability Treatment at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Shoulder instability occurs when the shoulder joint becomes loose and slides partially or completely out of the socket, causing pain, weakness, and functional limitations. This condition commonly affects athletes involved in overhead sports, but can also result from traumatic injuries or anatomical variations. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in comprehensive shoulder instability surgery, providing advanced treatment options for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our shoulder instability program offers a complete range of surgical solutions, from arthroscopic Bankart repairs for first-time dislocations to complex bone block procedures like the Latarjet for patients with significant bone loss. Dr. Gurudeo Kumar's expertise in both arthroscopic and open techniques ensures that each patient receives the most appropriate surgical approach based on their specific instability pattern, bone loss assessment, and functional requirements. This personalized approach maximizes the success rate and minimizes the risk of recurrent dislocations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Precise Diagnosis</h3>
                <p className="text-slate-300">
                  Advanced imaging and clinical assessment to determine instability patterns and guide optimal surgical planning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Multiple Techniques</h3>
                <p className="text-slate-300">
                  Expertise in arthroscopic repairs, open procedures, and bone block surgeries for all types of shoulder instability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Sports-Focused Care</h3>
                <p className="text-slate-300">
                  Specialized treatment protocols for athletes with emphasis on return to sport and performance optimization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Excellence</h3>
                <p className="text-slate-300">
                  Premier shoulder instability center serving Patna, Bengal, North East India, and Nepal with expert outcomes.
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

export default ShoulderInstabilityProcedures;
