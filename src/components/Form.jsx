import React from 'react'
import { TextField,MenuItem,Button } from '@mui/material'



const Form = ({addStudent,handleChange,clearInputVal}) => {




    return (
        <div className='app'>
        <div style={{ marginTop: "4rem", textAlign: 'center'}} className='form-container'>
            <div style={{marginBottom:'1rem'}}>
            <TextField
                required
                id="outlined-required"
                label="First Name"
                style={{marginRight:".5rem"}}
                name='first_name'
                onChange={handleChange}
                ref={clearInputVal}
            />
            <TextField
                required
                id="outlined-required"
                label="Last Name"
                style={{marginLeft:".5rem"}}
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
                style={{marginRight:'.5rem'}}
                name='age'
                onChange={handleChange}
                ref={clearInputVal}
            />
            <TextField
                required
                select
                
                id="outlined-required"
                label="Field"
                style={{marginLeft:'.5rem',width:"225px"}}
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

            <Button variant='contained' onClick={addStudent}>Add Student</Button>
            </div>
            </div>
            
        </div>
        </div>
    )
}

export default Form
