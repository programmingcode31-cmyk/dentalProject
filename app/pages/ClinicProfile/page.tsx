'use client';

import BlurText from "@/components/BlurText";
import  FadeInSection from "@/components/FadeInSection";

export default function Page() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-10">
      {/* 👨‍⚕️ About Section */}
      <section className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left: Image / Video */}
        <FadeInSection>
           <div className="flex justify-center w-full lg:w-1/2">
            <video
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover" // Fixed height and object-fit for consistency
              src="/upload/aboutus2.mp4"
              controls
              autoPlay
              loop
              muted
            />
          </div>
        </FadeInSection>

        {/* Right: Text content */}
        <FadeInSection>
          <div className="relative bg-gray-300 text-[#1a1a1a] rounded-md shadow-md p-8 max-w-xl mx-auto lg:mx-0">
            {/* 🏷️ "About us" heading centered at top of card */}
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
              About us
            </h1>

            {/* ✨ BlurText with full paragraph content */}
            <BlurText
              text={`Welcome to Heavenly Touch Dental Clinic, your trusted partner in achieving a healthier, brighter smile.

For over 20 years, Heavenly Touch Dental Clinic, led by Dr. Nel Rugas, has been providing exceptional dental care for over 20 years. 
Their mission is to offer comprehensive, compassionate, and affordable dental services to help patients achieve optimal oral health. 
The clinic emphasizes a comfortable, personalized experience, whether for routine check-ups, smile makeovers, or advanced restorative treatments. 
With modern facilities and a caring team, they prioritize patient comfort and satisfaction. 
The clinic has built lasting relationships based on trust, transparency, and genuine care, ensuring that every visit is both relaxing and rewarding.`}
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg leading-relaxed text-gray-800"
            />
          </div>
        </FadeInSection>
      </section>

      {/* Vision and Mission Section */}
      <section className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left: Image / Video */}
        <FadeInSection>
          <div className="flex justify-center w-full lg:w-1/2">
            <video
              className="rounded-lg shadow-2xl w-full max-w-lg"  // Ensured consistent size with max-w-lg
              src="/upload/aboutus.mp4"
              controls
              autoPlay
              loop
              muted
            />
          </div>
        </FadeInSection>

        {/* Right: Text content */}
        <FadeInSection>
          <div className="relative bg-gray-300 text-[#1a1a1a] rounded-md shadow-md p-8 max-w-xl mx-auto lg:mx-0">
            {/* 🏷️ "Vision and Mission" heading centered at top of card */}
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Vision and Mission
            </h1>

            {/* ✨ BlurText with full paragraph content */}
            <BlurText
              text={`A mission for almost 20 years of service, a vision driven by passion and service fueled by care and compassion.
  We redefine the way you experience dental care with a Holistic Approach of Dentistry guided by love, care, and service by making our patients feel valued and every treatment is applied for everyone’s needs. We strive to preserve smiles and reduce fears. 
Join us in our journey, to make dental health a priority for everyone!
Together, let’s build a world we’re smiles shine bright!`}
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-lg leading-relaxed text-gray-800"
            />
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}