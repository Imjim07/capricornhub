import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Lab from "@/components/Lab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NodeDivider from "@/components/NodeDivider";

// Products has been removed entirely. Pricing is no longer a homepage
// section — the tiers live under each service at /services/<slug>.

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NodeDivider/>
      <Services />
      <NodeDivider/>
      <Work />
      <NodeDivider/>
      <Lab />
      <NodeDivider/>
      <Contact />
      <NodeDivider/>
      <Footer />
    </main>
  );
}
