import React from 'react'
import Link from 'next/link'
import {ChevronRight} from "lucide-react"
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { LucideProps } from "lucide-react";

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type SidebarPath = {
    title:string
    url:string
    icon:React.ElementType<LucideProps>
    navigation?: {
        url: string
        label: string
        icon: React.ElementType<LucideProps>
    }[]
}

type ChildProps = {
  item:SidebarPath
  active : boolean
  setActive:React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarComponents:React.FC<ChildProps> = ({item,active,setActive}) => {
    const [dropDown, setDropDown] = useState(false)

    const isActive = "bg-blue-700 text-white hover:bg-blue-800"
    const inActive = "hover:bg-slate-200 rounded dark:hover:bg-slate-700"
    const pathname = usePathname()

  return (
        <SidebarMenuItem >
            <SidebarMenuButton className="flex flex-col items-start h-fit py-0 px-0 mb-2">
            {
                item.url?
                (
                    <Link className={`${item.url===pathname?isActive:""} w-full p-1 rounded-sm flex items-center `} href={item.url} onClick={() => setActive(true)}>
                        <item.icon width={20}/>
                        <span className="ml-2 font-medium">{item.title}</span>
                    </Link>
                ):
                (
                    <div className={`${pathname === "/pages/ClinicProfile"?"bg-slate-100 dark:bg-slate-800":""} ${pathname === "/pages/Specialists"?"bg-slate-100 dark:bg-slate-800":""} p-1 w-full `} onClick={() => setActive(!active)}>
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
                                    <div key={index} className={`${items.url===pathname?isActive:inActive} rounded-sm py-1 pl-7`}>
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
  )
}
