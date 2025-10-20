"use client"
import { Home, Inbox, MapPin, ChevronRight, SquareSlash ,UserPen,UsersRound } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from 'next/image';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader
} from "@/components/ui/sidebar"
import { icon } from "@fortawesome/fontawesome-svg-core";


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
            url:"#",
            icon:UserPen 
        },
        {
            label:"Specialists",
            url:"#",
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
    url: "#",
    icon: MapPin ,
  },
]

export function AppSidebar() {
    const [dropDown, setDropDown] = useState(false)
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
                    <span className="text-sm font-normal">Smile like you mean it!</span>
                  </div>
                </div>
            </Link>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item,index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton className="flex flex-col items-start h-fit py-1">
                    {
                        item.url?
                        (
                            <Link className="flex items-center" href={item.url}>
                                <item.icon width={20}/>
                                <span className="ml-2 font-medium">{item.title}</span>
                            </Link>
                        ):
                        (
                            <div className="w-full">
                                <span className="flex items-center justify-between" onClick={() => setDropDown(!dropDown)}>
                                    <div className="flex items-center">
                                        <item.icon width={20}/>
                                        <span className="ml-2 font-medium">{item.title}</span>
                                    </div>
                                    <ChevronRight width={20} className={`${dropDown?"rotate-90":""} duration-300`}/>
                                </span>
                                <div className={`${dropDown?"":"hidden"}`}>
                                    {
                                         item.navigation && item.navigation.map((items,index) => (
                                            <div key={index} className="py-1 pl-7 hover:bg-slate-200 rounded dark:hover:bg-slate-700">
                                                <Link className="flex items-center" href={items.url}>
                                                    <items.icon width={20}/>
                                                    <span className="ml-2 font-medium">{items.label}</span>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}