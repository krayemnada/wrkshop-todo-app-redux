import React from 'react'
import { addTask } from '../../redux/actions/Actions';
import {useState} from 'react'
import { connect } from 'react-redux';
import { Button } from "react-bootstrap"

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    }
}

function TaskAdd(props) {
    const [description, setDescription] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
       props.addTask({ description :description})
    }
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <input  className='add' type="text" placeholder="Enter Your Task Here ... " id="description" onChange={e =>  setDescription(e.target.value)} />
            </div>
            <div>
                <Button type="submit" variant="success" className='task'>Add</Button>
            </div>
        </form>
    )
}

export default connect(null, mapDispatchToProps)(TaskAdd)