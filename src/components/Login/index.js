import React, {useState} from 'react';
import {AuthService, StorageService} from './../../services';
import { useHistory } from 'react-router'

function Login() {
  const [auth, setAuth] = useState({});
  const history = useHistory()

  const _handlerInput = (e) => {
    const _auth = auth;
    if(e.target.value !== ''){
      _auth[e.target.name] = e.target.value;
    }else{
      delete _auth[e.target.name];
    }
    setAuth(_auth);
  }

  const getLoggedIn = async e => {
    e.preventDefault();
    try {
      //setError('')
      //setIsLoading(false)
      const response = await AuthService.login(auth);
      
      const { user = {} } = response
      const { status = '' } = user

      if (status === '' || status === 'active') {
        StorageService.set('authorization', response)
        history.push('/home')
      } else {
        //StorageService.set('otpVerification', response)
        //history.push('/forgotpwd')
      }
      
    } catch (e) {
     
    }
    

  }
  
  return (
    <div className="login">
       <form>
          <input 
            type="text" 
            name="username" 
            onChange={(e)=>_handlerInput(e)} 
          />
          <input 
            type="password" 
            name="password" 
            onChange={(e)=>_handlerInput(e)} 
          />
          <button onClick={(e)=>getLoggedIn(e)}>Login</button>
       </form>
    </div>
  );
}

export default Login;
