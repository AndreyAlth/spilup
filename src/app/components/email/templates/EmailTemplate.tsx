import * as React from 'react'
import { Tailwind } from '@react-email/tailwind'

function EmailTemplate({ email, message, subject, name, phone }) {
  return (
    <Tailwind>
      <div className='bg-black w-full h-full text-white'>
        <div className='max-w-sm mx-auto py-14'>
          <div className='text-4xl font-bold p-4 border-2 border-white rounded-lg w-fit mb-24'>
            Andreyalth.site
          </div>
          <div className='text-xl font-semibold'>Message sent</div>
          <div className=''>
           You sent a message to  <span className='italic'>andrey.site</span>{' '}
          </div>
          <div className='mb-5'>
            From <span className='italic'>{email}</span>
          </div>

          <div className='text-lg italic font-medium'>Subject</div>
          <div className='mb-5'>{subject}</div>
          <div className='text-lg italic font-medium'>Message</div>
          <div>{message}</div>
          <div className='text-lg italic font-medium'>Name</div>
          <div>{name}</div>
          <div className='text-lg italic font-medium'>Phone</div>
          <div>{phone}</div>
        </div>
      </div>
    </Tailwind>
  )
}

export default EmailTemplate
