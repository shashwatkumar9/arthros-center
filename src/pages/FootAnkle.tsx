
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FootAnkle = () => {
  const footSurgeryProcedures = [
    {
      title: "Bunion Surgery",
      description: "Advanced bunion correction with minimal scarring",
      slug: "bunion-surgery"
    },
    {
      title: "Hammertoe Correction",
      description: "Surgical correction for hammertoe deformities",
      slug: "hammertoe-correction"
    },
    {
      title: "Plantar Fasciitis Surgery",
      description: "Endoscopic plantar fasciotomy for chronic heel pain",
      slug: "plantar-fasciitis-surgery"
    },
    {
      title: "Achilles Repair",
      description: "Advanced Achilles tendon repair and reconstruction",
      slug: "achilles-repair"
    }
  ];

  const ankleSurgeryProcedures = [
    {
      title: "Ankle Arthroscopy",
      description: "Minimally invasive ankle joint surgery",
      slug: "ankle-arthroscopy"
    },
    {
      title: "Ankle Replacement",
      description: "Total ankle replacement for advanced arthritis",
      slug: "ankle-replacement"
    },
    {
      title: "Ankle Fusion",
      description: "Arthrodesis for severe ankle joint disease",
      slug: "ankle-fusion"
    },
    {
      title: "Ligament Reconstruction",
      description: "Ankle ligament repair and reconstruction",
      slug: "ligament-reconstruction"
    }
  ];

  const sportsInjuries = [
    {
      title: "Ankle Sprains",
      description: "Comprehensive treatment for acute and chronic ankle sprains",
      slug: "ankle-sprains"
    },
    {
      title: "Jones Fracture",
      description: "Specialized treatment for fifth metatarsal fractures",
      slug: "jones-fracture"
    },
    {
      title: "Turf Toe Treatment",
      description: "Expert care for great toe injuries in athletes",
      slug: "turf-toe-treatment"
    }
  ];

  return (
    <>
      <title>Best Foot & Ankle Surgery in Patna, India | Bunion Surgery | Expert Podiatric Care</title>
      <meta name="description" content="Leading foot and ankle surgery center in Patna, India. Expert bunion surgery, ankle arthroscopy, Achilles repair with advanced techniques and excellent outcomes." />
      <meta name="keywords" content="foot surgery Patna, ankle surgery India, bunion surgery Patna, Achilles repair Bihar, podiatrist Patna, foot ankle surgeon India" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Foot & Ankle Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive foot and ankle surgery center offering advanced treatments from bunion correction 
              to complex reconstructions. Serving patients from Bihar, Bengal, North East India, and Nepal 
              with world-class podiatric surgery care.
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
            <h2 className="text-3xl font-bold text-white mb-6">Premier Foot & Ankle Surgery Center in Eastern India</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <p className="mb-4">
                  Our foot and ankle surgery center in Patna represents the forefront of podiatric surgical care 
                  in Eastern India. We specialize in both minimally invasive and complex reconstructive procedures 
                  that restore mobility and eliminate pain.
                </p>
                <p className="mb-4">
                  From common conditions like bunions and plantar fasciitis to complex ankle reconstructions, 
                  our team combines advanced surgical techniques with comprehensive rehabilitation. We serve 
                  patients from across Bihar, West Bengal, and the North Eastern states.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Our state-of-the-art facility includes advanced arthroscopic equipment and modern imaging 
                  systems for precise diagnosis and treatment. We focus on both functional restoration and 
                  return to active lifestyles.
                </p>
                <p>
                  Whether you need minimally invasive bunion surgery or complex ankle replacement, our center 
                  delivers internationally recognized foot and ankle expertise with personalized care.
                </p>
              </div>
            </div>
          </div>

          {/* Foot Surgery Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Foot Surgery</h2>
              <Link to="/foot-surgery-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Foot Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Advanced foot surgery using minimally invasive techniques for optimal healing and function.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {footSurgeryProcedures.map((procedure, index) => (
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

          {/* Ankle Surgery Procedures */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Ankle Surgery</h2>
              <Link to="/ankle-surgery-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Ankle Procedures
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Comprehensive ankle surgery including arthroscopy, replacement, and ligament reconstruction.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ankleSurgeryProcedures.map((procedure, index) => (
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

          {/* Sports Injuries */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Sports Injury Treatment</h2>
              <Link to="/foot-ankle-sports-injuries">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Sports Treatments
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Specialized treatment for athletic foot and ankle injuries with focus on return to sport.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {sportsInjuries.map((injury, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">{injury.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {injury.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${injury.slug}`}>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Foot & Ankle Center</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Minimally Invasive</h3>
                <p className="text-slate-300 text-sm">
                  Advanced arthroscopic and endoscopic techniques for reduced pain and faster healing.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Sports Medicine</h3>
                <p className="text-slate-300 text-sm">
                  Specialized care for athletes with focus on rapid return to sport and performance.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Complex Reconstruction</h3>
                <p className="text-slate-300 text-sm">
                  Expert handling of complex deformities and revision surgeries with excellent outcomes.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Active Lifestyle</h3>
                <p className="text-slate-300 text-sm">
                  Treatment focused on restoring active lifestyles and maintaining mobility.
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

export default FootAnkle;
