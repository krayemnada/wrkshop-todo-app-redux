import React, {useState} from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap';
import { editTask } from '../../redux/actions/Actions';
import {useDispatch} from 'react-redux';

 

function EditTask({task}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newdescription , setNewDescription]= useState(task.description)
    const handleChange =(e)=>{setNewDescription(e.target.value)}
    const dispatch = useDispatch();
    const handleSubmit = () => {dispatch(editTask( task.id,newdescription )); handleClose();};
   
    return (
      <>
        <Button variant="primary" className='task' onClick={handleShow}>
        <i class="fas fa-pen"></i>
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header  >
            <Modal.Title>Edit task</Modal.Title>
          </Modal.Header>
          <Modal.Body>  <FormControl
                        defaultValue={task.description}
                        onChange={handleChange}
                    /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className='task' onClick={handleClose}>
            close
            </Button>
            <Button variant="primary" className='task' onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default  EditTask