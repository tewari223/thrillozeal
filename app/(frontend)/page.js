import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ourpackages from "@/components/Ourpackages";
import Start from "@/components/Start";
import Testimonials from "@/components/Testimonials";
import Whychooseus from "@/components/Whychooseus";
import Image from "next/image";

export default function Home() {
  return (
    <div>

    <Hero/>
    <Start/>
    <Whychooseus/>
    <Ourpackages/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}
