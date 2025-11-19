import { Users,IdCard,Smile,Handshake  } from 'lucide-react';

const service = [
    {
        icon:Users,
        header:"Accommodating service",
        content:"Our team is committed to ensuring your experience with us is the best it can be.",
        bg:"bg-green-200"
    },
    {
        icon:Smile ,
        header:"Advance Treatment",
        content:"Discover cutting-edge treatments for optimal oral health and transformative results.",
        bg:"bg-orange-200"
    },
    {
        icon:IdCard ,
        header:"Experienced Dentist​",
        content:"Skilled dentists providing exceptional care for your dental needs and goals.",
        bg:"bg-blue-200"
    },
    {
        icon:Handshake  ,
        header:"Guaranteed Results​​",
        content:"Experience guaranteed results and smile with confidence at Sunny Dental.",
        bg:"bg-yellow-200"
    },
]

export const Card = () => {
  return (
    <div className='flex justify-around flex-wrap mb-17 max-sm:flex-col '>
        {
            service.map((item,index) => (
                <div key={index} className='p-2 hover:scale-110 transition delay-150 duration-300 ease-in-out max-sm:mb-5'>
                    <div className={`border px-3 py-7 shadow flex flex-col text-center items-center h-full rounded-lg max-w-80 ${item.bg} max-sm:max-w-full`}>
                        <div className='mb-4 text-black bg-white rounded-full p-4'>
                            <item.icon height={33} width={33}/>
                        </div>
                        <div className='flex flex-col text-black items-center'>
                            <span className='mb-4 text-2xl'>{item.header}</span>
                            <span className='text-xl w-3/5'>{item.content}</span>
                        </div>
                        </div>
                </div>
            ))
        }
    </div>
  )
}
