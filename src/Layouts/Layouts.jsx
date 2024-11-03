import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function Layouts() {
  return (
    <div>
          <Toaster></Toaster>
          <div className='h-20 border'>
            <Navbar></Navbar>
          </div>

          <div>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>

    </div>
  )
}
