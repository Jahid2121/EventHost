import Banner from "@/components/Banner/Banner";
import Events from "@/components/Events/Events";
import Host from "@/components/Host/Host";
import Payments from "@/components/Payments/Payments";
import QrSection from "@/components/QrSection/QrSection";

export default function Home() {
  return (
    <div>
    <Banner />
    <Events />
    <Host />
    <QrSection />
    <Payments />
    </div>
  );
}
