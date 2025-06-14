
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SpineSurgery = () => {
  const cervicalSpineProcedures = [
    {
      title: "Cervical Disc Replacement",
      description: "Motion-preserving artificial disc replacement",
      slug: "cervical-disc-replacement"
    },
    {
      title: "Cervical Fusion",
      description: "ACDF and posterior cervical fusion procedures",
      slug: "cervical-fusion"
    },
    {
      title: "Cervical Laminectomy",
      description: "Decompression surgery for cervical stenosis",
      slug: "cervical-laminectomy"
    }
  ];

  const lumbarSpineProcedures = [
    {
      title: "Lumbar Fusion",
      description: "PLIF, TLIF, and lateral fusion techniques",
      slug: "lumbar-fusion"
    },
    {
      title: "Disc Replacement",
      description: "Lumbar artificial disc replacement surgery",
      slug: "disc-replacement"
    },
    {
      title: "Microdiscectomy",
      description: "Minimally invasive disc herniation treatment",
      slug: "microdiscectomy"
    },
    {
      title: "Spinal Stenosis Surgery",
      description: "Decompression for spinal canal narrowing",
      slug: "spinal-stenosis-surgery"
    }
  ];

  const minimallyInvasiveProcedures = [
    {
      title: "Endoscopic Spine Surgery",
      description: "Ultra-minimally invasive endoscopic techniques",
      slug: "endoscopic-spine-surgery"
    },
    {
      title: "Percutaneous Procedures",
      description: "Minimally invasive percutaneous spine surgery",
      slug: "percutaneous-procedures"
    }
  ];

  return (
    <>
      <title>Best Spine Surgery in Patna, India | Minimally Invasive Spine Surgery | Expert Neurosurgery</title>
      <meta name="description" content="Leading spine surgery center in Patna, India. Expert minimally invasive spine surgery, disc replacement, spinal fusion with advanced techniques and excellent outcomes." />
      <meta name="keywords" content="spine surgery Patna, minimally invasive spine surgery India, disc replacement Patna, spinal fusion Bihar, neurosurgeon Patna, spine specialist India" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced Spine Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive spine surgery center offering cutting-edge minimally invasive treatments from disc 
              replacement to complex spinal reconstructions. Serving patients from Bihar, Bengal, North East India, 
              and Nepal with world-class neurosurgical care.
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
            <h2 className="text-3xl font-bold text-white mb-6">Premier Spine Surgery Center in Eastern India</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <p className="mb-4">
                  Our spine surgery center in Patna represents the forefront of neurosurgical innovation in Eastern India. 
                  We specialize in minimally invasive techniques that reduce recovery time while providing superior 
                  outcomes for complex spinal conditions.
                </p>
                <p className="mb-4">
                  From simple disc herniations to complex spinal deformities, our team combines advanced surgical 
                  techniques with state-of-the-art technology. We serve patients from across Bihar, West Bengal, 
                  Jharkhand, and the entire North Eastern region.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Our comprehensive approach includes detailed imaging analysis, precise surgical planning, and 
                  advanced intraoperative navigation systems. We offer both motion-preserving and fusion techniques 
                  tailored to each patient's specific needs.
                </p>
                <p>
                  Whether you need endoscopic spine surgery or complex spinal reconstruction, our center delivers 
                  international-standard neurosurgical care with the latest technologies and techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Cervical Spine Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Cervical Spine Surgery</h2>
              <Link to="/cervical-spine-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Cervical Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Advanced cervical spine surgery including motion-preserving disc replacement and fusion techniques.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {cervicalSpineProcedures.map((procedure, index) => (
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

          {/* Lumbar Spine Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Lumbar Spine Surgery</h2>
              <Link to="/lumbar-spine-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Lumbar Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Comprehensive lumbar spine surgery from simple discectomy to complex fusion procedures.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lumbarSpineProcedures.map((procedure, index) => (
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

          {/* Minimally Invasive Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Minimally Invasive Spine Surgery</h2>
              <Link to="/minimally-invasive-spine-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Minimally Invasive Options
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Ultra-minimally invasive spine surgery techniques for faster recovery and better outcomes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {minimallyInvasiveProcedures.map((procedure, index) => (
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

          {/* Why Choose Us */}
          <div className="bg-slate-800/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Spine Surgery Center</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Minimally Invasive</h3>
                <p className="text-slate-300 text-sm">
                  Advanced endoscopic and percutaneous techniques for minimal tissue damage and faster healing.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Navigation Technology</h3>
                <p className="text-slate-300 text-sm">
                  State-of-the-art surgical navigation systems for precise and safe spinal procedures.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Motion Preservation</h3>
                <p className="text-slate-300 text-sm">
                  Advanced disc replacement techniques that preserve natural spinal motion and function.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Complex Cases</h3>
                <p className="text-slate-300 text-sm">
                  Expertise in handling complex spinal deformities and revision spine surgeries.
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

export default SpineSurgery;
