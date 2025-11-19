"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"
import { Fetch } from "@/app/hooks/fetch"


export const CarouselServices = () => {
    
    // const urlServices = "http://localhost:8000/services"
    // const {services:Services} = Fetch(urlServices)
    const {services:Services} = Fetch()

  return (
    <Carousel className="max-w-6xl  m-auto mb-17 border-y max-sm:w-xs">
      <CarouselContent>
        {Services && Services.map((item, index) => (
          <CarouselItem key={index} className="basis-1/3  p-0 max-sm:basis-full relative">
            <div >
              <Card className="h-full">
                <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                    <Image src={item.image} alt="Upload Image"  fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
              </Card>
              <div className="absolute top-1/4 text-center w-full text-2xl">
                <h1 className="text-2xl w-1/2 rounded-r-full font-bold text-white" style={{"backgroundColor":"rgba(0,0,0,0.5)"}}>{item.offer}</h1>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex">
        <CarouselPrevious className="cursor-pointer"/>
        <CarouselNext className="cursor-pointer"/>
      </div>
    </Carousel>
  )
}
