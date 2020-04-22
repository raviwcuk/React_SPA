import React, { useReducer } from 'react';
import Context from './Context';
import {NotificationInitialState} from './../reducers/NotificationReducer';

const Provider = ({ children, reducer }) => {
  const [store, dispatch] = useReducer(reducer, { notification: NotificationInitialState});

  return (
    <Context.Provider value={{ dispatch, store }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;