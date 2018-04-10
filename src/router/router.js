import React,{Component} from 'react';
import { Router, Route, hashHistory,browserHistory,IndexRoute } from 'react-router'

import App from 'pages/App';
import Home from 'pages/Home/Home';
// import Page1 from 'pages/Page1/Page1';
// import Counter from 'pages/Counter/Counter';
// import UserInfo from 'pages/UserInfo/UserInfo';

// const Getrouter = () => (
//     <Router history={hashHistory} >
//         <Route path="/" component={ App }>
//             <IndexRoute component={Home} />
//             <Route path="home" component={Home}/>
//             <Route path="page1" component={Page1}/>
//         </Route>
//     </Router>
// );


//动态路由
const Page1 = (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('pages/Page1/Page1').default)
    }, 'Page1')
  }
  const Counter = (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('pages/Counter/Counter').default)
    }, 'Counter')
  }
  const UserInfo = (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('pages/UserInfo/UserInfo').default)
    }, 'UserInfo')
  }
export default class Getrouter extends Component{
    render(){
        return (
            <Router history={hashHistory} >
                <Route path="/" component={ App }>
                    <IndexRoute component={Home} />
                    <Route path="home" component={Home}/>
                    <Route path="page1" getComponent={Page1}/>
                    <Route path="counter" getComponent={Counter}/>
                    <Route path="userInfo" getComponent={UserInfo}/>
                </Route>
            </Router>           
        )
    }
}
