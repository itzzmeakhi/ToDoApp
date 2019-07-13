import React from 'react';
import './Task.css';

const Task=(props)=> {

    let styleText = {
        fontSize: '160%'
    };

    let styleCompletedButton = {
        backgroundColor: '#00b894',
        fontWeight: 'bold',
        padding: '10px',
        margin: '15px 0',
        border: 'transparent',
        borderRadius: '5px',
        outline: 'none',
        fontSize: '100%'
    };

  /*   let styleListItem = {
        background: 'white',
        color: 'black',
        opacity: '0.7',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    } */


    return(
        <li className={props.darkMode ? 'list-style dark-mode': 'list-style light-mode'}>
            <p 
                style={styleText}> 
                {props.task} 
            </p>

            <button 
                style={styleCompletedButton}
                onClick={props.remove}> 
                Completed 
            </button>
        </li>
                       
    )
}

export default Task;