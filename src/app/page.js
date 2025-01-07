import Hero from "@/_components/Hero";
import AboutMe from "@/_components/AboutMe";
import RootLayout from "./layout";
import Experiences from "@/_components/Experiences";
import Projects from "@/_components/Projects";
import Contact from "@/_components/Contact";
import Footer from "@/_components/Footer";
import Certifications from "@/_components/Certifications";

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
