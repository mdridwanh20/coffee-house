import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { RiChatDeleteFill } from "react-icons/ri";


export default function Card({ coffee, handlerRemove }) {
  // location pathname
  const pathname = useLocation()
  const { id, name, image, category, rating, origin, popularity, ingredients, type, nutrition_info, calories, fat, carbohydrates, protein } = coffee || {}

 


  return (
    <div className='border p-5 rounded-md shadow-md relative'>
      <Link to={`/coffees/${id}`}
        className=''
      >
        <img className='w-full h-72 rounded-md object-cover' src={image} alt="" />

        <div className='py-4'>
          <h1 className='font-medium'> Name: {name} </h1>
          <p> Category: {category} </p>
          <p> Type: {type} </p>
          <p> Origin: {origin} </p>
          <p> Popular: {popularity} </p>
        </div>

      </Link>

{/* delete button create here */}
      {
          location.pathname === '/dashboard' && (
            <div onClick={() => handlerRemove(id)} 
                className='absolute -top-4 text-3xl cursor-pointer -right-3 text-red-500'>
                <RiChatDeleteFill></RiChatDeleteFill>
            </div>
          )
      }

    </div>
  )
}
