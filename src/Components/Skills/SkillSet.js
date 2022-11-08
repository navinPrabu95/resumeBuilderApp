import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './SkillSet.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SkillSet = ({number,setNumber}) => {

  const [otherSkills,setOtherSkills] = useState({})
  const [Interest,setInterest] = useState({})
  const [workshops,setWorkshops] = useState({})
  const [personalSkill,setPersonalSkill] = useState({})
  const [objective,setObjective] = useState('')


  const onSubmitInput=()=>{

    if(!otherSkills || !Interest || !workshops || !personalSkill || !objective){
      toast.error("Please fill All the fields",{
        position: toast.POSITION.TOP_RIGHT
    })
    }
    const skillData = {
      otherSkills:otherSkills,
      Interest:Interest,
      workshops:workshops,
      personalSkill:personalSkill,
      objective:objective
    }
    localStorage.setItem('skills',JSON.stringify(skillData))
    setNumber(number+1)
  }
  return (
    <div className='skills-container'>
      <ToastContainer />
      <div className='Skills-body'>
        <div className='Skills-header'><h3>Personal Skills</h3></div>
        <div className='Skills-content'>       
          <h2>Other Skills</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Enter skill1" name='skill1' onChange={(e)=>{setOtherSkills({...otherSkills,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Enter skill2" name='skill2' onChange={(e)=>{setOtherSkills({...otherSkills,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Enter skill3" name='skill3' onChange={(e)=>{setOtherSkills({...otherSkills,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Enter skill4" name='skill4' onChange={(e)=>{setOtherSkills({...otherSkills,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Enter skill5" name='skill5' onChange={(e)=>{setOtherSkills({...otherSkills,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Enter skill6" name='skill6' onChange={(e)=>{setOtherSkills({...otherSkills,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div className='Skills-content'>       
          <h2>AREA OF INTEREST</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Interest1"  name='Interest1' onChange={(e)=>{setInterest({...Interest,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Interest2"  name='Interest2' onChange={(e)=>{setInterest({...Interest,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Interest3"  name='Interest3' onChange={(e)=>{setInterest({...Interest,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Interest4"  name='Interest4' onChange={(e)=>{setInterest({...Interest,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Interest5"  name='Interest5' onChange={(e)=>{setInterest({...Interest,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Interest6"  name='Interest6' onChange={(e)=>{setInterest({...Interest,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div className='Skills-content'>
        <h2>CAREER OBJECTIVE</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control as="textarea" placeholder="Career Objective" name='Objective' onChange={(e)=>{setObjective(e.target.value)}}/>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div className='Skills-content'>
        <h2>WORKSHOP ATTENDED</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control as="textarea" placeholder="Workshop 1" name='Workshop1' onChange={(e)=>{setWorkshops({...workshops,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control as="textarea" placeholder="Workshop 2" name='Workshop2' onChange={(e)=>{setWorkshops({...workshops,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
          </Form>
        </div>
        <div className='Skills-content'>       
          <h2>PERSONAL SKILLS</h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="skill1" name='PersonalSkill1' onChange={(e)=>{setPersonalSkill({...personalSkill,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="skill2" name='PersonalSkill2' onChange={(e)=>{setPersonalSkill({...personalSkill,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="skill3" name='PersonalSkill3' onChange={(e)=>{setPersonalSkill({...personalSkill,[e.target.name]:e.target.value})}}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="skill4" name='PersonalSkill4' onChange={(e)=>{setPersonalSkill({...personalSkill,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="skill5" name='PersonalSkill5' onChange={(e)=>{setPersonalSkill({...personalSkill,[e.target.name]:e.target.value})}}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="skill6" name='PersonalSkill6' onChange={(e)=>{setPersonalSkill({...personalSkill,[e.target.name]:e.target.value})}}/>
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

export default SkillSet