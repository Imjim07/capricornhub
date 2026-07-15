import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Products from "@/components/Products";
import Lab from "@/components/Lab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NodeSpine from "@/components/NodeSpine";
import NodeDivider from "@/components/NodeDivider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <NodeSpine />
      <Hero />
      <NodeDivider/>
      <Services />
      <NodeDivider/>
      <Work />
      <NodeDivider/>
      <Products />
      <NodeDivider/>
      <Lab />
      <NodeDivider/>
      <Contact />
      <NodeDivider/>
      <Footer />
    </main>
  );
}