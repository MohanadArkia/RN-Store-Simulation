import React, {useState} from 'react';
import MyContext from './MyContext';

const MyProvider = props => {
  const [cart, setCart] = useState([]);

  return (
    <MyContext.Provider value={{cart, setCart}}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
