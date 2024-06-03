import React, { useState } from 'react'
import {FaSearch} from "react-icons/fa"

import "./CSS/hidden.css"

export default function HiddenSearchBar() {

    const[showInput,setShowInput]=useState(false)
    const[bgcolor,setBgColor]=useState("white")
    

   const handleClick=e=>{
    setBgColor("#1a1a1a")
    if(e.target.className === "container"){
     setShowInput(false)
     setBgColor("#fff")
    }


   }


  return (
    <>
    <section className="conatiner" style={{backgroundColor:bgcolor}} onClick={handleClick}>
        {showInput?(
            <input type="text" placeholder='Search...' />
        ):(
            <FaSearch onClick={()=> setShowInput(true)}></FaSearch>
        )}
    </section>
    
    </>
    
  )
}
