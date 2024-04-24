import Banner from "@/components/Banner/Banner";
import Events from "@/components/Events/Events";
import Host from "@/components/Host/Host";
import QrSection from "@/components/QrSection/QrSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Banner />
    <Events />
    <Host />
    <QrSection />
    </div>
  );
}
