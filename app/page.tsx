import Image from "next/image";
import { FirstSection } from "./first-page/first-section";
import { SecondSection } from "./first-page/second-section";
import { ThirdSection } from "./first-page/third-section";
import { FourthSection } from "./first-page/fourth-section";
import { FifthSection } from "./first-page/fifth-section";
import { Footer } from "./first-page/footer";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
}
