import React, { useEffect, useContext } from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Context from './../../../store/Context';

function Toaster() {
  const {store} = useContext(Context);

  useEffect (()=>{
    if(store.notification && store.notification.message)
    NotificationManager[store.notification.type](store.notification.message);
  },[store.notification]);

  return (
      <NotificationContainer/>
  );
}

export default Toaster;
