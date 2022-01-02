import React from 'react'
import {Button} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {doneTask } from '../../redux/actions/Actions';
import EditTask from '../editTask/EditTask'

function TaskItem({task}) {
     const dispatch = useDispatch();
    return (
        <div >
            <div id={task.id} >
            <h4>{task.description}</h4>
            
            <Button variant={ task.isDone ? "danger" : "success" } 
                className='task'
                onClick={()=>{dispatch(doneTask({ id: task.id, isDone: !task.isDone }))}}>
               {task.isDone ? "Back" : "Done"}
            </Button>
            
            <EditTask task={task} />
            
            </div>
         
        </div>
    )
}

export default  (TaskItem)