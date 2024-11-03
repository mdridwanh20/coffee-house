import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import Heading from '../Components/Heading'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import Categories from '../Components/Categories'
import CoffeeCards from '../Components/CoffeeCards'

export default function Home() {
  const categories = useLoaderData()
  const navigate = useNavigate()
  
  useEffect(()=>{
    navigate(`/category/Brewed Coffee`)

  },[])

  return (
    <div className=''>
        <Banner></Banner>
        <Heading title={'Browse Coffees by Category'} subTitle ={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}>  </Heading>

        <Categories categories={categories}></Categories>
    
        <Outlet></Outlet>
        {/* <CoffeeCards></CoffeeCards> */}
        
    </div>




  )
}
