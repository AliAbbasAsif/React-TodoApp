import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import Blog from '../Screens/Blog'
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Price from '../Screens/Price'
import Products from '../Screens/Products'
import Signup from '../Screens/Signup';
import ToDoApp from '../Screens/ToDoApp';
function AppRouter() {
    return (
        <Router>
            <div>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='todoapp' element={<ToDoApp />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='price' element={<Price />} />
                    <Route path='products' element={<Products />} />
                </Routes>
            </div>
        </Router>

    )
}

export default AppRouter
