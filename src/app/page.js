import Hero from "@/_components/Hero";
import RootLayout from "./layout";
import Experiences from "@/_components/Experiences";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <Experiences />
    </RootLayout>
  );
}
