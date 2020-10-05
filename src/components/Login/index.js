import React, {useState, useContext} from 'react'
import {AuthService, StorageService} from './../../services'
import { useHistory } from 'react-router'
import Input from './../common/Input'
import Button from './../common/Button'
import Label from './../common/Label';
import 'react-notifications/lib/notifications.css';
import Context from './../../store/Context';
import {setNotification} from './../../actions/Notification';
import { setAuthentication, clearLogin } from '../../actions/Authentication'

function Login() {
  const [auth, setAuth] = useState({});
  const history = useHistory()
  const {dispatch} = useContext(Context);

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
      const response = await AuthService.login(auth);
      const { user = {} } = response
      const { status = '' } = user

      if (status === '' || status === 'active') {
        dispatch(clearLogin())
        StorageService.set('authorization', response);
        dispatch(setAuthentication({ response }))
        history.push('/home');
      }
      
    } catch (e) {
      const {response = {}} = e;
      const {data = {}} = response;
      const {message = ''} = data;
      dispatch(setNotification({message, type:'error'}));
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
