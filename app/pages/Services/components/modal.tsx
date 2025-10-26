import React from 'react'

type service = {
    offer:string,
    content:string
    image:string,
    other:string[]
}

type ChildProps = {
    filter:service | null
    setModal:React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal: React.FC<ChildProps> = ({filter,setModal}) => {


  return (
    <div>
        <div  tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full max-sm:h-full " style={{"backgroundColor":"rgba(0, 0, 0, 0.2)"}}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
               {
                filter &&
                 <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {filter.offer}
                        </h3>
                        <button onClick={() => setModal(false)} type="button" className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className='p-4 space-y-4'>
                       {
                        filter.other.map((item,index) => (
                            <ul key={index}>
                                <li>{item}</li>
                            </ul>
                        ))
                       }
                    </div>
                </div>
               }
            </div>
        </div>
    </div>
  )
}
