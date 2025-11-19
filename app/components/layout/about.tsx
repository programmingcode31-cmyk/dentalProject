import SplitText from '@/components/SplitText'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  FadeInSection from "@/components/FadeInSection";

export const About = () => {
  return (
    <FadeInSection>
      <div className="flex items-center justify-center max-sm:flex-col max-sm:">
          <div className="max-sm:mb-4">
          <div className="flex items-start justify-start mb-12 max-sm:items-center max-sm:justify-center">
              <Image src="/upload/heavenly.png" alt="Uploaded Image" width={150} height={150}/>
              <div className="flex flex-col pt-12">
              <span className="text-5xl text-green-700 font-bold mb-2 border-b border-green-700 max-sm:text-4xl">Heavenly Touch</span>
              <SplitText
                  text="We care for your Smile!"
                  className="text-3xl font-semibold w-fit max-sm:text-2xl"
                  delay={150}
                  duration={0.7}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
              />

          </div>
          </div>
          <p className="flex flex-col text-start text-2xl flex-wrap mb-7 max-sm:text-center">
            <span>The center For Holistic Approach of Dentistry</span>
            <span>We address the psychological, familial, societal, ethical,</ span>
            <span> and spiritual as well as biological dimensions of health and illness. </span>
          </p>
          <div className="max-sm:flex max-sm:justify-center">
            <Link href="/pages/Appointment" className="flex items-center text-white mr-3 shadow py-2 px-4 rounded-2xl bg-gray-200 w-fit dark:border transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-xl">            
              <span className="uppercase font-bold text-green-700 hover:text-green-800">Book now</span>
            </Link>
          </div>
          </div>
          <div className="">
            <Image src="/background/dental.png" alt="Uploaded Image" className=" top-0 right-0" width={700} height={700}/>
          </div>
      </div>
    </FadeInSection>
  )
}