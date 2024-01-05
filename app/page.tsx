import { FifthSection } from "./first-page/fifth-section";
import { FirstSection } from "./first-page/first-section";
import { Footer } from "./first-page/footer";
import { FourthSection } from "./first-page/fourth-section";
import { SecondSection } from "./first-page/second-section";
import { ThirdSection } from "./first-page/third-section";

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
