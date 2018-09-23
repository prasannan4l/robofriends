import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Helo from './Helo';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<div><Header headermsg={'Robo Friends App'}/> <Helo greeting={'A Comic Robo Friends app using React'}/></div>, document.getElementById('root'));
registerServiceWorker();
