import React, {useState} from 'react';
import MyContext from './MyContext';

const MyProvider = props => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  return (
    <MyContext.Provider value={{cart, setCart, quantity, setQuantity}}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
