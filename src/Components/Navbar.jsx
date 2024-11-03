import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return (

    <div className='backdrop-blur-xl bg-white/70 py-5 z-10 fixed w-full '>

      <div className="flex items-center justify-between container m-auto ">

        <div className=" flex items-center justify-between w-full">

          <div className="dropdown ">

            <div tabIndex={0} role="button" className=" px-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-slate-100 h-[100vh]  z-[1] mt-8 w-44 p-2 ">

              <NavLink className='font-medium text-[15px]  border-gray-300 mt-5 py-2 rounded-lg mr-1' to='/category/Brewed Coffee'> Home </NavLink>

              <NavLink className='font-medium text-[15px]  border-gray-300 py-2 rounded-lg mr-1' to='/coffees'> Coffees </NavLink>

              <NavLink className='font-medium text-[15px]  border-gray-300 py-2 rounded-lg ' to='/dashboard'> Dashboard </NavLink>

            </ul>

          </div>

          {/* <div className='px-2'>
              <Link className="font-thin text-2xl" to='/'>Coffee</Link>
          </div> */}

          <div className='lg:px-2 lg:flex lg:justify-start lg:w-full px-2'>
            <Link className="font-thin text-2xl" to='/'>Coffee</Link>
          </div>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li className='font-medium text-[15px] border border-gray-300 rounded-lg lg:mr-3'> <NavLink to='/category/Brewed Coffee'> Home </NavLink> </li>

            <li className='font-medium text-[15px] border border-gray-300 rounded-lg lg:mr-3'> <NavLink to='/coffees'> Coffees </NavLink> </li>

            <li className='font-medium text-[15px] border border-gray-300 rounded-lg '> <NavLink to='/dashboard'> Dashboard </NavLink> </li>

          </ul>
        </div>


      </div>
    </div>
  )
}
