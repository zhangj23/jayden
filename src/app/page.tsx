import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AlphaDashboard from "@/components/AlphaDashboard";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <AlphaDashboard />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
