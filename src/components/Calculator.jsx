import React, { useState } from 'react'
import "./CSS/calculator.css"

export default function Calculator() {

  const[inputValue,setInputValue] =useState("")

  function display(value){
    setInputValue(inputValue+value)
  }

  function calculate (){
    let answers = eval(inputValue)
    setInputValue(answers)

  }

  function clear(){
    setInputValue("")
  }
  return (
    <div>
      <form name='calc' className='calculator'>
        <input type="text" className='value' value={inputValue} />
        <div>
        <span className='clear' onClick={()=> clear()}>c</span>
        <span onClick={()=> display("/")} >/</span>
        <span onClick={()=> display("7")}>*</span>
        <span onClick={()=> display("%")}>%</span>  </div>
        <div>
        <span onClick={()=> display("8")}>7</span>
        <span onClick={()=> display("8")}>8</span>
        <span onClick={()=> display("9")}>9</span>
        <span onClick={()=> display("*")}>*</span>
        </div>
        <div>
        <span onClick={()=> display("4")}>4</span>
        <span onClick={()=> display("5")}>5</span>
        <span onClick={()=> display("6")}>6</span>
        <span onClick={()=> display("-")}>-</span>
        </div>
        <div>
        <span onClick={()=> display("1")}>1</span>
        <span onClick={()=> display("2")}>2</span>
        <span onClick={()=> display("+")} className='plus'>+</span>
        <span onClick={()=> display("0")}>0</span></div>
        <div>
        <span onClick={()=> display("00")}>00</span>
        <span onClick={()=> display("3")}>3</span>
        <span onClick={()=> display(".")}>.</span>
        <span onClick={()=> calculate("=")} className='equal'>=</span></div>
    
        
       
      </form>
    </div>
  )
}
