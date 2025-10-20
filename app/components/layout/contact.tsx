import { Phone,Clock  } from 'lucide-react';

export const Contact = () => {
  return (
    <div className='flex justify-between max-sm:text-sm'>
        <div className='flex items-center'>
            <Phone width={20} height={20} className='mr-3 max-sm:hidden'/>
            <span className='max-sm:flex max-sm:flex-col'>
                Smart: <span className='text-white-700'>(+63) 998-553-7185</span>
            </span>
        </div>
        <div className='flex items-center'>
            <Clock width={20} height={20} className='mr-3 max-sm:hidden'/>
            <span className='max-sm:flex max-sm:flex-col'>Clinic Hours: <span className='text-white-700'>Tuesday - Sunday, 10:00 AM to 7:00 PM</span></span>
        </div>
    </div>
  )
}