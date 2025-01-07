import Hero from "@/_components/Hero";
import AboutMe from "@/_components/AboutMe";
import RootLayout from "./layout";
import Experiences from "@/_components/Experiences";
import Projects from "@/_components/Projects";
import Contact from "@/_components/Contact";
import Certifications from "@/_components/Certifications";
import Footer from "@/_components/Footer";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <AboutMe/>
      <Experiences />
      <Projects />
      <Certifications/>
      <Contact />
      <Footer />
    </RootLayout>
  );
}
