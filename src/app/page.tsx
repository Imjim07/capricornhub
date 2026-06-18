import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Products from "@/components/Products";
import Lab from "@/components/Lab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Products />
      <Lab />
      <Contact />
      <Footer />
    </main>
  );
}