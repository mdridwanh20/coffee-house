import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='flex w-full h-screen flex-col items-center justify-center'>
        <h1 className='font-bold text-3xl'>Page Not Found</h1>
        <NavLink to='/' className='btn'>  Go Back </NavLink>
    </div>
  )
}
