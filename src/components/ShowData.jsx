import * as React from 'react';


import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { TextField,MenuItem,Button } from '@mui/material'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};
const  ShowData = ({allData,deleteStudent,updateStudent,handleChange,clearInputVal,editModel,handleClose,open,handleDelete}) =>{
  // ================ for modal ==================
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  
  // const handleClick = () => {
  //   handleClose();
  // };

  

  return (
    <>
    <div className='app' style={{marginTop:'3rem'}}>
      <table border='1' style={{width: '700px' }}>
        <thead>
          <tr>
            <th>SrNo</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Field</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{textAlign:'center'}}>
          {
            allData.map((ele,index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{ele.first_name}</td>
                  <td>{ele.last_name}</td>
                  <td>{ele.age}</td>
                  <td>{ele.field_of_study}</td>
                  <td style={{padding:'5px'}}><Button variant='contained' size='small' color='secondary' style={{marginRight:'.5rem'}}onClick={()=>editModel(ele._id)}>Edit</Button><Button variant='contained' color='error' size='small' style={{marginLeft:'.5rem'}} onClick={()=>deleteStudent(ele._id)}>Delete</Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
              
                  <Chip
        style={{marginLeft:'90%'}} 
        label=""
        onDelete={handleDelete}
      />
          
        <div style={{ marginTop: "0rem", textAlign: 'center'}} className='form-container'>
            <div style={{marginBottom:'1rem'}}>
            <TextField
                required
                id="outlined-required"
                label="First Name"
                style={{marginRight:"0rem"}}
                name='first_name'
                onChange={handleChange}
                ref={clearInputVal}
            />
            <TextField
                required
                id="outlined-required"
                label="Last Name"
                style={{marginTop:'.5rem'}}
                name='last_name'
                onChange={handleChange}
                ref={clearInputVal}
            />
            </div>
            <div>
            <TextField
                required
                id="outlined-required"
                label="age"
                style={{marginTop:'.5rem'}}
                name='age'
                onChange={handleChange}
                ref={clearInputVal}
            />
            <TextField
                required
                select
                
                id="outlined-required"
                label="Field"
                style={{marginTop:'.5rem',width:"225px"}}
                name='field_of_study'
                onChange={handleChange}
                ref={clearInputVal}
            >
            <MenuItem  value='ECE'>
              ECE
            </MenuItem>
            <MenuItem  value='CSE'>
              CSE
            </MenuItem>
            <MenuItem  value='ME'>
              ME
            </MenuItem>
            <MenuItem  value='EEE'>
              EEE
            </MenuItem>
            </TextField>
            <div style={{width:'100%',textAlign:'right',marginTop:'1rem'}}>

            <Button variant='contained' onClick={updateStudent}>Update Student</Button>
            </div>
            </div>
            
        </div>
        
        </Box>
      </Modal>
    

    </div>
    </>
  );
}



export default ShowData
// ubaid asif kamal ansari warispura kamptee nagpur maharashtra india