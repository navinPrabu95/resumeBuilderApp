import React, { useEffect, useMemo} from 'react'
import { useNavigate } from 'react-router-dom'
import './PageNumber.css'

const PageNumber = ({number,setNumber}) => {

  const routeMatch = ['/basic','/education','/experience','/skills','/projects','/personal','/resume']  

  const navigation = useNavigate()

  useEffect(()=>{
    navigation(routeMatch[number])
  },[number])

  const setNavigation=(num)=>{   
      setNumber(num) 
  }

  const pageChange = useMemo(()=>{
    return routeMatch.map((v,i)=>{
      return <button onClick={()=>{setNavigation(i)}} className={routeMatch[number]===v&&'active-button'} key={i}>{i+1}</button>
    })
  },[number])

  return (
    <div className='pageNumber_container'>
        <div className='pageNumber_body'>
            {pageChange}
        </div>
    </div>
  )
}

export default PageNumber