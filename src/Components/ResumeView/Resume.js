import React, { useEffect, useState, useRef } from 'react'
import { Table } from 'react-bootstrap'
import './Resume.css'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { FaDownload } from 'react-icons/fa';


const Resume = () => {

   const printRef = useRef();


   const [basicData, setBasicData] = useState()
   const [skills, setSkills] = useState()
   const [education, setEducation] = useState()
   const [experience, setExperience] = useState()
   const [personal, setPersonal] = useState()




   useEffect(() => {
      setBasicData(JSON.parse(localStorage.getItem('basic')))
      setSkills(JSON.parse(localStorage.getItem('skills')))
      setEducation(JSON.parse(localStorage.getItem('education')))
      setExperience(JSON.parse(localStorage.getItem('experience')))
      setPersonal(JSON.parse(localStorage.getItem('personal')))
   }, [])

   const handleDownloadPdf = async () => {
      const element = printRef.current;
      const canvas = await html2canvas(element);
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', "a4"); 
      let position = 0;
      const imgProperties = pdf.getImageProperties(data);
      pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight + 15);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
         position = heightLeft - imgHeight;
         pdf.addPage();
         pdf.addImage(data, 'PNG', 0, position, imgWidth, imgHeight + 15);
         heightLeft -= pageHeight;
      }
      pdf.save('print.pdf');
   };

   return (
      <div className='resume-container'>
         <div className='resume-body' >
            <div className='resume-header'>
               <div></div>
               <h3>Final Resume</h3>
               <button onClick={handleDownloadPdf}>Download<FaDownload/></button>
            </div>
            <div className='resume-main' ref={printRef}>
               {basicData ? <div className='resume-content'>
                  <div className='resume-content1_left'>
                     <h3>{basicData.name}</h3>
                  </div>
                  <div className='resume-content1_right'>
                     <p>{basicData.address1}</p>
                     <p>{basicData.address2}</p>
                     <p>{basicData.address3}</p>
                     <b>{basicData.email}</b>
                     <p>{basicData.mobNo}</p>
                  </div>
               </div> : <p>Waiting fordata</p>}
               <div className='resume-content-main'>
                  <div className='resume-content-header'><h3>CAREER OBJECTIVE</h3></div>
                  {skills ?
                     <div className='resume-objective-content'>
                        <p>{skills.objective}</p>
                     </div> : ''}
               </div>
               <div className='resume-content-main'>
                  <div className='resume-content-header'><h3>CAREER SUMMARY</h3></div>
                  {experience ?
                     experience.map((v, i) => {
                        return <div className='resume-objective-content' key={i}>
                           <h4>{v.title}</h4>
                           {v.exp.split('.').map((v, i) => {
                              return <p key={i}><b>*</b> {v} </p>
                           })}
                        </div>
                     }) : ''}
               </div>
               <div className='resume-content-main'>
                  <div className='resume-content-header'><h3>EDUCATION DETAILS</h3></div>
                  {education ?
                     <div className='resume-education-content'>
                        <Table striped bordered hover>
                           <thead>
                              <tr>
                                 <th>INSTITUTION</th>
                                 <th>COURSE</th>
                                 <th>UNIVERSITY/ BOARD</th>
                                 <th>PERCENTAGE/ CGPA </th>
                                 <th>YEAR OF PASSING</th>
                              </tr>
                           </thead>
                           <tbody>
                              {education.map((e, i) => {
                                 return (
                                    <tr key={i}>
                                       <td>{e.Institution}</td>
                                       <td>{e.qualification} </td>
                                       <td>{e.description}</td>
                                       <td>{e.percentage}</td>
                                       <td>{e.year}</td>
                                    </tr>
                                 )
                              })}
                           </tbody>
                        </Table>
                     </div> : ''}
               </div>
               <div className='resume-content-main'>
                  <div className='resume-content-header'><h3>TECHNICAL SKILLS</h3></div>
                  {skills ?
                     <div className='resume-skills-content'>
                        <ul>
                           <li>{skills.otherSkills.skill1}</li>
                           <li>{skills.otherSkills.skill2}</li>
                           <li>{skills.otherSkills.skill3}</li>
                           <li>{skills.otherSkills.skill4}</li>
                           <li>{skills.otherSkills.skill5}</li>
                           <li>{skills.otherSkills.skill6}</li>
                        </ul>
                     </div> : ''}
               </div>
               <div className='resume-content-main'>
                  <div className='resume-content-header'><h3>AREA OF INTEREST</h3></div>
                  {skills ?
                     <div className='resume-interest-content'>
                        <ul>
                           <li>{skills.Interest.Interest1}</li>
                           <li>{skills.Interest.Interest2}</li>
                           <li>{skills.Interest.Interest3}</li>
                           <li>{skills.Interest.Interest4}</li>
                           <li>{skills.Interest.Interest5}</li>
                           <li>{skills.Interest.Interest6}</li>
                        </ul>
                     </div> : ''}
               </div>
               <div className='resume-content-main'>
                  <div className='resume-content-header'><h3>OTHER SKILLS</h3></div>
                  {skills ?
                     <div className='resume-interest-content'>
                        <ul>
                           <li>{skills.personalSkill.PersonalSkill1}</li>
                           <li>{skills.personalSkill.PersonalSkill2}</li>
                           <li>{skills.personalSkill.PersonalSkill3}</li>
                           <li>{skills.personalSkill.PersonalSkill4}</li>
                           <li>{skills.personalSkill.PersonalSkill5}</li>
                           <li>{skills.personalSkill.PersonalSkill6}</li>
                        </ul>
                     </div> : ''}
               </div>
               <div className='resume-content-main'>
                  <div className='resume-content-header'><h3>PERSONAL DETAILS</h3></div>
                  {personal ?
                     <div className='resume-personal-content'>
                        <ul>
                           <li><h4>Name : {personal.name}</h4></li>
                           <li><h4>Date of Birth :{personal.dob}</h4></li>
                           <li><h4>Languages Known :{personal.languages}</h4></li>
                           <li><h4>Nationality : {personal.nationality}</h4></li>
                           <li><h4>Place : {personal.place}</h4></li>
                        </ul>
                     </div> : ''}
               </div>
               <div className='resume-content-main'>
                  <div className='resume-content-header'><h3>conclusion</h3></div>
                  {personal ?
                     <div className='resume-conclusion-content'>
                        <p>{personal.conclusion}</p>
                     </div> : ''}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Resume