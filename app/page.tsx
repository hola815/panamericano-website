import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import OnlineEducation from "@/components/OnlineEducation";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Accesos from "@/components/Accesos";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <ScrollProgressBar />

      {/* GLOBAL-NAV */}
      <Navbar />

      {/* HOME-A-HERO */}
      <Hero />

      {/* HOME-B-STATS */}
      <Stats />

      {/* HOME-C-ABOUT */}
      <About />

      {/* HOME-D-SERVICES */}
      <Programs />

      {/* HOME-E-ONLINE */}
      <OnlineEducation />

      {/* HOME-F-NEWS */}
      <News />

      {/* HOME-G-ACCESOS */}
      <Accesos />

      {/* HOME-H-CTA-CONTACT */}
      <Contact />

      {/* HOME-H-DECORATION — decorative student images at Contact/Footer boundary */}
      <div className="relative h-0 overflow-visible z-20 pointer-events-none">
        {/* Image N1: Student left (bild9.png) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bild9.png"
          alt=""
          className="absolute left-0 sm:left-6 lg:left-16 h-36 sm:h-52 lg:h-72 w-auto object-contain object-bottom -bottom-24 sm:-bottom-20 lg:-bottom-16"
          style={{
            maskImage: "radial-gradient(ellipse 78% 92% at 50% 48%, black 52%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 78% 92% at 50% 48%, black 52%, transparent 100%)",
          }}
        />
        {/* Image N2: Student right (bild13.png) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bild13.png"
          alt=""
          className="absolute right-0 sm:right-6 lg:right-16 h-36 sm:h-52 lg:h-72 w-auto object-contain object-bottom -bottom-24 sm:-bottom-20 lg:-bottom-16"
        />
      </div>

      {/* GLOBAL-FOOTER */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
