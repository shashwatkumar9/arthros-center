
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SportsMedicine = () => {
  const athleticInjuries = [
    {
      title: "ACL Injuries",
      description: "Comprehensive ACL injury treatment and reconstruction",
      slug: "acl-injuries"
    },
    {
      title: "Meniscus Tears",
      description: "Advanced meniscal repair and treatment options",
      slug: "meniscus-tears"
    },
    {
      title: "Shoulder Dislocations",
      description: "Expert treatment for athletic shoulder injuries",
      slug: "shoulder-dislocations"
    },
    {
      title: "Ankle Sprains",
      description: "Comprehensive ankle injury management and prevention",
      slug: "ankle-sprains"
    }
  ];

  const performanceServices = [
    {
      title: "Return to Sport Programs",
      description: "Structured rehabilitation for safe return to athletics",
      slug: "return-to-sport-programs"
    },
    {
      title: "Injury Prevention",
      description: "Proactive programs to prevent sports-related injuries",
      slug: "injury-prevention"
    },
    {
      title: "Sports Physicals",
      description: "Comprehensive pre-participation physical examinations",
      slug: "sports-physicals"
    }
  ];

  const specializedCare = [
    {
      title: "Concussion Management",
      description: "Expert evaluation and treatment of sports concussions",
      slug: "concussion-management"
    },
    {
      title: "Overuse Injuries",
      description: "Treatment for repetitive stress and overuse injuries",
      slug: "overuse-injuries"
    },
    {
      title: "Youth Sports Medicine",
      description: "Specialized care for young athletes and growing bodies",
      slug: "youth-sports-medicine"
    }
  ];

  return (
    <>
      <title>Best Sports Medicine in Patna, India | Athletic Injury Treatment | Expert Sports Medicine Care</title>
      <meta name="description" content="Leading sports medicine center in Patna, India. Expert treatment for athletic injuries, sports rehabilitation, and performance optimization for athletes of all levels." />
      <meta name="keywords" content="sports medicine Patna, athletic injury treatment India, sports rehabilitation Patna, ACL injury Bihar, sports medicine doctor Patna, athlete treatment India" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Sports Medicine in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Comprehensive sports medicine center offering cutting-edge treatment for athletic injuries and 
              performance optimization. Serving athletes from Bihar, Bengal, North East India, and Nepal with 
              world-class sports medicine care.
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
            <h2 className="text-3xl font-bold text-white mb-6">Premier Sports Medicine Center in Eastern India</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div>
                <p className="mb-4">
                  Our sports medicine center in Patna stands as the premier destination for athletic injury treatment 
                  and performance optimization in Eastern India. We specialize in evidence-based treatments that get 
                  athletes back to their sport safely and quickly.
                </p>
                <p className="mb-4">
                  From weekend warriors to elite athletes, our comprehensive approach combines advanced diagnostics, 
                  targeted treatments, and sport-specific rehabilitation. We serve athletes from across Bihar, 
                  West Bengal, and the entire North Eastern region.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Our multidisciplinary team includes sports medicine physicians, orthopedic surgeons, and specialized 
                  therapists who understand the unique demands of athletic performance. We focus on not just treating 
                  injuries, but preventing them.
                </p>
                <p>
                  Whether you need ACL reconstruction, concussion management, or performance enhancement programs, 
                  our center delivers cutting-edge sports medicine care with proven results.
                </p>
              </div>
            </div>
          </div>

          {/* Athletic Injuries */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Athletic Injury Treatment</h2>
              <Link to="/athletic-injuries-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Injury Treatments
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Expert treatment for common sports injuries using advanced techniques and rehabilitation protocols.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {athleticInjuries.map((injury, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{injury.title}</CardTitle>
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

          {/* Performance Services */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Performance Optimization</h2>
              <Link to="/performance-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Performance Services
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Comprehensive programs designed to optimize athletic performance and prevent injuries.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {performanceServices.map((service, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${service.slug}`}>
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

          {/* Specialized Care */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">Specialized Sports Medicine Care</h2>
              <Link to="/specialized-care-procedures">
                <Button variant="outline" className="border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white">
                  View All Specialized Services
                </Button>
              </Link>
            </div>
            <p className="text-slate-300 mb-6">
              Specialized programs for unique athletic populations and specific injury types.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {specializedCare.map((care, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-white">{care.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {care.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/${care.slug}`}>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Sports Medicine Center</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Evidence-Based Care</h3>
                <p className="text-slate-300 text-sm">
                  Treatment protocols based on the latest sports medicine research and proven outcomes.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Sport-Specific Programs</h3>
                <p className="text-slate-300 text-sm">
                  Tailored rehabilitation and training programs specific to your sport and position.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Injury Prevention</h3>
                <p className="text-slate-300 text-sm">
                  Comprehensive programs to identify risk factors and prevent future injuries.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Performance Focus</h3>
                <p className="text-slate-300 text-sm">
                  Not just recovery, but optimization of athletic performance and competitive edge.
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

export default SportsMedicine;
