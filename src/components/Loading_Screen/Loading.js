import React from 'react';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import './Loading.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const buttonsInstance = (props) => (
    <Router>
        <div className="well wellStyles">
            <form>
                <FormGroup>
                    <Button to="/login" bsStyle="primary" bsSize="large" block onClick={this.Login}>
                        LOGIN
                    </Button>
                    <Button to="/create" bsSize="large" block>
                        CREATE YOUR ACCOUNT
                    </Button> 
                    {/* <Route path="/login" component={LOGIN} />
                    <Route path="/create" component={CREATE} /> */}
                    
                </FormGroup>
            </form>
        </div>
    </Router>
    
);


export default buttonsInstance;