
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "After my ACL tear, I thought my soccer days were over. Dr. Kumar performed my reconstruction surgery, and with his guidance through rehabilitation, I'm back on the field and playing better than ever!",
      name: "Rahul Singh",
      condition: "ACL Reconstruction Patient"
    },
    {
      quote: "The shoulder pain I lived with for years is finally gone. Dr. Kumar's expertise in arthroscopic surgery and his attention to detail made all the difference. I can now play with my grandchildren without pain!",
      name: "Anjali Sharma",
      condition: "Rotator Cuff Repair Patient"
    },
    {
      quote: "After years of knee pain and failed treatments elsewhere, Dr. Kumar diagnosed my condition correctly and performed a partial knee replacement. The care I received at Arthros Center was exceptional from start to finish.",
      name: "Pradeep Kumar",
      condition: "Knee Replacement Patient"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Patient Success Stories</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Hear from our patients about their experiences and successful recoveries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-cyan-400 text-4xl mb-6">"</div>
                <p className="text-slate-300 mb-8 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.condition}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3">
            View All Success Stories →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
