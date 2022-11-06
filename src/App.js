import logo from './logo.svg';
import './App.css';
import BasicDetails from './Components/BasicDetails/BasicDetails';
import PageNumber from './Components/PageNo/PageNumber';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import SkillSet from './Components/Skills/SkillSet';
import Education from './Components/Education/Education';
import ProjectInfo from './Components/Projects/ProjectInfo';
import PersonalDetails from './Components/Personal/PersonalDetails';
import Resume from './Components/ResumeView/Resume';
import { useState } from 'react';
import WorkExp from './Components/WorkExp/WorkExp';


function App() {

  const [number,setNumber] = useState(0)

  return (
    <div className="App">
       <header>
           <h1>Resume Builder App</h1> 
       </header>
       <main>
        <BrowserRouter>
         <PageNumber number={number} setNumber={setNumber}/>
        <Routes>
           <Route path='/basic' element={<BasicDetails number={number} setNumber={setNumber}/>}></Route>
           <Route path='/education' element={<Education  number={number} setNumber={setNumber}/>}></Route> 
           <Route path='/experience' element={<WorkExp  number={number} setNumber={setNumber}/>}></Route>             
           <Route path='/skills' element={<SkillSet  number={number} setNumber={setNumber}/>}></Route> 
           <Route path='/projects' element={<ProjectInfo  number={number} setNumber={setNumber}/>}></Route>  
           <Route path='/personal' element={<PersonalDetails  number={number} setNumber={setNumber}/>}></Route> 
           <Route path='/resume' element={<Resume  number={number} setNumber={setNumber}/>}></Route>                                                                                                                                              
         </Routes>
        </BrowserRouter>
       </main>
       <footer>
         <Footer number={number} setNumber={setNumber}/>
       </footer>
    </div>
  );
}

export default App;
