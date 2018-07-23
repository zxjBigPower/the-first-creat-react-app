import {Router,Route,hashHistory}from 'react-router';
// import createHistory from 'history/createBrowserHistory';
import { HashRouter } from 'react-router-dom'
import React ,{Component} from 'react'
import App from "./../pages/app/App"
class Routes extends Component {
    render(){
        return(
                <div>
                    <HashRouter>
                        <Route path='/' component={App}/>
                    </HashRouter>
                </div>
        )
    }
}
export default Routes