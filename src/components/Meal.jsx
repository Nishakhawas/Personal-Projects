import React, { useEffect, useState } from 'react'
import { getMeal } from '../apis/meal'
import "./meal.css"



export default function Meal() {
const[items,setItems]=useState([0])
useEffect(()=>{
    document.title="meal"
    getMeal()
    .then((res)=>{
        console.log(res)
        setItems(res?.data?.meals)
    })
    .catch((e)=>{
        console.log(e)
       
    })
},[])

  const itemList=items?.map(({strMeal,strMealThumb})=>{
    return(  
         
         <div className='items-container'>
        <section className='card'>
            <img src={strMealThumb} alt='' /> 
            
            <section className='content'>
            <span>{strMeal}</span>
            </section>
            </section>
         
            </div>
          
)
})
return(
    <div>{itemList}</div>
)

}

