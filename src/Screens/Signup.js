import { Alert, AlertTitle, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PopupAlert from '../Components/PopupAlert';
import { signUpUser } from '../Config/firebasemethods';
import '../App.css'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [Popupsuccess, setPopupsuccess] = useState(false);
    const [popupmessage, setpopupmessage] = useState('');
    let navigate = useNavigate()
    let signup = () => {
        signUpUser({ email, password, username })
            .then((success) => {
                setpopupmessage(success)
                setPopupsuccess(true)
                console.log(success)
                navigate('/login')
            })
            .catch((error) => {
                console.log(error)
            })
        setPopupsuccess(false)
    }
    let locate = () => {

        navigate('/login')
    }
    return (
        <div className='bg'>
            
                    <Box sx={{ backgroundColor: "#222", width: "45%",border:"2px solid white", m:'auto',  borderRadius: "15px" }}>
                        <Typography variant='h4' sx={{ pt: 2, fontWeight: "bold" }} align='center' color='white'>Sign Up</Typography>
                        <Box sx={{ px: "80px", py: 3, width: "100%" }}>

                            <Box>
                                <TextField id="outlined-basic" label="Username" variant="standard" onChange={(e) => setUsername(e.target.value)} />

                            </Box>
                            <Box>

                                <TextField id="outlined-basic" color='warning' label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                            </Box>
                            <Box>

                                <TextField id="outlined-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
                            </Box>
                            <Box>

                                <Button onClick={signup}>Signin</Button>
                            </Box>
                            <Typography variant='p' component="span" sx={{ pt: 1 }} color='white'>Already have an account?</Typography>
                            <Typography variant='p' component="span" sx={{ pt: 1 }} onClick={locate} color='blue'>
                                <Button> Login
                                </Button></Typography>
                        </Box>
                

            </Box>

            {
                Popupsuccess ? <PopupAlert message={popupmessage} /> : ''
            }



        </div >
    )
}

export default Signup
