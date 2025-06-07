export const metadata = {
  title: 'Pranso AI - Transforming Business with AI Solutions',
  description: 'Discover how AI can enhance your business efficiency.',
  openGraph: {
    title: 'Pranso AI - Transforming Business with AI Solutions',
    description: 'Discover how AI can enhance your business efficiency.',
    url: 'https://ai1-dun.vercel.app/',
    siteName: 'Pranso AI',
    images: [
      {
        url: 'https://ai1-dun.vercel.app/preview.png',
        width: 1200,
        height: 630,
        alt: 'Pranso AI preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranso AI - Transforming Business with AI Solutions',
    description: 'Discover how AI can enhance your business efficiency.',
    images: ['https://ai1-dun.vercel.app/preview.png'],
  },
};

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
