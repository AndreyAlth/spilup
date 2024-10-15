import React from 'react'
import { AngleIcon, CheckIcon } from '@radix-ui/react-icons'
import { Check } from 'lucide-react'

export const Services = () => {
  return (
    <div className='grid grid-cols-6 gap-5 bg-pink-500 m-4'>
        <div className='flex flex-col justify-center items-center'>
            <CheckIcon/>
            <Check/>
            <p className='text-center'>Reconocimiento facial, identificación de cara, incluso con gafas</p>
        </div>

    </div>
  )
}
