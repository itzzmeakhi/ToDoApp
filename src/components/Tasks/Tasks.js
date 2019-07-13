import React from 'react';
import Task from './Task';
import './Tasks.css';

const Tasks=(props)=> {

    let styleHeader = {
        marginBottom: '20px'
    };

    let styleList = {
        listStyle: 'none'
    }

   return (

    <div className="task-remain">
        <h1 style={styleHeader}> Tasks to be completed </h1>
        <ul style={styleList}>

        {
            props.tasks.map((task, index) => {
                return (
                    
                    <Task 
                        remove={()=>props.remove(index)} 
                        task={task} key={index} 
                        darkMode={props.darkMode}/>
                )
            })

        }

        </ul>

    </div>

   )

};

export default Tasks;