import Link from "next/link"
import { ArrowUpRight,Facebook, Instagram } from 'lucide-react';
import { ModeToggle } from "./layout/darkmode";

export const Header = () => {
  return (
    <header>
        <div className="flex mr-4 items-center">
            <div className="mr-3 flex">
              <Link href="https://www.facebook.com/profile.php?id=100070868628027" target="_blank" className="p-2 border bg-blue-700  rounded-full text-white mr-2 hover:bg-blue-800">
                <Facebook height={22} width={22}/>
              </Link>
              <Link href="#" target="_blank" className="p-2 border bg-red-700  rounded-full text-white hover:bg-red-800">
                <Instagram height={22} width={22}/>
              </Link>
            </div>
            <div className="mr-3 border py-2 px-4 rounded-2xl bg-green-700 hover:bg-green-800">
                <Link href="/pages/Appointment" className="flex items-center text-gray-200">
                    <span className="uppercase font-md max-sm:text-sm">Book an appointment</span>
                    <ArrowUpRight height={20} width={20}/>
                </Link>
            </div>
            <ModeToggle />
        </div>
    </header>
  )
}