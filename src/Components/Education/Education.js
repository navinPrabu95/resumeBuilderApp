import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './Education.css'


const Education = ({number,setNumber}) => {

  const [collegeDetails,setCollegeDetails ] = useState({})
  const [hscDetails,setHscDetails ] = useState({})
  const [sslcDetails,setSslcDetails ] = useState({})

  const onSubmitInput=()=>{
    const educationDetails =[collegeDetails,hscDetails,sslcDetails];
    localStorage.setItem('education',JSON.stringify(educationDetails))
    setNumber(number+1)
  }
  return (
    <div className='Education-container'>
      <div className='Education-body'>
        <div className='Education-header'><h3>Educational Details</h3></div>
        <div className='Education-content_college'>       
          <h2>College/University</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>College/University</Form.Label>
                <Form.Control type="text" placeholder="Enter College/University" name='Institution' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="year" name='year' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>CGPA</Form.Label>
                <Form.Control type="text" placeholder="Enter CGPA" name='percentage' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" placeholder="Enter Qualification" name='qualification' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name='description' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>

          </Form>
        </div>
        <div className='Education-content_college'>
        <h2>School HSC</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>School</Form.Label>
                <Form.Control type="text" placeholder="Enter school name" name='Institution' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="year" name='year' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Percentage</Form.Label>
                <Form.Control type="text" placeholder="Enter Percentage" name='percentage' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" placeholder="Enter Qualification" name='qualification' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name='description' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>

          </Form>
        </div>
        <div className='Education-content_college'>
        <h2>School SSLC</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>School</Form.Label>
                <Form.Control type="text" placeholder="Enter school name" name='Institution' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="year" name='year' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Percentage</Form.Label>
                <Form.Control type="text" placeholder="Enter Percentage" name='percentage' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" placeholder="Enter Qualification" name='qualification' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name='description' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div className='basic-button'>
         <button onClick={onSubmitInput}>SUBMIT</button>
        </div>
      </div>

    </div>
  )
}

export default Education