import { AppBar, Box, Button, Tooltip, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Blog from '../Screens/Blog';
import Price from '../Screens/Price';
import Products from '../Screens/Products';
function Navbar() {
    let navigate = useNavigate();

    return (
        <div>

            <AppBar sx={{ backgroundColor: "crimson", padding: "15px" }} component="nav">
                <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>

                    <Typography variant='h5' align='left' >
                        TODO App
                    </Typography>

                    {[{
                        route: '/blog', name: "Blog"
                    },
                    {
                        route: '/products', name: "Products"
                    },
                    {
                        route: '/price', name: "Price"
                    }, {
                        route: '/login', name: "Login"
                    }].map((page, index) => (
                        <Box key={index} onClick={() => navigate(page.route)}>
                            <Typography>
                                <Tooltip title={page.name} sx={{ padding: "0px" }}>
                                    <Button variant='text' color='inherit' sx={{ fontSize: "17px" }}>{page.name}</Button>
                                </Tooltip>
                            </Typography>
                        </Box>
                    ))}


                </Container>
                {/* <Routes>
                <Route path='blog' element={<Blog />} />
                <Route path='price' element={<Price />} />
                <Route path='products' element={<Products />} />
            </Routes> */}
            </AppBar>



        </div>
    )
}

export default Navbar
