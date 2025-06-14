
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MeniscusRepair = () => {
  return (
    <>
      <title>Meniscus Repair Surgery in Patna | Arthroscopic Meniscus India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert meniscus repair surgery in Patna by Dr. Gurudeo Kumar. Arthroscopic meniscus repair to preserve knee function. Serving Bengal, North East, Nepal patients." />
      <meta name="keywords" content="meniscus repair Patna, arthroscopic meniscus India, meniscus surgery Patna, Dr Gurudeo Kumar, meniscus repair Bengal, meniscus Nepal" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meniscus Repair Surgery in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced arthroscopic meniscus repair surgery by Dr. Gurudeo Kumar to preserve knee function and prevent future arthritis.
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
              alt="Meniscus repair surgery being performed by Dr. Gurudeo Kumar at Arthros Center"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <div className="prose prose-lg max-w-none text-slate-300">
              <h2 className="text-2xl font-bold text-white mb-6">Advanced Meniscus Repair Surgery</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Meniscus repair surgery represents a paradigm shift in the treatment of meniscal tears, focusing on preservation rather than removal of this crucial knee structure. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in advanced arthroscopic meniscus repair techniques, serving patients from across India, Bengal, North East regions, and Nepal. The meniscus functions as the knee's shock absorber and plays a vital role in joint stability, load distribution, and long-term knee health, making its preservation through repair techniques essential for optimal outcomes.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The meniscus is a C-shaped cartilage structure with two distinct zones: the outer one-third (red zone) has good blood supply and healing potential, while the inner two-thirds (white zone) has limited blood supply. Dr. Gurudeo Kumar's expertise in meniscus repair encompasses both zones, utilizing innovative techniques to promote healing even in areas with traditionally poor healing potential. Modern meniscus repair techniques have revolutionized treatment outcomes, allowing preservation of meniscal tissue that would previously have been removed.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Patient selection for meniscus repair is crucial for successful outcomes. Dr. Kumar carefully evaluates each case using advanced MRI imaging and arthroscopic assessment to determine repairability. Ideal candidates include patients with peripheral tears, vertical longitudinal tears, and complex tears in younger patients where preservation is particularly important. The procedure is often performed in conjunction with <a href="/acl-reconstruction" className="text-cyan-400 hover:text-cyan-300">ACL reconstruction</a> when both structures are injured, as seen in <a href="/acl-with-meniscus-repair" className="text-cyan-400 hover:text-cyan-300">combined ACL and meniscus procedures</a>.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The surgical technique for meniscus repair has evolved significantly with the development of specialized instruments and suture techniques. Dr. Gurudeo Kumar employs state-of-the-art arthroscopic methods including all-inside repair techniques using specialized suture devices, inside-out repairs with direct suture placement, and outside-in repairs for posterior horn tears. The choice of technique depends on tear location, pattern, and patient factors. Advanced suture materials and anchor systems provide excellent biomechanical properties for optimal healing.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                All-inside meniscus repair techniques represent the latest advancement in meniscal surgery, allowing for efficient repair with minimal tissue trauma. Dr. Kumar utilizes specialized devices that place pre-tied sutures directly into the meniscal tissue, creating optimal compression and apposition of tear edges. These techniques reduce surgery time, minimize complications, and provide excellent biomechanical fixation. The procedure is performed entirely through arthroscopic portals, resulting in minimal scarring and faster recovery.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Post-operative rehabilitation following meniscus repair requires careful balance between protecting the healing tissue and maintaining knee function. Dr. Gurudeo Kumar's rehabilitation protocols are specifically designed for meniscus repair cases, with restricted weight-bearing and range of motion in the early phases to allow healing. Progressive mobilization and strengthening exercises are introduced based on healing signs and clinical assessment. The rehabilitation process typically spans 3-4 months for return to full activities.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                For patients traveling from Bengal, North East India, and Nepal, Dr. Kumar's team provides comprehensive care coordination including detailed pre-operative evaluation, surgical planning, and post-operative follow-up arrangements. Telemedicine consultations facilitate ongoing monitoring of recovery progress while detailed rehabilitation protocols ensure optimal outcomes regardless of geographic location. The team provides coordination with local physiotherapy providers to ensure continuity of care throughout the recovery process.
              </p>

              <p className="text-lg leading-relaxed">
                Long-term outcomes following meniscus repair by Dr. Gurudeo Kumar demonstrate excellent success rates with significant benefits for joint preservation and function. Studies have shown that successful meniscus repair reduces the risk of future arthritis and maintains better knee function compared to meniscal removal. Patients typically experience excellent pain relief, improved function, and return to sports and activities. The preserved meniscal tissue continues to provide shock absorption and joint stability for years after successful repair, making this procedure an investment in long-term knee health.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-4 text-xl"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Your Meniscus Repair Consultation
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default MeniscusRepair;
