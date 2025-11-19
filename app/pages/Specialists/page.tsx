// app/page.tsx

import Image from "next/image";
import RotatingText from '@/components/RotatingText';
 import TextType from '@/components/TextType';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 transition-colors duration-300">
      
      <div className="flex flex-col items-center space-x-2">
        <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white flex-shrink-0">
        <div className="relative overflow-hidden">
          <RotatingText
            texts={['Meet', 'Your', 'Friendly', 'Dentist!']}
            mainClassName="px-2 sm:px-2 md:px-3 text-black dark:text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </span>
      </div>

      <Image
        src="/upload/Dentist.jpg"
        alt="Dentist illustration"
        width={300}
        height={300}
        className="rounded-2xl shadow-lg mt-6"
        priority
      /> 

      {/* Name and Title Section */}
      <div className="mt-6 flex flex-col items-center text-center space-y-2">

        {/* Static Doctor Name */}
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 dark:text-blue-400 tracking-wide">
          Dr. Nel Rugas
        </h2>

        {/* Typing Text */}
        <TextType 
          text={["Orthodontics", "", "Owner"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </div>

      <p className="mt-6 text-gray-700 dark:text-gray-300 text-center max-w-md">
        Your smile is in good hands! <br/>
        Ready to help you maintain a healthy smile.
      </p>

    </main>
  );
}