import React from 'react'
import { Form } from './components/form'

export default function Appointment(){
  return (
    <main className='mb-12'>
        <section className='mb-7 text-center mt-23 text-6xl font-medium max-sm:text-4xl max-sm:mt-12'>
            <h1>Book an Appointment with Us!</h1>
        </section>
        <section className='flex flex-col items-center'>
            <Form />
        </section>
    </main>
  )
}





