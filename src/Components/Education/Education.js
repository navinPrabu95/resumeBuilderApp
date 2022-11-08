import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import './Education.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Education = ({number,setNumber}) => {

  const [collegeDetails,setCollegeDetails ] = useState({})
  const [hscDetails,setHscDetails ] = useState({})
  const [sslcDetails,setSslcDetails ] = useState({})

  const onSubmitInput=()=>{
    if(!collegeDetails || !hscDetails || !sslcDetails){
      toast.error("Please fill All the fields",{
        position: toast.POSITION.TOP_RIGHT
    })
    }else{
      toast.success("Details added sucessfully",{
        position: toast.POSITION.TOP_RIGHT
    })
      const educationDetails =[collegeDetails,hscDetails,sslcDetails];
      localStorage.setItem('education',JSON.stringify(educationDetails))
      setNumber(number+1)}
  }

  return (
    <div className='Education-container'>
             <ToastContainer />
      <div className='Education-body'>
        <div className='Education-header'><h3>Educational Details</h3></div>
        <div className='Education-content_college'>       
          <h2>College/University</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>College/University</Form.Label>
                <Form.Control type="text" placeholder="Enter College/University" name='Institution' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="year" name='year' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>CGPA</Form.Label>
                <Form.Control type="text" placeholder="Enter CGPA" name='percentage' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" placeholder="Enter Qualification" name='qualification' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name='description' onChange={(e)=>{setCollegeDetails({...collegeDetails,[e.target.name]:e.target.value})}} required/>
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
                <Form.Control type="text" placeholder="Enter school name" name='Institution' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="year" name='year' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Percentage</Form.Label>
                <Form.Control type="text" placeholder="Enter Percentage" name='percentage' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" placeholder="Enter Qualification" name='qualification' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name='description' onChange={(e)=>{setHscDetails({...hscDetails,[e.target.name]:e.target.value})}} required/>
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
                <Form.Control type="text" placeholder="Enter school name" name='Institution' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="year" name='year' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Percentage</Form.Label>
                <Form.Control type="text" placeholder="Enter Percentage" name='percentage' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" placeholder="Enter Qualification" name='qualification' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}} required/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name='description' onChange={(e)=>{setSslcDetails({...sslcDetails,[e.target.name]:e.target.value})}} required/>
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