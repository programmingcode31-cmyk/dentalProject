"use client"
import { Home, Inbox, MapPin, SquareSlash ,UserPen,UsersRound } from "lucide-react"
import Link from "next/link"
import Image from 'next/image';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarHeader
} from "@/components/ui/sidebar"
import { SidebarComponents } from "./layout/sidebarcomponents";
import { useState } from "react";


// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    icon: Inbox,
    navigation:[
        {
            label:"Clinic Profile",
            url:"/pages/ClinicProfile",
            icon:UserPen 
        },
        {
            label:"Specialists",
            url:"/pages/Specialists",
            icon:UsersRound 
        },
    ]
  },
  {
    title: "Services",
    url: "/pages/Services",
    icon: SquareSlash  ,
  },
  {
    title: "Location",
    url: "/pages/Location",
    icon: MapPin ,
  },
]

export function AppSidebar() {
  const [active,setActive] = useState(false)
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className="font-bold mb-4 border-b pb-4">
            <Link href="/" className="flex w-full justify-between">
               <div className="flex items-center">
                  <Image src="/upload/heavenly.png" alt="Uploaded Image" width={33} height={33}/>
                  <div className="flex flex-col">
                    <span className=" text-green-700 font-bold">Heavenly Touch</span>
                    <span className="text-sm font-normal">We care for your Smile!</span>
                  </div>
                </div>
            </Link>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item,index) => (
                <SidebarComponents 
                  key={index} 
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  item={item} 
                  active={active} 
                  setActive={setActive}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}