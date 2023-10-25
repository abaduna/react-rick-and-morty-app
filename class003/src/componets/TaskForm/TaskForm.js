import {Form,Button} from "react-bootstrap"
import React from 'react'



const TaskForm = ({AddTask}) => {
    const handlerAddtask=(e)=>{
        e.preventDefault();
        const [taskName,taskDescription] =  e.target.elements
        AddTask({
            name: taskName.value.trim(),
            Description: taskDescription.value.trim()
        })
        
    }


  return (

    <Form onSubmit={handlerAddtask}>
    <Form.Group>
        <Form.label>Nombre de la tarea</Form.label>
        <Form.Control type="text" name="taskName" placeholder="Nombre de la tarea"></Form.Control>
    </Form.Group>
    <Form.Group>
        <Form.label>Descipcion de la tarea</Form.label>
        <Form.Control type="text" name="taskDescription" placeholder="Nombre de la tarea"></Form.Control>
    </Form.Group>   
    <Button type="submit">Guardar tarea</Button>     
    </Form>




  )
}
export default  TaskForm