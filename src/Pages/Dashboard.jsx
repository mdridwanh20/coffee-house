import React, { useEffect, useState } from 'react'
import Heading from '../Components/Heading'
import { getAllFavorite, removeFavorite } from '../Utils'
import Card from '../Components/Card'
import { useLocation } from 'react-router-dom'

export default function Dashboard() {
  const pathname = useLocation()
  
  
  const [coffees, setCoffees] = useState([])
  // DATA LOAD FROM LOCAL STORAGE;
  useEffect(() => {
    const favorite = getAllFavorite()
    setCoffees(favorite)
  }, [])

  console.log(coffees);
  

   // handler remove work;
   const handlerRemove = (id) =>{
    removeFavorite(id)
    const favorite = getAllFavorite()
    setCoffees(favorite)
  }

  return (
    <>
      <div className='container m-auto px-2'>

        {/* heading here */}
        <Heading
          title='Welcome to Dashboard'
          subTitle='Manage coffees that you have previously added as favorite. You can view or remove them from here'
        ></Heading>

        <div className='container m-auto px 2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
          {
            coffees.map(coffee => <Card 
              key={coffee.id} 
              coffee={coffee}
              handlerRemove = {handlerRemove}
              ></Card>)
          }
        </div>



      </div>
    </>
  )
}
