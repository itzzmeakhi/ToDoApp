
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Tasks from './components/Tasks/Tasks';
import TaskAdd from './components/Tasks/TaskAdd/TaskAdd';
import './App.css';




class App extends Component {

  state = {
    tasksRemain: ['Homework', 'Reading'],
    addTask: '',
    darkMode: false
  };

  // Assigns Value in the Input field

  onChangeHandler = (event) => {
    this.setState({
      addTask: event.target.value
    });
  }

  // Adds Task to the array

  addTaskHandler = () => {
    this.setState({
      tasksRemain: [...this.state.tasksRemain, this.state.addTask],
      addTask: ''
    });
  }

  // Removes tasks from the tasks array

  removeTaskHandler = index => {
    const beforeTasks = this.state.tasksRemain.slice(0, index);
    const afterTasks = this.state.tasksRemain.slice(index+1);

    const tasks = [...beforeTasks, ...afterTasks];

    console.log(tasks);

    this.setState({
      tasksRemain: tasks
    });
  }

  // Handles the mode of our application

  darkModeHandler = () => {
    this.setState({
      darkMode: !this.state.darkMode 
    })
  }


  render() {

    // Inline Styling for Background color

    let bColor = {
      backgroundColor: '#ffffff',
      color: '#000000',
      height: '100vh'
    }

    // Button style for Dark Mode Option

    let buttonStyle = {
      padding: '10px',
      border: '1px solid #000000',
      borderRadius: '10px',
      outline: 'none',
      display: 'block',
      margin: '10px auto',
      fontSize: '100%'
    }

    // Adding classes dynamically

    let buttonClasses = []

    // Pushing bold class into the array

    buttonClasses.push('bold');

    // Checking the Mode and dynamically pushing a CSS class

    if(this.state.darkMode) {
      buttonClasses.push('green-bg', 'black-font');
      //console.log(buttonClasses);
    } else {
      buttonClasses.push('orange-bg', 'black-font');
      //console.log(buttonClasses);
    }

    // Conditional Styling 

    if(this.state.darkMode) {
      //console.log("dark")
      bColor = {
        backgroundColor: '#2d3436',
        color: '#ffffff',
        height: '100vh'
      };
    }

    // console.log(this.state.darkMode)

    let numTasks = this.state.tasksRemain.length
    
    return(

      <div style={bColor} className='App'>

        <Navbar />

        <button 
          style={buttonStyle} 
          onClick={this.darkModeHandler}
          className={buttonClasses.join(' ')}> 
          { this.state.darkMode ? 'Light': 'Dark' } Mode 
        </button>
        
        <TaskAdd 
          changed={this.onChangeHandler} 
          clicked={this.addTaskHandler} 
          remove={this.removeTaskHandler}/>

        { numTasks === 0 ? 
          <p className={this.state.darkMode ? 'no-task-alert dark-mode':'no-task-alert light-mode'}> 
          No Tasks
          </p> : 
      
          <Tasks 
            tasks={this.state.tasksRemain} 
            remove={this.removeTaskHandler}
            darkMode={this.state.darkMode}/>
        }
   
      </div>

        
    )
  }

}

export default App;