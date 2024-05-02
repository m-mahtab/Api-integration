import React, { useRef, useEffect, useState, useContext} from 'react'
//import context 
import {AuthContext} from '../logincontext/AuthProvider';
//import axios to send api request
import axios from '../api/axios';

//Api URL

const LOGIN_URL = 'https://api.ashleysleepuniversity.com/v1/user/login'

function Login() {

    //import dispatch from context
    const {  dispatch } = useContext(AuthContext)

    //to create mutable references that persist across re-renders of the component. It is commonly used to access and manipulate
    //DOM elements or store values that need to be preserved between renders.
    const userRef = useRef();
    const errRef = useRef();

    //creating state instances 
    const [user, setUser] = useState(' ');
    const [pwd, setPwd] = useState(' ');
    const [errmsg, setErrmsg] = useState();
    const [success, setSuccess] = useState(false);


    //Handling states
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrmsg(' ');
    }, [user, pwd])


    //logout functionality
    function logout (){ 

        //dispatch here (from any component logout can be triggered) and remove item functionality in context, means from wherever 
        //you logout, data will be unaccessible form every component
        dispatch({
            type : "LOGOUT",
            accessToken : null,
            username : null,
        })
        setSuccess(false)
    }

    //data submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const headers = {
                "Content-Type": "application/json",
            };
            const response = await axios.post(LOGIN_URL,
                {
                    username: user, password: pwd,
                },
                {
                    headers: headers,
                },
            );
                console.log(response);

            dispatch({
                type:"SET_AUTH",
                accessToken: response.data.access_token, 
                username : response.data.user
            })

            
            setUser('');
            setSuccess(true);

        } catch (err) {
            console.log(err);
            if (!err.response) {
                setErrmsg('No Server Response')

            } else {
                setErrmsg('Login Failed')
            }
            errRef.current.focus();
        }

    }

    return (

        <>
            {success ? (
                <section>
                    <h1>You are logged In</h1>
                    <button onClick={logout}>Logout</button>
                    <a href='/'>
                        Go to Home
                    </a>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errmsg ? 'errMsg' : 'offscreen'}
                        aria-live="asertive">{errmsg}</p>
                    <h1>Sign In</h1>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username :</label>
                        <input type="text" id="username" ref={userRef} autoComplete="off"
                            onChange={(e) => setUser(e.target.value)} value={user} required />

                        <label htmlFor='password'>Password :</label>
                        <input type="password" id="password" autoComplete="off"
                            onChange={(e) => setPwd(e.target.value)} value={pwd} required />

                        <button>Sign In</button>
                    </form>
                    <p>Need an Account? <br />
                        <span className='line'>
                            <a href='#'>Sign Up</a>
                        </span>
                    </p>

                </section>
            )}
        </>
    )
}

export default Login