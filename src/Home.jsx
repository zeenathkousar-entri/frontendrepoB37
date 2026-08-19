import React from 'react'
import Navs from './Navbar';
import Login from './login';
import { useState } from 'react';

const Home = () => {
    const [showLogin, setShowlogin] = useState(false);

    return (
        <div>
            <Navs setShowlogin={setShowlogin} />
            {setShowlogin ? <Login setShowlogin={setShowlogin} /> : <></>}




        </div>
    )
}

export default Home
