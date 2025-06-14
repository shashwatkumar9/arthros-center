
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ShoulderElbow = () => {
  const rotatorCuffProcedures = [
    {
      title: "Rotator Cuff Repair",
      description: "Arthroscopic rotator cuff repair for torn tendons",
      slug: "rotator-cuff-repair"
    },
    {
      title: "Massive Rotator Cuff Repair",
      description: "Complex repair techniques for large rotator cuff tears",
      slug: "massive-rotator-cuff-repair"
    },
    {
      title: "Rotator Cuff Reconstruction",
      description: "Advanced reconstruction for irreparable rotator cuff tears",
      slug: "rotator-cuff-reconstruction"
    }
  ];

  const shoulderInstabilityProcedures = [
    {
      title: "Bankart Repair",
      description: "Arthroscopic repair for anterior shoulder instability",
      slug: "bankart-repair"
    },
    {
      title: "Latarjet Procedure",
      description: "Bone block procedure for recurrent shoulder dislocations",
      slug: "latarjet-procedure"
    },
    {
      title: "SLAP Repair",
      description: "Superior labrum anterior-posterior tear repair",
      slug: "slap-repair"
    }
  ];

  const elbowProcedures = [
    {
      title: "Tennis Elbow Surgery",
      description: "Minimally invasive treatment for lateral epicondylitis",
      slug: "tennis-elbow-surgery"
    },
    {
      title: "Golfer's Elbow Treatment",
      description: "Comprehensive medial epicondylitis treatment",
      slug: "golfers-elbow-treatment"
    },
    {
      title: "Elbow Arthroscopy",
      description: "Keyhole surgery for various elbow conditions",
      slug: "elbow-arthroscopy"
    },
    {
      title: "UCL Reconstruction",
      description: "Tommy John surgery for UCL injuries",
      slug: "ucl-reconstruction"
    }
  ];

  return (
    <>
      <title>Best Shoulder & Elbow Surgery in Patna, India | Rotator Cuff Repair | Expert Orthopedic Care</title>
      <meta name="description" content="Leading shoulder and elbow surgery center in Patna, India. Expert rotator cuff repair, shoulder arthroscopy, elbow surgery with advanced techniques and excellent outcomes." />
      <meta name="keywords" content="shoulder surgery Patna, rotator cuff repair India, elbow surgery Patna, shoulder arthroscopy Patna, orthopedic surgeon Bihar, shoulder specialist India" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Shoulder & Elbow Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Advanced shoulder and elbow surgery center offering comprehensive treatment from rotator cuff repair 
              to complex reconstructions. Serving patients from Bihar, Bengal, North East India, and Nepal with 
              world-class orthopedic care.
            </p>
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Consultation
            </Button>
          </div>

          {/* Main Content */}
          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Premier Shoulder & Elbow Treatment Center in Eastern India</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <p className="mb-4">
                  Our shoulder and elbow surgery center in Patna represents the pinnacle of orthopedic care in Eastern India. 
                  We specialize in both arthroscopic and open surgical techniques, treating everything from sports injuries 
                  to complex degenerative conditions.
                </p>
                <p className="mb-4">
                  With advanced arthroscopic equipment and years of specialized training, we provide minimally invasive 
                  solutions that reduce recovery time and improve outcomes for our patients across Bihar, West Bengal, 
                  and the North Eastern states.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Our comprehensive approach includes pre-operative planning with advanced imaging, precise surgical 
                  execution, and structured rehabilitation protocols. We treat professional athletes, weekend warriors, 
                  and patients with everyday shoulder and elbow problems.
                </p>
                <p>
                  From rotator cuff tears to complex elbow reconstructions, our team delivers personalized care with 
                  outcomes that rival international standards, right here in Patna.
                </p>
              </div>
            </div>
          </div>

          {/* Rotator Cuff Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Rotator Cuff Surgery</h2>
              <Link to="/rotator-cuff-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Rotator Cuff Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Advanced rotator cuff surgery using arthroscopic and open techniques for optimal healing and function restoration.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {rotatorCuffProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">{procedure.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${procedure.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Shoulder Instability Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Shoulder Instability Surgery</h2>
              <Link to="/shoulder-instability-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Instability Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Specialized treatment for shoulder dislocations and instability using advanced arthroscopic and open techniques.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {shoulderInstabilityProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">{procedure.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${procedure.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Elbow Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Elbow Surgery</h2>
              <Link to="/elbow-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Elbow Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Comprehensive elbow surgery including arthroscopy, tendon repairs, and ligament reconstructions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {elbowProcedures.map((procedure, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{procedure.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {procedure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${procedure.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-slate-800/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Shoulder & Elbow Center</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Advanced Arthroscopy</h3>
                <p className="text-slate-300 text-sm">
                  State-of-the-art arthroscopic equipment for minimally invasive procedures with faster recovery times.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Sports Medicine Expertise</h3>
                <p className="text-slate-300 text-sm">
                  Specialized care for athletes with focus on return to sport and performance optimization.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Complex Reconstructions</h3>
                <p className="text-slate-300 text-sm">
                  Expert handling of complex cases including revision surgeries and massive rotator cuff tears.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Comprehensive Rehabilitation</h3>
                <p className="text-slate-300 text-sm">
                  Structured rehabilitation protocols for optimal recovery and long-term joint health.
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

export default ShoulderElbow;
