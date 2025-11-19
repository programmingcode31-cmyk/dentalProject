'use client'
import { CarouselSize } from '@/app/components/layout/carousel'
import React, {useState}from 'react'
import { Services } from './components/card'
import { Modal } from './components/modal'
import FadeInSection from '@/components/FadeInSection'

export default function Service(){

  type service = {
    offer:string,
    content:string
    image:string
    other:string[]
}

  const [filter,setFilter] = useState<service | null>(null)
  const [modal, setModal] = useState(false)
  
  return (
    
    <main>
      
      <section className='py-12 m-auto'>
        <FadeInSection>
        <CarouselSize />
        </FadeInSection>
        <FadeInSection>
        <div className='mb-12'>
          <h1 className='text-6xl text-center font-medium mb-7'>What We Offer</h1>
          <p className='text-center text-2xl'>Here at Heavenly Touch dental clinic we offer the best procedures.</p>
        </div>
        </FadeInSection>
        <FadeInSection>
        <div className='max-w-7xl m-auto py-7 '>
          
          <div className='flex flex-wrap justify-start other:justify-evenly '>
            <Services  setFilter={setFilter} setModal={setModal}/>
          </div>
          
        </div>
        </FadeInSection>
        {
          modal && <Modal filter={filter} setModal={setModal}/>
        }
      </section>
      
    </main>
    
  )
}