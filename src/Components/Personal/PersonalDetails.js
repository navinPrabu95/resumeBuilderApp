import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './Personal.css'


const PersonalDetails = ({number,setNumber}) => {

 const [inputData,setInputData] = useState({})

 const handleChange=(e)=>{
      setInputData({...inputData,[e.target.name]:e.target.value})
 }
  const handleSubmit=(e)=>{
     e.preventDefault()
     localStorage.setItem('personal',JSON.stringify(inputData))
     setNumber(number+1)
  }
  return (
    <div className='personal-container'>
      <div className='personal-body'>
         <div className='personal-header'>
           <h3>PERSONAL DETAILS</h3>
         </div>
         <div className='personal-content'>
         <Form onSubmit={handleSubmit}>
         <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name *" name='name' onChange={handleChange}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" placeholder="Enter DOB *"  name='dob' onChange={handleChange}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nationality</Form.Label>
                <Form.Control type="text" placeholder="Enter Nationality *" name='nationality' onChange={handleChange}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Languages Known</Form.Label>
                <Form.Control type="text" placeholder="Enter Languages *" name='languages' onChange={handleChange}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Place</Form.Label>
                <Form.Control type="text" placeholder="Enter Place *" name='place' onChange={handleChange}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Conclusion</Form.Label>
                <Form.Control as="textarea"  placeholder="Enter conclusion *" name='conclusion' style={{ height: '100px' }} onChange={handleChange}/>
          </Form.Group>
          <Button type='submit'>SUBMIT</Button>
          </Form>
         </div>
      </div>
    </div>
  )
}

export default PersonalDetails