import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Divider = () => (
  <div className="flex justify-center my-8">
    <div className="w-[60%] h-1 rounded-full bg-black/25 dark:bg-white/10"></div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <Process />
      <Divider />
      <Testimonials />
      <Divider />
      <Industries />
      <Divider />
      <WhyUs />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
} 