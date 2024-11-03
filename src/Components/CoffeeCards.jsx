import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Card from './Card';
import { data } from 'autoprefixer';

export default function CoffeeCards() {
  const navigate = useNavigate()

  const data = useLoaderData();
  const { category } = useParams()

  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    console.log(data);

    if (category) {
      const filterByCategories = [...data].filter(
        coffees => coffees.category === category
      )
      setCoffees(filterByCategories.slice(0, 6))
    } 

  }, [category, data])

  return (
    <>

{/* dynamic coffee card create */}

      <div className='container m-auto px 2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {
          coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
        }
      </div>
      <div className='my-5 container m-auto px-2'>
          <button className='btn btn-warning' onClick={() => navigate('/coffees')}> View All </button>
      </div>

    </>
  )
}
