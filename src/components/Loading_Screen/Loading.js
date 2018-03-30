// import React from 'react';
// import {Button} from 'react-bootstrap';
// import {FormGroup} from 'react-bootstrap';
import './Loading.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// const buttonsInstance = (props) => (
//     <Router>
//         <div className="well wellStyles">
//             <form>
//                 <FormGroup>
//                     <Button to="/login" bsStyle="primary" bsSize="large" block onClick={props.clicked_login}>
//                         LOGIN
//                     </Button>
//                     <Button to="/create" bsSize="large" block onClick={props.clicked_create}>
//                         CREATE YOUR ACCOUNT
//                     </Button> 
//                 </FormGroup>
//             </form>
//         </div>
//     </Router>
    
// );


// export default buttonsInstance;

import {
    BrowserRouter,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import React from 'react';
import Login from '../FormLogin/Login';
  
  
  // We give each route either a target `component`, or we can send functions in `render` or `children` 
  // that return valid nodes. `children` always returns the given node whether there is a match or not.
  const Apps = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topic">Topics</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" render={ ( ) => (<h2> HomePage </h2>) } />
                <Route path="/about" component={About}/>
                <Route path="/topic" component={Topics}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
    </BrowserRouter>
  );

  const About = () => {
      return <h1>About</h1>;
  }

  const Topics = () => {
      return <h1>Topics</h1>;
  }

  export default Apps;