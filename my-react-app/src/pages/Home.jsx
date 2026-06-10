import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Courses from "../components/Courses";

import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Companies from "../components/Companies";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Courses />
      <WhyChoose />
      <Companies />
      <Testimonials />
      
    </>
  );
}