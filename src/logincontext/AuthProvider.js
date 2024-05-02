import { createContext, useReducer } from "react";
import secureLocalStorage from "react-secure-storage";


export const AuthContext = createContext({});
const token = secureLocalStorage.getItem("accessToken");



const initialState = {
  userData: {
    token : token ? token : null,
    
  }
};

function reducer(state, action) {
  switch (action.type) {

    case 'SET_AUTH':
      const userData = {
        accessToken: action.accessToken,
        username: action.username,
        password: action.password,
        id: action.id,
        ...action

      };
      secureLocalStorage.setItem('userData', JSON.stringify(userData));
      return {...state, userData};

    case 'LOGOUT':
      secureLocalStorage.removeItem('userData');
      return { ...state, userData: null };
    default:
      return state;
  }
};



export function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = { state, dispatch };


  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}

