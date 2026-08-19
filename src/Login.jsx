import React,{useState,useContext,useEffect} from 'react'
import { StoreContext } from './StoreContext';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const Login =  ({ setShowlogin }) => {
    const [currState, setCurrstate] = useState('Sign Up');

        const navigate = useNavigate();


    const { url, setToken, Token } = useContext(StoreContext);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    function onChangeHandler(e){
                const name=e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))
    }

    async function onLogin(e) {
        e.preventDefault();
              console.log('form submited');
        let newurl=url;
        if(currState==="Login"){
            newurl+="/login"
        }
        else{
            newurl+="/signup/register"
        }
        
        const resp=await axios.post(newurl,data);

        if(resp.data.success){
            //means we got login successfull so we will get one token
            //we use a state variable to store token and lets create that varible inside storeContext.jsx
            setToken(resp.data.token);
            console.log(resp.data.token);
            localStorage.setItem("token",resp.data.token);
            // setShowlogin(false);
             navigate('/');

        }
        else{
            alert(resp.data.message)
        }




    }

        useEffect(()=>{
      console.log(data);
    },[data])


    return (
        <div>
            <form onSubmit={onLogin} action="" className='login-popup-container'>


                {currState === "Login" ? <h2>Login Form</h2> : <h2>Signup Form</h2>}

                {currState === "Login" ? <></> : <input type="text" placeholder='Your name' name='name' value={data.name} onChange={onChangeHandler} required />}

                <br /> <br />
                <input type="email" name="email" id="email" placeholder='Your Email' value={data.email} onChange={onChangeHandler} required />
                <br /><br />
                <input type="password" name="password" id="password" placeholder='password' value={data.password} onChange={onChangeHandler} required />
                <br /> <br />


                <button type='submit'>{currState === 'Sign Up' ? "Create Account" : "Login"}</button>



                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>

                {currState === "Login" ? <p>Create Account <span onClick={() => setCurrstate('Sign Up')}>Click Here</span></p> : <span>Already have an account<p onClick={() => setCurrstate('Login')}>Login Here</p></span>}

            </form>

        </div>
    )
}

export default Login
