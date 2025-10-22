"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { Fetch } from "@/app/hooks/fetch"

export const CarouselSize  = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )
    
      const urlFacilities  = "http://localhost:8000/facilities"
    const {facilities:Facilities} = Fetch(urlFacilities)


  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mb-12 border-y"
      onMouseEnter={plugin.current.isPlaying}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Facilities && Facilities.map((item, index) => (
          <CarouselItem key={index} className="basis-1/3  p-0 max-sm:basis-full">
            <div >
              <Card className="h-full">
                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image src={item.image} alt="Upload Image" fill style={{ objectFit: 'cover' }} />
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
