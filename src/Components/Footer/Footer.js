import React from 'react'
import './Footer.css'


const Footer = ({number,setNumber}) => {

  const pageIncreament=()=>{
    if(number>6){
      console.log("this is last page");
    }else{
      setNumber(number+1)
    }  
  }
  const pageDecreament=()=>{
    if(number<0){
      console.log("this is the first page");
    }else{
      setNumber(number-1)
    } 
  }
  return (
    <div className='footer_container'>
        <div className='footer_body'>
            <button onClick={pageDecreament}>Prev</button>
            <button onClick={pageIncreament}>Next</button>
        </div>
    </div>
  )
}

export default Footer