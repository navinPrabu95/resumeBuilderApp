import React, { useMemo, useState } from 'react'
import './WorkExp.css'

const WorkExp = ({number,setNumber}) => {
    const [experience, setExperience] = useState([{ title:'',exp: '' }])

    const addExperience = () => {
        setExperience([...experience, {title:'', exp: '' }])
        console.log('experience', experience);
    }

    const onHandleInput=(i,e)=>{
        const allExperience = [...experience]
        allExperience[i][e.target.name] = e.target.value;
        setExperience(allExperience)
    }

    const onSubmitInput=()=>{
        localStorage.setItem('experience',JSON.stringify(experience))
        setNumber(number+1)
    }

    const list = useMemo(() => {
        return experience.map((v, i) => {
            return (<div className='project-content' key={i + v} >
                <div className='project-content-input'>
                    <label>Experience{i + 1}</label>
                    <input type='text' name='title' placeholder='Enter title' onChange={(e)=>onHandleInput(i,e)}></input>
                    <textarea  name='exp' onChange={(e)=>onHandleInput(i,e)} placeholder='Enter Experience'></textarea>
                </div>
                <div className='project-content-button'>
                    {experience.length - 1 === i && <button onClick={addExperience}>ADD</button>}
                    {experience.length - 1 === i && <button onClick={onSubmitInput}>SUBMIT</button>}
                </div>
            </div>)
        })
    }, [experience.length])


    return (
        <div className='project-container'>
            <div className='project-body'>
                <div className='project-header'>
                    <h1>Working Experience</h1>
                </div>
                <div className='project-main'>
                    {list}
                </div>
            </div>
        </div>
    )
}

export default WorkExp