'use client';

import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';


export const Form = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_bit1gwj', 
        'template_2un9g5k',
        formRef.current,
        {
          publicKey: 'kFLCFdyhtBX6tVuBr',
        }
      )
      .then(
        () => {
          alert('✅ Email sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.error('❌ Email sending failed:', error.text);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <form className='w-3/5 max-sm:w-full max-sm:px-4'  ref={formRef} onSubmit={handleSubmit}>
        <span className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Name<span className='text-gray-500 ml-2'>(required)</span></span>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="first_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" name='firstname' id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First name" required/>
            </div>
            <div>
                <label htmlFor="last_name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Last name</label>
                <input type="text" name='lastname' id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last name" required />
            </div>
        </div>
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email address<span className='text-gray-500 ml-2'>(required)</span></label>
            <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example123@company.com"  required/>
        </div> 
        <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Phone number<span className='text-gray-500 ml-2'>(required)</span></label>
            <input type="tel" name='phonenumber' id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+63-9**-***-****"  required />
        </div>
        <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Subject<span className='text-gray-500 ml-2'>(required)</span></label>
            <input type="text" name='subject' id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Appointment"  required />
        </div>
        {/* <div className="mb-6">
            <label htmlFor="date" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Preferred Date of Appointment<span className='text-gray-500 ml-2'>(required)</span></label>
            <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div> 
         <div className="mb-6">
            <label htmlFor="time" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Preferred Time<span className='text-gray-500 ml-2'>(required)</span></label>
            <input type="time" id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div>  */}
        <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">How can we help you?<span className='text-gray-500 ml-2'>(required)</span></label>
            <textarea id="message" name='message' rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your request here..."></textarea>
        </div>
        <button 
          type="submit"
          className="bg-green-700 text-gray-100 
                    hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 
                    font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                    dark:bg-gray-200 dark:text-green-600 dark:hover:bg-gray-300 dark:focus:ring-gray-400">
          Submit
        </button>
    </form>
  )
}