import React from 'react'
import Image from 'next/image'
import { Fetch } from '@/app/hooks/fetch'

type service = {
    offer:string,
    content:string
    image:string
    other:string[]
}

type ChildProps = {
  setFilter:React.Dispatch<React.SetStateAction<service | null>>
  setModal:React.Dispatch<React.SetStateAction<boolean>>
}


export const Services:React.FC<ChildProps> = ({setFilter,setModal}) => {
  // const url = "http://localhost:8000/services"
  // const {services:services} = Fetch(url)
  const {services:services} = Fetch()

  function handleFilter(id: number) {
    const getService = services[id];
    
    setFilter(getService);
    setModal(true)
  }

  return (
    <>
      {
        services.map((item,index) => (
          <div key={index} className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3 max-sm:max-w-full">
                <Image className="mb-4 rounded-t-lg h-1/2 w-full border-b" src={item.image} alt="Upload Image" height={400} width={400}/>
              <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.offer}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.content}</p>
                  </div>
                
              </div>
              <button onClick={() => handleFilter(index)} className="cursor-pointer absolute bottom-0 m-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </button>
          </div>
        ))
      }
    </>
  )
}
