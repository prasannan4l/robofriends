import React, {Component} from 'react';
import './Helo.css';

const Helo = (props) => {
    return (
    <div>
     <p> {props.greeting}</p>
   </div>
  );
}

export default Helo;
