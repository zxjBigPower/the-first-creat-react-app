import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./router/router"
 import App from './pages/app/App';
//import SiderDemo from './pages/navi/navi'
import registerServiceWorker from './registerServiceWorker';
//<SiderDemo/>
ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
