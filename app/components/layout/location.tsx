import React from 'react'

export const Location = () => {
  return (
    <div className='flex item self-center shadow-md w-fit rounded-br-2xl rounded-tl-2xl border text' style={{"height":"500px","background":"transparent","backdropFilter":"blur(10px)"}}>
        <div className='w-3/5 text-center items-center flex flex-col justify-center'>
            <div className='w-5/6 mb-12'>
                <p className='font-medium text-lg'>Magsaysay Boulevard Sampaloc, Manila 1015, Philippines, Manila, Philippines</p>
            </div>
            <div className='w-5/6 '>
                <a className='py-2 px-7 rounded-sm font-medium border bg-blue-700 text-white hover:bg-blue-800' href="https://maps.app.goo.gl/5E2NoNu8Y87n83Gu7" target='__blank'>Our Location</a>
            </div>
        </div>
        <div className='w-2/5 flex items-center'>
            <img src="/upload/location.jpg" alt="Location" className='w-full rounded-br-2xl h-full'/>
        </div>
    </div>
  )
}
