import { Button, TextField, Typography } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../Config/firebasemethods';
import '../App.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate()
    let login = () => {
        LoginUser({
            email,
            password
        }).then((success) => {
            console.log(success)
            navigate('/todoapp', {

                state: success

            })
        }).catch((err) => {
            console.log(err)
        })
    }
    let locate = () => {

        navigate('/signup')
    }
    return (
        <div className='bg'>

            <Box sx={{ display:"flex",alignContent:"center", justifyContent:"center"}}>
            <Box sx={{ border: "2px solid white", borderRadius: "15px", width: '45%' ,mt:26}}>
                <Typography variant='h4' sx={{ pt: 2, fontWeight: "bold" }} align='center' color='white'>Login</Typography>

                <Box>

                    <TextField className='fields' id="outlined-basic" color='warning' label="Email" fullWidth variant="standard" onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box>

                    <TextField id="outlined-basic" sx={{color:'white' }} fullWidth label="Password" type='password' helperText='Donot Share Password With anyone' variant="standard" onChange={(e) => setPassword(e.target.value)} />
                </Box>
                <Box>

                    <Button onClick={login} variant="contained" sx={{  m:3 }} >Login</Button>
                </Box>


                <Typography variant='p' component="span" sx={{ pt: 1 }} color='white'>Dont Have Account?</Typography>
                <Typography variant='p' component="span" sx={{ pt: 1 }} onClick={locate} color='blue'>
                    <Button> SignUp
                    </Button></Typography>




            </Box>

        </Box>
            
        </div >
    )
}

export default Login
