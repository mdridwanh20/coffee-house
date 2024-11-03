import { data } from 'autoprefixer'
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../Components/Card'

export default function Coffees() {
  const data = useLoaderData()

  const [coffee, setCoffee] = useState(data)
  const handlerSort = sortBy => {
    if(sortBy === 'popularity'){
        // sort by popularity;
        const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
        setCoffee(sorted)
    } else if(sortBy === 'rating') {
        // sort by rating
        const sorted = [...data].sort((a, b) => b.rating - a.rating)
        setCoffee(sorted)
    }
  }

  return (
    <>

      <div className='container m-auto px-2 my-20'>

        <div className='lg:flex my-5 justify-between items-center'>

              <div>
                <h1 className='font-thin text-xl lg:text-4xl'>Sort coffee's Popularity & Rating</h1>
              </div>

              <div>
                    <button 
                    onClick={() => handlerSort ('popularity')}
                    className='btn btn-primary mr-5'>Sort By Popularity</button>

                    <button 
                    onClick={() => handlerSort ('rating')}
                    className='btn btn-primary'>Sort By Rating</button>
              </div>

        </div>


        <div className='container m-auto px 2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
          {
            coffee.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
          }
        </div>

      </div>

    </>


  )
}
