import React,{useState} from 'react'
import TaskItem from '../taskItem/TaskItem'
import { Button } from "react-bootstrap"
import { connect } from 'react-redux';

 const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}
 
function TaskList(props) {
    const [filter,setFilter] =useState(false)
    const [done,setDone]=useState(false)
 
     return (
        <div >
            <div >
                <Button className='task' onClick={()=>{setFilter(true);setDone(true)}} style={{width:'120px',margin:"5px"}}>Show Done</Button>
                <Button className='task' onClick={()=>{setFilter(true);setDone(false)}} style={{width:'150px',margin:"5px"}}> Show Not Done</Button>
                <Button  className='task'onClick={()=>setFilter(false)} style={{width:'70px',margin:"5px"}}>All</Button>
            </div>
            <div className='list'>
            {
                !filter ? props.tasks.map((task, index) => (<TaskItem task={task} key={index} />)):
                done ? props.tasks.filter(task=>task.isDone===true).map((task, index) => (<TaskItem task={task} key={index}/>)):
                props.tasks.filter(task=>task.isDone===false).map((task, index) => (<TaskItem task={task} key={index}  />))
            }
            </div>
        </div >
    )
}

export default connect(mapStateToProps)(TaskList)
