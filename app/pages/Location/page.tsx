import { CarouselSize } from '@/app/components/layout/carousel'
import { Location } from '@/app/components/layout/location'
import React from 'react'

export default function Map(){
  return (
    <main>
      <section className='py-12'>
        <CarouselSize />
        <div className='flex flex-col items-center justify-center py-17'>
          <Location />
        </div>
      </section>
    </main>
  )
}
