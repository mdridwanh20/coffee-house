import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addFavorite, getAllFavorite } from '../Utils'

export default function CoffeeDetails() {
  // coffee card details more;

  const data = useLoaderData()
  const { id } = useParams()

  const [details, setDetails] = useState([])
  const { name, description, image, category, rating, popularity, ingredients,
    type, nutrition_info, calories, fat, carbohydrates, protein, making_process } = details

    // favorite button disabled;
    const [isFavorite, setIsFavorite] = useState(false);

    // favorite button work here:
  const handlerFavorite = (coffee) =>{
    addFavorite(coffee)

    // disabled button (true)
    setIsFavorite(true)
}


  useEffect(() => {
    const singleData = data.find(details => details.id == id)
    setDetails(singleData)
    const favorite = getAllFavorite()
    const isExist = favorite.find(item => item.id == singleData.id)
    if(isExist){
      setIsFavorite(true)
    }

  }, [details, id])


  
  return (
    <div className='container m-auto px-3 my-16 space-y-4'>
      <h1 className='text-4xl font-thin'> {description} </h1>
      <img className='w-full' src={image} alt="" />

      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-3xl font-thin'> {name}:  </h2>
          <h2 className='text-lg font-thin'>Popularity: {popularity} </h2>
          <h2 className='text-lg font-thin'>Rating: {rating} </h2>
        </div>
        <div>
            <button 
            disabled={isFavorite}
            onClick={()=> handlerFavorite(details)}
            className='btn btn-warning'>Add Favorite</button>
        </div>

      </div>

      <div>
        <h1 className='text-3xl font-thin'>Making Process: </h1>
        <h2 className='text-lg '> {making_process} </h2>
      </div>
    </div>
  )
}
