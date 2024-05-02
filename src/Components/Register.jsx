import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../logincontext/AuthProvider';
import axios from '../api/axios';
import { useFormik } from 'formik';
import { signUpSchema } from '../schema';


let errmsg;
function Register() {
  

  const LOGIN_URL = 'https://api.ashleysleepuniversity.com/v1/user/login'

  const initialValues = {
    username: "",
    password: "",
  }
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate();

  
  const handleSubmission = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.post(LOGIN_URL,
        {
          username: values.username,
          password: values.password,
        },
        {
          headers: headers,
        },
      );

      dispatch({
        type: "SET_AUTH",
        accessToken: response.data.access_token,
        password: response.data.password, 
        id : response.data.user.id,
        ...response.data.user

      })
      console.log(response)
      navigate('/mainheader')
      
      
    } catch (err) {
      console.log(err);
      if (!err.response) {
        errmsg = 'No Server Response';

      } else {
        errmsg = 'Login Failed';
        
      }
    }
    
  }
  const { values, errors, touched, handleBlur, handleChange , handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      handleSubmission(values);
      action.resetForm();
    },
  });

  return (
    <>
      <section>
        <div className='coverline1'></div>
        <p
          className={errmsg ? 'errMsg' : 'offscreen'}
          aria-live="asertive">{errmsg}</p>

        <div className='container'>
          <div className='contentcontainer'>
            <div className='logincontainer'>
              <div className='heading'>
                <img src='assets/images/ashley.png' alt=' ' />
              </div>

              <div className='install'>
                <div className='appstore'>
                  <a href="https://www.apple.com/"><img src='assets/images/appstore256.png' alt='' /></a>
                </div>
                <div className='playstore'>
                  <a href="https://play.google.com/"><img src='assets/images/googleplayimage.png' alt=''/></a>
                </div>
              </div>

              <div className='about'>About our application</div>
              <div className="formwrapper">

                <form className="fill" onSubmit={handleSubmit}>

                  <div className='usernameinput'>
                    <span className="fa-solid fa-user"></span>
                    <input
                      type="name" name="username"
                      placeholder="Username"
                      className='nameinput'
                      value={values.username}
                      onChange={handleChange} required
                      onBlur={handleBlur}
                      autoComplete="off"
                      
                    />
                    {errors.username && touched.username ? (<p className='form-error'>{errors.username}</p>) : null}
                  </div>

                  <div className='usernameinput'>
                    <span className="fa-solid fa-lock"></span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off" />
                    {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null}
                  </div>

                  <button className='loginbutton' type='submit'>Login
                  </button>
                  <div className='register'>
                    <p>if you haven't register for this website</p>
                    <button type='button'>Click here</button>
                  </div>
                  <div className='recovery'>
                    <p>if you have Forgot your Password</p>
                    <button type='button'>Click here</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="imagecontainer">
            <img className='coverimage' src="assets/images/beds.png" alt=''/>
          </div>

        </div>
        <div className='footer'><p> <span>&#169;</span> Copyright 2023 all rights reserved by ashleysleeplite.com</p></div>
        <div className='coverline2'></div>
      </section>
    </>
  )
}

export default Register


