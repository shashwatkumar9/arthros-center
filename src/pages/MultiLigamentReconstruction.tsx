
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MultiLigamentReconstruction = () => {
  return (
    <>
      <title>Multi-ligament Reconstruction Surgery in Patna | Complex Knee Surgery India | Dr. Gurudeo Kumar</title>
      <meta name="description" content="Expert multi-ligament reconstruction surgery in Patna by Dr. Gurudeo Kumar. Complex knee surgery for severe injuries. Serving Bengal, North East, Nepal patients." />
      <meta name="keywords" content="multi-ligament reconstruction Patna, complex knee surgery India, multi-ligament surgery Patna, Dr Gurudeo Kumar, knee reconstruction Bengal" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Multi-ligament Reconstruction in <span className="text-cyan-400">Patna, India</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Complex multi-ligament reconstruction surgery by Dr. Gurudeo Kumar for severe knee injuries involving multiple ligament structures.
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
              src="/lovable-uploads/22a9001a-0766-4a86-b778-f8bdbe313c26.png" 
              alt="Multi-ligament reconstruction surgery at Arthros Center by Dr. Gurudeo Kumar"
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="bg-slate-800/30 rounded-lg p-8 mb-12">
            <div className="prose prose-lg max-w-none text-slate-300">
              <h2 className="text-2xl font-bold text-white mb-6">Advanced Multi-ligament Reconstruction Surgery</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Multi-ligament reconstruction surgery represents the pinnacle of complex knee surgery, addressing severe injuries that involve damage to multiple knee ligaments simultaneously. At Arthros Center in Patna, Dr. Gurudeo Kumar specializes in these challenging procedures, providing hope and restoration to patients from India, Bengal, North East regions, and Nepal who have sustained devastating knee injuries. These complex injuries typically result from high-energy trauma such as motor vehicle accidents, severe sports injuries, or industrial accidents.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Multi-ligament knee injuries involve damage to two or more of the four major knee ligaments: the <a href="/acl-procedures" className="text-cyan-400 hover:text-cyan-300">anterior cruciate ligament (ACL)</a>, <a href="/pcl-reconstruction" className="text-cyan-400 hover:text-cyan-300">posterior cruciate ligament (PCL)</a>, <a href="/mcl-reconstruction" className="text-cyan-400 hover:text-cyan-300">medial collateral ligament (MCL)</a>, and the posterolateral corner (PLC) structures. Dr. Gurudeo Kumar's expertise in multi-ligament reconstruction encompasses both acute and chronic presentations, with surgical planning tailored to the specific pattern of injury and individual patient factors.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The complexity of multi-ligament reconstruction requires comprehensive preoperative evaluation using advanced imaging studies including MRI, CT scans, and sometimes stress radiographs to fully assess the extent of ligamentous damage and associated injuries. Dr. Kumar's approach involves detailed surgical planning to determine the optimal sequence of ligament reconstruction, choice of graft materials, and timing of procedures. Some cases may require staged surgeries to optimize healing and outcomes.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Surgical technique for multi-ligament reconstruction demands exceptional skill and experience in knee surgery. Dr. Gurudeo Kumar employs state-of-the-art arthroscopic and open surgical techniques, often combining both approaches within a single procedure. The surgery typically involves reconstruction of the cruciate ligaments using autograft or allograft tissue, repair or reconstruction of collateral ligaments, and restoration of the posterolateral corner structures. Computer-assisted navigation and specialized instrumentation ensure precise tunnel placement and optimal graft positioning.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The choice of graft materials for multi-ligament reconstruction is critical for success. Dr. Kumar utilizes a combination of autograft tissues (hamstring tendons, patellar tendon) and high-quality allograft tissues when multiple grafts are required. The selection is individualized based on patient age, activity level, tissue quality, and the specific ligaments requiring reconstruction. Advanced preparation techniques ensure optimal graft strength and integration potential.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Post-operative rehabilitation following multi-ligament reconstruction is the most complex and demanding in knee surgery. Dr. Gurudeo Kumar's rehabilitation protocols are specifically designed for multi-ligament cases, with careful attention to protecting all reconstructed structures while promoting optimal healing. The rehabilitation process typically spans 9-12 months and requires close coordination between the surgical team, specialized physiotherapists, and the patient to achieve optimal outcomes.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Early rehabilitation focuses on controlling inflammation, gentle range of motion within protected parameters, and maintaining muscle function. Progressive weight-bearing and strengthening exercises are carefully introduced based on healing progress and the specific ligaments reconstructed. Advanced rehabilitation techniques include neuromuscular training, proprioceptive exercises, and sport-specific training for athletes seeking to return to competitive activities.
              </p>

              <p className="text-lg leading-relaxed">
                Long-term outcomes following multi-ligament reconstruction by Dr. Gurudeo Kumar demonstrate excellent success rates in restoring knee stability and function. While these are among the most challenging procedures in orthopedic surgery, the comprehensive approach employed at Arthros Center ensures optimal outcomes for patients with these complex injuries. Regular long-term follow-up monitors knee stability, function, and helps prevent future complications, ensuring the best possible quality of life for patients who have sustained these severe injuries.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-12 py-4 text-xl"
              onClick={() => window.open('https://calendar.app.google/eSJeS2KsEsS5sbri8', '_blank')}
            >
              Book Your Multi-ligament Reconstruction Consultation
            </Button>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default MultiLigamentReconstruction;
