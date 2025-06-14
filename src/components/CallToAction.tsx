
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Take the First Step Towards Recovery?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Schedule a consultation with Dr. Gurudeo Kumar and our expert team to discuss your 
          orthopedic concerns and treatment options.
        </p>
        <div className="flex justify-center space-x-6">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 text-lg">
            Book an Appointment
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
