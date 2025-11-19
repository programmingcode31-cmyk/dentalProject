import { Contact } from "./components/layout/contact";
import { Card } from "./components/layout/card";
import {  CarouselSize } from "./components/layout/carousel";
import { About } from "./components/layout/about";
import { CarouselServices } from "./components/layout/carouselServices";
import { Location } from "./components/layout/location";
import  FadeInSection from "@/components/FadeInSection";

export default function Home() {

  return (
    <main className="p-2">
      <section className="mb-17">
        <Contact />
        <About />
      </section>
      <section className="flex flex-col mb-17">
      <FadeInSection>
        <div className="bg-gray-100 py-12 dark:bg-slate-800 mb-17">
            <p className="flex flex-col text-5xl font-bold text-center mb-7 text-green-900 dark:text-green-700">
              <span>Welcome to </span>
              <span>Heavenly Touch Dental Clinic!</span>
            </p>
            <p className="flex flex-col text-2xl text-center font-md">
              <span>We focus on more than just your smile.</span>
              <span>Our holistic approach prioritizes your overall well-being, nurturing the body, mind, and spirit.</span>
              <span>We’re dedicated to supporting you and your family on the path to lasting oral health,</span>
              <span>offering the highest quality dental care every step of the way.</span>
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <CarouselSize/>
        </FadeInSection>
        <FadeInSection>
          <Card />
        </FadeInSection>
        <FadeInSection>
          <div className="flex justify-center">
            <Location />
          </div>
        </FadeInSection>
      </section>
      <FadeInSection>
        <section>
            <div className='mb-12'>
              <div>
                <h1 className='text-6xl text-center font-medium mb-7'>Our Services</h1>
              </div>
              <CarouselServices/>
            </div>
        </section>
      </FadeInSection>
    </main>
  );
}
