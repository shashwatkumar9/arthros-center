import { useState } from "react";
import { Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const SearchCommand = () => {
  const [open, setOpen] = useState(false);

  const searchData = [
    // Knee Surgeries
    { category: "Knee Surgeries", title: "ACL Reconstruction", url: "https://arthroscenter.com/acl-reconstruction" },
    { category: "Knee Surgeries", title: "ACL Repair", url: "https://arthroscenter.com/acl-repair" },
    { category: "Knee Surgeries", title: "Revision ACL Surgery", url: "https://arthroscenter.com/revision-acl-surgery" },
    { category: "Knee Surgeries", title: "ACL with Meniscus Repair", url: "https://arthroscenter.com/acl-with-meniscus-repair" },
    { category: "Knee Surgeries", title: "PCL Reconstruction", url: "https://arthroscenter.com/pcl-reconstruction" },
    { category: "Knee Surgeries", title: "MCL Reconstruction", url: "https://arthroscenter.com/mcl-reconstruction" },
    { category: "Knee Surgeries", title: "Multi-ligament Reconstruction", url: "https://arthroscenter.com/multi-ligament-reconstruction" },
    { category: "Knee Surgeries", title: "Posterolateral Corner Repair", url: "https://arthroscenter.com/posterolateral-corner-repair" },
    { category: "Knee Surgeries", title: "Meniscus Repair", url: "https://arthroscenter.com/meniscus-repair" },
    { category: "Knee Surgeries", title: "Knee Replacement", url: "https://arthroscenter.com/knee-replacement" },
    { category: "Knee Surgeries", title: "Patella Stabilization", url: "https://arthroscenter.com/patella-stabilization" },
    { category: "Knee Surgeries", title: "Cartilage Restoration", url: "https://arthroscenter.com/cartilage-restoration" },

    // Shoulder & Elbow
    { category: "Shoulder & Elbow", title: "Rotator Cuff Repair", url: "https://arthroscenter.com/rotator-cuff-repair" },
    { category: "Shoulder & Elbow", title: "Massive Rotator Cuff Repair", url: "https://arthroscenter.com/massive-rotator-cuff-repair" },
    { category: "Shoulder & Elbow", title: "Rotator Cuff Reconstruction", url: "https://arthroscenter.com/rotator-cuff-reconstruction" },
    { category: "Shoulder & Elbow", title: "Bankart Repair", url: "https://arthroscenter.com/bankart-repair" },
    { category: "Shoulder & Elbow", title: "Latarjet Procedure", url: "https://arthroscenter.com/latarjet-procedure" },
    { category: "Shoulder & Elbow", title: "SLAP Repair", url: "https://arthroscenter.com/slap-repair" },
    { category: "Shoulder & Elbow", title: "Tennis Elbow Surgery", url: "https://arthroscenter.com/tennis-elbow-surgery" },
    { category: "Shoulder & Elbow", title: "Golfer's Elbow Treatment", url: "https://arthroscenter.com/golfers-elbow-treatment" },
    { category: "Shoulder & Elbow", title: "Elbow Arthroscopy", url: "https://arthroscenter.com/elbow-arthroscopy" },
    { category: "Shoulder & Elbow", title: "UCL Reconstruction", url: "https://arthroscenter.com/ucl-reconstruction" },

    // Hip & Pelvis
    { category: "Hip & Pelvis", title: "Total Hip Replacement", url: "https://arthroscenter.com/total-hip-replacement" },
    { category: "Hip & Pelvis", title: "Hip Resurfacing", url: "https://arthroscenter.com/hip-resurfacing" },
    { category: "Hip & Pelvis", title: "Revision Hip Surgery", url: "https://arthroscenter.com/revision-hip-surgery" },
    { category: "Hip & Pelvis", title: "FAI Surgery", url: "https://arthroscenter.com/fai-surgery" },
    { category: "Hip & Pelvis", title: "Labral Repair", url: "https://arthroscenter.com/labral-repair" },
    { category: "Hip & Pelvis", title: "Hip Impingement Treatment", url: "https://arthroscenter.com/hip-impingement-treatment" },
    { category: "Hip & Pelvis", title: "Pelvic Fracture Repair", url: "https://arthroscenter.com/pelvic-fracture-repair" },
    { category: "Hip & Pelvis", title: "Sacroiliac Joint Treatment", url: "https://arthroscenter.com/sacroiliac-joint-treatment" },

    // Spine
    { category: "Spine", title: "Cervical Disc Replacement", url: "https://arthroscenter.com/cervical-disc-replacement" },
    { category: "Spine", title: "Cervical Fusion", url: "https://arthroscenter.com/cervical-fusion" },
    { category: "Spine", title: "Cervical Laminectomy", url: "https://arthroscenter.com/cervical-laminectomy" },
    { category: "Spine", title: "Lumbar Fusion", url: "https://arthroscenter.com/lumbar-fusion" },
    { category: "Spine", title: "Disc Replacement", url: "https://arthroscenter.com/disc-replacement" },
    { category: "Spine", title: "Microdiscectomy", url: "https://arthroscenter.com/microdiscectomy" },
    { category: "Spine", title: "Spinal Stenosis Surgery", url: "https://arthroscenter.com/spinal-stenosis-surgery" },
    { category: "Spine", title: "Endoscopic Spine Surgery", url: "https://arthroscenter.com/endoscopic-spine-surgery" },
    { category: "Spine", title: "Percutaneous Procedures", url: "https://arthroscenter.com/percutaneous-procedures" },

    // Sports Medicine
    { category: "Sports Medicine", title: "ACL Injuries", url: "https://arthroscenter.com/acl-injuries" },
    { category: "Sports Medicine", title: "Meniscus Tears", url: "https://arthroscenter.com/meniscus-tears" },
    { category: "Sports Medicine", title: "Shoulder Dislocations", url: "https://arthroscenter.com/shoulder-dislocations" },
    { category: "Sports Medicine", title: "Ankle Sprains", url: "https://arthroscenter.com/ankle-sprains" },
    { category: "Sports Medicine", title: "Return to Sport Programs", url: "https://arthroscenter.com/return-to-sport-programs" },
    { category: "Sports Medicine", title: "Injury Prevention", url: "https://arthroscenter.com/injury-prevention" },
    { category: "Sports Medicine", title: "Sports Physicals", url: "https://arthroscenter.com/sports-physicals" },
    { category: "Sports Medicine", title: "Concussion Management", url: "https://arthroscenter.com/concussion-management" },
    { category: "Sports Medicine", title: "Overuse Injuries", url: "https://arthroscenter.com/overuse-injuries" },
    { category: "Sports Medicine", title: "Youth Sports Medicine", url: "https://arthroscenter.com/youth-sports-medicine" },

    // Hand & Wrist
    { category: "Hand & Wrist", title: "Carpal Tunnel Release", url: "https://arthroscenter.com/carpal-tunnel-release" },
    { category: "Hand & Wrist", title: "Trigger Finger Surgery", url: "https://arthroscenter.com/trigger-finger-surgery" },
    { category: "Hand & Wrist", title: "Dupuytren's Surgery", url: "https://arthroscenter.com/dupuytrens-surgery" },
    { category: "Hand & Wrist", title: "Hand Fracture Repair", url: "https://arthroscenter.com/hand-fracture-repair" },
    { category: "Hand & Wrist", title: "Wrist Arthroscopy", url: "https://arthroscenter.com/wrist-arthroscopy" },
    { category: "Hand & Wrist", title: "TFCC Repair", url: "https://arthroscenter.com/tfcc-repair" },
    { category: "Hand & Wrist", title: "Wrist Fracture Surgery", url: "https://arthroscenter.com/wrist-fracture-surgery" },
    { category: "Hand & Wrist", title: "Ganglion Cyst Removal", url: "https://arthroscenter.com/ganglion-cyst-removal" },
    { category: "Hand & Wrist", title: "Cubital Tunnel Surgery", url: "https://arthroscenter.com/cubital-tunnel-surgery" },
    { category: "Hand & Wrist", title: "Nerve Repair", url: "https://arthroscenter.com/nerve-repair" },
    { category: "Hand & Wrist", title: "Nerve Transfer", url: "https://arthroscenter.com/nerve-transfer" },

    // Foot & Ankle
    { category: "Foot & Ankle", title: "Bunion Surgery", url: "https://arthroscenter.com/bunion-surgery" },
    { category: "Foot & Ankle", title: "Hammertoe Correction", url: "https://arthroscenter.com/hammertoe-correction" },
    { category: "Foot & Ankle", title: "Plantar Fasciitis Surgery", url: "https://arthroscenter.com/plantar-fasciitis-surgery" },
    { category: "Foot & Ankle", title: "Achilles Repair", url: "https://arthroscenter.com/achilles-repair" },
    { category: "Foot & Ankle", title: "Ankle Arthroscopy", url: "https://arthroscenter.com/ankle-arthroscopy" },
    { category: "Foot & Ankle", title: "Ankle Replacement", url: "https://arthroscenter.com/ankle-replacement" },
    { category: "Foot & Ankle", title: "Ankle Fusion", url: "https://arthroscenter.com/ankle-fusion" },
    { category: "Foot & Ankle", title: "Ligament Reconstruction", url: "https://arthroscenter.com/ligament-reconstruction" },
    { category: "Foot & Ankle", title: "Jones Fracture", url: "https://arthroscenter.com/jones-fracture" },
    { category: "Foot & Ankle", title: "Turf Toe Treatment", url: "https://arthroscenter.com/turf-toe-treatment" },
  ];

  const groupedData = searchData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof searchData>);

  const handleSelect = (url: string) => {
    window.open(url, '_blank');
    setOpen(false);
  };

  return (
    <>
      <div className="relative flex-1">
        <Button
          variant="ghost"
          className="w-full justify-start bg-slate-700 border-slate-600 text-slate-400 hover:bg-slate-600 hover:text-white"
          onClick={() => setOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          Search procedures, conditions...
        </Button>
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-start bg-slate-700 border-slate-600 text-slate-400 hover:bg-slate-600 hover:text-white"
          >
            <Search className="mr-2 h-4 w-4" />
            Search procedures, conditions...
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0" align="start">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search procedures, conditions..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {Object.entries(groupedData).map(([category, items]) => (
                <CommandGroup key={category} heading={category}>
                  {items.map((item) => (
                    <CommandItem
                      key={item.title}
                      onSelect={() => handleSelect(item.url)}
                      className="cursor-pointer"
                    >
                      {item.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SearchCommand;
