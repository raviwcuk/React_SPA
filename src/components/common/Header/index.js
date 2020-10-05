import React, { useContext } from 'react'
import './header.scss'
import { useHistory } from 'react-router'
import Toaster from './../Toaster';
import Context from './../../../store/Context'
import { StorageService } from '../../../services'
import { clearLogin } from '../../../actions/Authentication'
// import _ from 'lodash'

function Header() {
  //const { store, dispatch } = useContext(Context)
  // const { auth } = store;
  const { dispatch } = useContext(Context)
  const history = useHistory();

  const logOut = () => {
    StorageService.removeAll()
    history.push('/')
    dispatch(clearLogin())
  }

  return (
    <div className={`header`}>
       Logo
       <p onClick={()=>logOut()}>LogOut</p>
       <Toaster/>
    </div>
  );
}

export default Header;
