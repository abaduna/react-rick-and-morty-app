import React from 'react'
import PropTypes from "prop-types"
import Table from 'react-bootstrap/Table';

const Task = ({tasks,deleteTask}) => {

    const removeTask =(id)=>{
        deleteTask(id)
        
    }


  return (
    <Table  bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Tarea</th>
        <th>Descripcion</th>
        <th>aciones</th>
      </tr>
    </thead>
    <tbody>
        {tasks.map((task,id)=>{
            <tr key={id}>
                <td>{id} </td>
                <td>{task.name} </td>
                <td>{task.descripcion} </td>
                <td onClick={()=> removeTask(task.id)}> x </td>
            </tr>
        })}


    </tbody>
  </Table>
  )
}

Task.PropTypes={
    task: PropTypes.shape({
        name: PropTypes.string,
        descripcion: PropTypes.string
    }).isRequired
}

export default  Task