import {Container,Row,Col} from './componets/layout/Base'
import styled from "styled-components"
import './App.css';
import {useState} from "react"

import TaskForm from './componets/TaskForm/TaskForm'

import Task from "./componets/Task/Task"

const Alert = styled.div`
  display:"block";
  background: tomato;
  width:100%
`
const AppRow = styled(Row)`
justify-content:center;
background:pink;

`



function App() {
  const [task,setTask] = useState([])

  const addTask=(task)=>{
    setTask([...task,task])
    localStorage.setItem("tanks",JSON.stringify([...tanks,task]))
  }
  const deleteTask=(selectedTask)=>{  
 
    const finaltaks = tasks.filter((task)=> task !== selectedTask.id)
    setTask(finaltaks)

  }
  return (
    <div className="App">
      
      <Container>
        <AppRow>
          <Col size={6} >
            <TaskForm addTask={addTask}></TaskForm>
          </Col>
          <Col size={6}>
          <Task tasks={tasks} deleteTask={deleteTask}></Task>
          </Col>
        </AppRow>
      </Container>
    </div>
  );
}

export default App;
