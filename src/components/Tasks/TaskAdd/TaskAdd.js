import React, { Component } from 'react';
import './TaskAdd.css';


class TaskAdd extends Component {

    render() {

        let styleInput = {
            padding: '6px',
            display: 'inline-block',
            border: '2px solid #ccc',
            borderRadius: '5px',
            marginRight: '30px',
            fontSize: '140%',
            outline: 'none',
        };

        let styleHeading = {
            marginBottom: '20px'
        }

        let buttonStyle = {
            padding: '14px',
            width: '20%',
            textAlign: 'center',
            marginTop: '10px',
            fontWeight: 'bold',
            backgroundColor: '#74b9ff',
            display: 'inline-block',
            border: 'transparent',
            borderRadius: '5px',
            fontSize: '120%'
        }

        return(

            <div className="task-add">

                <h1 
                    style={styleHeading}> 
                    Add your task here 
                </h1>

                <input 
                    style={styleInput} 
                    type="text" 
                    onChange={this.props.changed} 
                    placeholder="Enter Task here..!!">
                </input>

                <button 
                    onClick={this.props.clicked}
                    style={buttonStyle}>
                    Add
                </button>

            </div>


        )
   
    };
}

export default TaskAdd;