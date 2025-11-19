import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram,MapPin,Phone,Mail  } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-green-300 px-33 py-7 dark:bg-green-500 max-sm:px-7">
        <div className="flex mb-17 max-sm:flex-col ">
            <div className="w-1/2 max-sm:w-full max-sm:items-center max-sm:justify-center max-sm:flex max-sm:flex-col max-sm:mb-4">
                <div className="flex items-center mb-7">
                    <Image src="/upload/heavenly.png" alt="Uploaded Image" width={77} height={77}/>
                    <div className="flex flex-col">
                        <span className=" text-green-700 font-bold text-2xl">Heavenly Touch</span>
                        <span className="text-xl font-normal">We care for your Smile!</span>
                    </div>
                </div>
                <div className="w-1/2 mb-7 max-sm:w-full max-sm:text-center">
                    <span className="flex max-sm:flex-col max-sm:items-center"><MapPin />Magsaysay Boulevard Sampaloc, Manila 1015, Philippines, Manila, Philippines</span>
                </div>
               <div className="flex flex-col max-sm:text-center">
                 <span className="mb-3">Follow Us:</span>
                 <div className="mr-3 flex">
                    <Link href="https://www.facebook.com/profile.php?id=100070868628027" target="_blank" className="p-2 border bg-blue-700  rounded-full text-white mr-2 hover:bg-blue-800">
                        <Facebook height={22} width={22}/>
                    </Link>
                    <Link href="#" target="_blank" className="p-2 border bg-red-700  rounded-full text-white hover:bg-red-800">
                        <Instagram height={22} width={22}/>
                    </Link>
                </div>
               </div>
            </div>
            <div className="w-1/2 flex max-sm:flex-col max-sm:w-full max-sm:text-center">
                <div className="w-1/2 flex flex-col max-sm:w-full max-sm:mb-4">
                    <div className="mb-7 flex flex-col">
                        <span className="text-lg mb-3 font-medium">Our Services</span>
                        <p className="flex flex-col">
                            <span>Braces</span>
                            <span>Veneers</span>
                            <span>Cleaning</span>
                            <span>Root Canal</span>
                            <span>Dental X-Ray</span>
                            <span>Treatment</span>
                            <span>Dentures</span>
                            <span>Crown & Bridges</span>
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-lg mb-3 font-medium">Hours</span>
                        <p className="flex flex-col">
                            <span>Tuesday- Sunday</span>
                            <span>10:00 AM to 7:00 PM</span>
                        </p>
                    </div>
                </div>
                <div className="w-1/2 max-sm:w-full max-sm:text-center ">
                    <div className="flex flex-col">
                        <span className="text-lg mb-3 font-medium">Contact Us</span>
                        <p className="flex flex-col ">
                            <span className="flex items-center max-sm:flex-col">
                                <Phone className="mr-2" width={17} height={17}/>
                                Smart: (+63) 998-553-7185
                            </span>
                            <span className="flex items-center max-sm:flex-col">
                                <Mail  className="mr-2" width={17} height={17}/>
                                rugasnelyn@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center">
            <span>© 2025 Heavenly Touch Dental Clinic . All Rights Reserved</span>
        </div>
    </footer>
  )
}