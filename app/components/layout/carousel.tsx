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

export function CarouselSize() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    const facilities = [
        {
            image:"/carousel/fac1.jpg"
        },
        {
            image:"/carousel/fac2.jpg"
        },
        {
            image:"/carousel/fac3.jpg"
        },
        {
            image:"/carousel/fac4.jpg"
        },
        {
            image:"/carousel/fac5.jpg"
        },
    ]
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mb-12 border-y"
      onMouseEnter={plugin.current.isPlaying}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {facilities.map((item, index) => (
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
