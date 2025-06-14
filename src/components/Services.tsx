
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "🏃",
      title: "Sports Medicine",
      description: "Specialized treatments for athletes and active individuals with sports-related injuries and conditions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🔬",
      title: "Arthroscopic Surgery",
      description: "Minimally invasive surgical techniques for joint problems with faster recovery times.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🦴",
      title: "Joint Reconstruction",
      description: "Advanced surgical procedures to restore function and reduce pain in damaged joints.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🏃‍♂️",
      title: "Physical Rehabilitation",
      description: "Comprehensive rehabilitation programs tailored to each patient's specific needs and goals.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💉",
      title: "Advanced Biologics",
      description: "Cutting-edge biologic treatments including PRP and stem cell therapy for joint conditions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🚑",
      title: "Trauma Care",
      description: "Expert management of fractures and traumatic injuries with comprehensive follow-up care.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Specialized Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive orthopedic care using the latest techniques and technologies for optimal outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white group-hover:scale-105 transition-transform">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
