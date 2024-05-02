import {Route, Navigate, useNavigate} from 'react-router-dom'
import { AuthContext } from '../logincontext/AuthProvider'
import { useContext } from 'react'

function PrivateRoute({element, ...rest}) {
    const {state} = useContext(AuthContext)
    const isAuthenticated = state.isAuthenticated;
    const navigate = useNavigate();

  if (!isAuthenticated) {

    navigate('/register')
  }
  else {
    <Route {...rest} element  ={element} />
  }
  
}
  

export default PrivateRoute