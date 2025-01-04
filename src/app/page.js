import Hero from "@/_components/Hero";
import RootLayout from "./layout";
// import Experiences from "@/_components/Experiences";
import Contact from "@/_components/Contact";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      {/* <Experiences /> */}
      <Contact />
    </RootLayout>
  );
}
