
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const OtherKneeProcedures = () => {
  const procedures = [
    {
      title: "Meniscus Repair",
      description: "Advanced meniscus repair surgery to preserve knee function and prevent future arthritis",
      slug: "/meniscus-repair"
    },
    {
      title: "Knee Replacement", 
      description: "Total and partial knee replacement surgery using modern implant technology",
      slug: "/knee-replacement"
    },
    {
      title: "Patella Stabilization",
      description: "Patella stabilization surgery for recurrent kneecap dislocations and instability",
      slug: "/patella-stabilization"
    },
    {
      title: "Cartilage Restoration",
      description: "Advanced cartilage restoration techniques for joint preservation and pain relief",
      slug: "/cartilage-restoration"
    }
  ];

  return (
    <>
      <title>Other Knee Procedures in Patna | Meniscus Repair India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Comprehensive knee procedures in Patna by Dr. Gurudeo Kumar. Meniscus repair, knee replacement, patella stabilization. Serving Bengal, North East, Nepal." />
      <meta name="keywords" content="knee procedures Patna, meniscus repair India, knee replacement Patna, patella stabilization, Dr Gurudeo Kumar, cartilage restoration" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Other Knee Procedures in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive knee surgery procedures by Dr. Gurudeo Kumar including meniscus repair, knee replacement, and specialized treatments.
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
              alt="Other knee procedures being performed by Dr. Gurudeo Kumar at Arthros Center Patna"
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
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Knee Care Excellence</h2>
            <div className="prose prose-lg max-w-none text-slate-300 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Beyond ligament reconstruction procedures, comprehensive knee care encompasses a wide range of specialized treatments designed to address various knee conditions and injuries. At Arthros Center in Patna, Dr. Gurudeo Kumar provides expert care for patients from across India, Bengal, North East regions, and Nepal, offering advanced solutions for meniscus injuries, knee arthritis, patella instability, and cartilage damage. These procedures represent the complete spectrum of knee surgery, ensuring optimal treatment options for every patient's unique condition.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                The knee joint is a complex structure that can be affected by various conditions ranging from sports injuries to degenerative changes. Dr. Gurudeo Kumar's expertise extends beyond <a href="/acl-procedures" className="text-cyan-400 hover:text-cyan-300">ACL procedures</a> and <a href="/pcl-multi-ligament" className="text-cyan-400 hover:text-cyan-300">complex ligament reconstructions</a> to include specialized treatments for meniscus tears, advanced arthritis requiring joint replacement, unstable kneecaps, and damaged cartilage surfaces. Each condition requires specific surgical approaches and post-operative care protocols to achieve optimal outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Techniques</h3>
                <p className="text-slate-300">
                  State-of-the-art surgical methods for meniscus preservation, modern knee replacement implants, and innovative cartilage restoration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Minimally Invasive Options</h3>
                <p className="text-slate-300">
                  Arthroscopic techniques whenever possible to reduce recovery time and improve patient outcomes with smaller incisions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Personalized Treatment</h3>
                <p className="text-slate-300">
                  Individual treatment plans based on patient age, activity level, and specific condition requirements for optimal results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Regional Expertise</h3>
                <p className="text-slate-300">
                  Comprehensive knee care serving Patna, Bengal, North East India, and Nepal with specialized treatment options.
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

export default OtherKneeProcedures;
