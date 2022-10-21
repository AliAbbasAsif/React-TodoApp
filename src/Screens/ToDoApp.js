import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Signout} from '../Config/firebasemethods'




function ToDoApp() {
  
    let navigat = useNavigate()
    let handelsignout = () => {
        Signout().then((s) => {
            console.log(s)
            navigat('/login')
        }).catch((er) => {
            console.log(er)
        })
    }
 

    return (
        <div>
            <h1>TodoAPp</h1>
            {/* <Typography variant='p' className='display-4'>Welcome {data.name}</Typography> */}
            <Button onClick={handelsignout}>SignOut</Button>
            <Box>
                <TextField id="outlined-basic" label="Add Todo" variant="outlined" />
                <Button>Add</Button>
            </Box>

        </div>
    )
}

export default ToDoApp
