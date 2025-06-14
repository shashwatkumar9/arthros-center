
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ElbowProcedures = () => {
  const procedures = [
    {
      title: "Tennis Elbow Surgery",
      description: "Minimally invasive treatment for lateral epicondylitis using advanced arthroscopic techniques",
      slug: "/tennis-elbow-surgery"
    },
    {
      title: "Golfer's Elbow Treatment", 
      description: "Comprehensive medial epicondylitis treatment with surgical and non-surgical options",
      slug: "/golfers-elbow-treatment"
    },
    {
      title: "Elbow Arthroscopy",
      description: "Keyhole surgery for various elbow conditions including loose bodies and stiffness",
      slug: "/elbow-arthroscopy"
    },
    {
      title: "UCL Reconstruction",
      description: "Tommy John surgery for UCL injuries in throwing athletes using advanced techniques",
      slug: "/ucl-reconstruction"
    }
  ];

  return (
    <>
      <title>Elbow Surgery in Patna | Tennis Elbow Treatment India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert elbow surgery in Patna by Dr. Gurudeo Kumar. Tennis elbow, UCL reconstruction, elbow arthroscopy. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="elbow surgery Patna, tennis elbow surgery India, UCL reconstruction Patna, elbow arthroscopy, Dr Gurudeo Kumar elbow" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Elbow Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced elbow surgery procedures by Dr. Gurudeo Kumar and his team. Expert treatment for tennis elbow, UCL injuries, and complex elbow conditions.
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
              alt="Elbow surgery being performed by Dr. Gurudeo Kumar's team in Patna"
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

          {/* Elbow Information Section */}
          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Elbow Surgery at Arthros Center</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                The elbow is a complex hinge joint that allows for both flexion-extension and rotation movements, making it essential for daily activities and sports performance. Elbow conditions can significantly impact quality of life, from chronic pain conditions like tennis elbow to acute injuries requiring surgical intervention. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in comprehensive elbow surgery, offering advanced treatment options for patients from across India, Bengal, North East regions, and Nepal.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our elbow surgery program encompasses both minimally invasive arthroscopic procedures and open surgical techniques for complex reconstructions. Dr. Gurudeo Kumar's expertise spans from common conditions like lateral epicondylitis (tennis elbow) to complex ligament reconstructions such as UCL reconstruction for throwing athletes. This comprehensive approach ensures that each patient receives the most appropriate treatment based on their specific condition, activity level, and functional goals, maximizing the chances of successful outcomes and return to normal activities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Arthroscopic Expertise</h3>
                <p className="text-slate-300">
                  Advanced arthroscopic techniques for elbow conditions with minimal incisions and faster recovery times.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Sports Medicine Focus</h3>
                <p className="text-slate-300">
                  Specialized care for throwing athletes with expertise in UCL reconstruction and return-to-sport protocols.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Comprehensive Care</h3>
                <p className="text-slate-300">
                  Treatment for all elbow conditions from chronic overuse injuries to acute traumatic injuries requiring reconstruction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Leadership</h3>
                <p className="text-slate-300">
                  Leading elbow surgery center serving Patna, Bengal, North East India, and Nepal with expert surgical outcomes.
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

export default ElbowProcedures;
