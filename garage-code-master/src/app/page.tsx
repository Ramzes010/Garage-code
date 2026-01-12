import Header from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import  Process  from "@/components/sections/section_1/Process";
import  Courses  from "@/components/sections/section_2/Courses";
import  Reviews  from "@/components/sections/section_3/Reviews/Reviews";
import  FAQ  from "@/components/sections/section_3/FAQ/FAQ";



export default function HomePage() {
  return (
    <main>
      <div className="mainBG">
      <Header />
      <Hero />
      </div>
      <Process />
      <Courses />
      <Reviews />
      <FAQ />
    </main>
  );
}