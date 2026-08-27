import { Artist } from "./components/artist";
import { Booking } from "./components/booking";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Manifesto } from "./components/manifesto";
import { MobileBar } from "./components/mobile-bar";
import { Process } from "./components/process";
import { Studio } from "./components/studio";
import { StylesSection } from "./components/styles-section";
import { Works } from "./components/works";

export default function Index() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Works />
      <StylesSection />
      <Artist />
      <Process />
      <Studio />
      <Booking />
      <Contact />
      <Footer />
      <MobileBar />
    </main>
  );
}
