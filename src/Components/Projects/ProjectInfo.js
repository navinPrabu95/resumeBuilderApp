import React,{useState,useMemo} from 'react'
import './ProjectInfo.css'



const ProjectInfo = ({number,setNumber}) => {
  const [projects, setProjects] = useState([{ proj: '' }])

  const addExperience = () => {
      setProjects([...projects, { proj: '' }])
      console.log('experience', projects);
  }

  const onHandleInput=(i,e)=>{
      const allProjects = [...projects]
      allProjects[i][e.target.name] = e.target.value;
      setProjects(allProjects)
  }

  const onSubmitInput=()=>{
    localStorage.setItem('project',JSON.stringify(projects))
    setNumber(number+1)
  }

  const list = useMemo(() => {
      return projects.map((v, i) => {
          return (<div className='project-content' key={i + v} >
              <div className='project-content-input'>
                  <label>Project{i + 1}</label>
                  <textarea  name='exp' onChange={(e)=>onHandleInput(i,e)}></textarea>
              </div>
              <div className='project-content-button'>
                  {projects.length - 1 === i && <button onClick={addExperience}>ADD</button>}
                  {projects.length - 1 === i && <button onClick={onSubmitInput}>SUBMIT</button>}
              </div>
          </div>)
      })
  }, [projects.length])


  return (
      <div className='project-container'>
          <div className='project-body'>
              <div className='project-header'>
                  <h1>Project List</h1>
              </div>
              <div className='project-main'>
                  {list}
              </div>
          </div>
      </div>
  )
}

export default ProjectInfo