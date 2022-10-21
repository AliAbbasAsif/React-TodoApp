import { Button, TextField, Typography } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../Config/firebasemethods';


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
            navigate('/todos')
        }).catch((err) => {
            console.log(err)
        })
    }
    let locate =()=>{
     
        navigate('/signup')
    }
    return (
        <div >
            <Box sx={{ backgroundColor: "crimson", height: "100vh", m: "auto" }}>
                <Box sx={{ p: "200px" }}>
                    <Box sx={{ backgroundColor: "#222", p: "10px", width: "30%", m: "auto", borderRadius: "15px" }}>
                        <Typography variant='h4' sx={{ pt: 2, fontWeight: "bold" }} align='center' color='white'>Login</Typography>
                        <Box sx={{px:"80px",py:3,width:"100%"}}>
                            <Box>

                                <TextField id="outlined-basic" color='warning' label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                            </Box>
                            <Box>

                                <TextField id="outlined-basic" sx={{m:"auto"}} label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
                            </Box>
                            <Box>

                                <Button onClick={login}  sx={{ p: 2 }}>Login</Button>
                            </Box>
                           

                            <Typography variant='p' component="span" sx={{ pt: 1}}  color='white'>Dont Have Account?</Typography>
                            <Typography variant='p' component="span" sx={{ pt: 1}}  onClick={locate} color='blue'>
                                <Button> SignUp
                                    </Button></Typography>

                            
                        </Box>
                    </Box>
                </Box>


            </Box>
        </div>
    )
}

export default Login
