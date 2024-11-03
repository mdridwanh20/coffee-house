import React from 'react'

export default function Heading({title, subTitle}) {

// const Heading = ({title, subTitle})

  return (
    <div className='flex justify-center items-center flex-col space-y-2 px-2 py-16'>
        <h1 className='lg:text-4xl text-xl font-thin mb-2'> {title} </h1>
        <p className=' text-gray-600 text-center lg:text-lg font-thin'> {subTitle} </p>
    </div>
  )
}
