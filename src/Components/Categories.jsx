import React from 'react'
import { NavLink } from 'react-router-dom'

function Categories({categories}) {

  // button create category //////////////////////////////
  return (
    <div role="tablist" className="tabs tabs-lifted ">
      
        {
          categories.map(category => 
            <NavLink 
            to={`/category/${category.category}`}
            key={category.category}
            role='tab' 
            className={({isActive}) => `tab text-[13px] lg:text-2xl font-thin my-5 ${isActive ? 'tab-active text-blue-600  font-medium' : '' }`}>
            {category.category} 
            </NavLink>)
        }

    </div>
  )
}

export default Categories