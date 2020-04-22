import React, {useState} from 'react'
import {AuthService, StorageService} from './../../services'
import { useHistory } from 'react-router'
import Input from './../common/Input'
import Button from './../common/Button'
import Label from './../common/Label';

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

  const _clicked = async e => {
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
          <Label name={'Username'} />
          <Input 
            name={'username'} 
            type={"text"} 
            _handlerInput = { _handlerInput} 
          />
          <Label name={'Password'} />
          <Input 
            name={'password'} 
            type={"password"} 
            _handlerInput = { _handlerInput} 
          />
          <Button className={'primary'} text={"Login"} _clicked = {_clicked} />
       </form>
    </div>
  );
}

export default Login;
