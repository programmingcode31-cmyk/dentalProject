import { Contact } from "./components/layout/contact";
import { Card } from "./components/layout/card";
import {  CarouselSize } from "./components/layout/carousel";
import Map from "./components/layout/map";
import { About } from "./components/layout/about";
import { CarouselServices } from "./components/layout/carouselServices";

export default function Home() {

  return (
    <main className="p-2">
      <section className="mb-12">
        <Contact />
        <About />
      </section>
      <section className="flex flex-col mb-12">
       <div className="bg-gray-100 py-12 dark:bg-slate-800 mb-12">
          <p className="flex flex-col text-5xl font-bold text-center mb-7 text-green-900 dark:text-green-700">
            <span>Welcome to </span>
            <span>Heavenly Touch Dental Clinic!</span>
          </p>
          <p className="flex flex-col text-2xl text-center font-md">
            <span>We continuously invest in the professional development of our team</span>
            <span>staying up-to-date with the latest advancements in dentistry. Rest assured, when you choose our clinic,</span>
            <span>you are choosing exceptional care delivered with precision and compassion.Your smile is our priority;</span>
            <span>we are here to provide you with the best dental care.</span>
          </p>
        </div>
        <CarouselSize/>
        <Card />
        <Map />
      </section>
      <section>
          <div className='mb-12'>
            <div>
              <h1 className='text-6xl text-center font-medium mb-7'>Our Services</h1>
            </div>
            <CarouselServices/>
          </div>
      </section>
    </main>
  );
}
