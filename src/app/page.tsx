import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NodeDivider from "@/components/NodeDivider";
import Reveal from "@/components/Reveal";
// import Lab from "@/components/Lab";

// Products has been removed entirely. Pricing is no longer a homepage
// section — the tiers live under each service at /services/<slug>.
//
// Hero is deliberately not wrapped in Reveal: it is above the fold, so a
// reveal there is a load animation rather than a scroll one, and it would
// delay the largest contentful paint.

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
      {/* Lab section commented out.
      <Lab />
      <NodeDivider/>
      */}
      <Reveal>
        <Contact />
      </Reveal>
      <NodeDivider/>
      <Footer />
    </main>
  );
}
