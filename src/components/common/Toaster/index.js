import React, { useEffect, useContext } from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Context from './../../../store/Context';
import { clearNotification } from './../../../actions/Notification'

function Toaster() {
  const {store, dispatch} = useContext(Context);
  
  useEffect (()=>{
    if(store.notification && store.notification.message)
    NotificationManager[store.notification.type](store.notification.message);
    setTimeout(() => {
      dispatch(clearNotification())
    }, 1000)
  },[store.notification, dispatch]);

  return (
      <NotificationContainer/>
  );
}

export default Toaster;
