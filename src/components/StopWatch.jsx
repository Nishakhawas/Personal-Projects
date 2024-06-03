import React from 'react'
import'./CSS/stopwatch.css'

export default function StopWatch() {
  let displayWatch= document.querySelector('.displayWatch')
  let startBtn = document.getElementById('startBtn')
  let stopBtn = document.getElementById('stopBtn')
  let resetBtn = document.getElementById('resetBtn')

  let msec = 0;
  let secs = 0;
  let mins = 0;
  
  let timerId =null;

  startBtn.addEventListener('click',function(){
    if(timerId !== null){
      clearInterval(timerId)
    }
    timerId=setInterval(startTimer,10)
  })

  stopBtn.addEventListener('click',function(){
    clearInterval(timerId)
  })

  resetBtn.addEventListener('click',function(){
    clearInterval(timerId)
    displayWatch.innerHTML = `00 : 00 : 00`
  })

  function startTimer(){
    msec++;
    if(msec === 100){
      msec = 0;
      secs++;
      if(secs == 60){
        secs = 0;
        mins++;
      }
    }
    let msecString = msec < 10? `0$(msec)`:msec;
    let secsString = msec < 10? `0$(msec)`:secs;
    let minsString = msec < 10? `0$(msec)`:mins;
    displayWatch.innerHTML =`${msecString}:${secsString} :${minsString}`
    

  }


  return (
  
<>
    <div className='stopwatch'> 
      <div className='displayWatch'>00 : 00 : 00</div>
    </div>
    <div className='buttons'>
      <button id= "startbtn" className='btn' >START</button>
      <button id = "stopbtn"className='btn1'>STOP</button>
      <button id="resetbtn" className='btn2'>RESET</button>
    </div>
    </>
    
   
  )
}
