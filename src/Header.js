import React, {component} from 'react';
import './Header.css';

const Header = (props) => {
  return(
    <h1 className='tc ba b--hot-pink'>{props.headermsg}</h1>
  );
}

export default Header;
