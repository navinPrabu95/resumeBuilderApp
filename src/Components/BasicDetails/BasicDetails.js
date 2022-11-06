import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import './BasicDetails.css'

const BasicDetails = ({number,setNumber}) => {

  const [basicData,setBasicData] = useState({})

  const setDataInput=(e)=>{
    setBasicData({...basicData,[e.target.name]:e.target.value})
  }

  const onSubmitInput=()=>{
    console.log('basicData',basicData);
    localStorage.setItem('basic',JSON.stringify(basicData))
    setNumber(number+1)
  }
  return (
    <div className='basic_container'>
      <div className='basic_body'>
        <div className='basic_header'><h3>Student Details</h3></div>
        <div className='basic_content'>
          <div className='basic_content-left'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email"  onChange={setDataInput} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Name" onChange={setDataInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address 1</Form.Label>
                <Form.Control name='address1' type="text" placeholder="Enter address1" onChange={setDataInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address 2</Form.Label>
                <Form.Control name='address2' type="text" placeholder="Enter address2" onChange={setDataInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address 3</Form.Label>
                <Form.Control  name='address3' type="text" placeholder="Enter address3" onChange={setDataInput}/>
              </Form.Group>
            </Form>
          </div>
          <div className='basic_content-right'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mob No</Form.Label>
                <Form.Control name='mobNo' type="number" placeholder="Enter Mobile number" onChange={setDataInput}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control name='linkedin' type="text" placeholder="Enter Linkedin link" onChange={setDataInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Github</Form.Label>
                <Form.Control name='gitHub' type="text" placeholder="Enter Github link" onChange={setDataInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password1' type="password" placeholder="Password" onChange={setDataInput}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password2' type="password" placeholder="Password" onChange={setDataInput}/>
              </Form.Group> 
            </Form>
          </div>
        </div>
      </div>
      <div className='basic-button'>
        <button onClick={onSubmitInput}>SUBMIT</button>
      </div>
    </div>
  )
}

export default BasicDetails