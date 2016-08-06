/**
 * Created by jgb on 2016-07-26.
 */
import React from 'react';
import Study from '../Study/Study'
import SignUp from './SignUp'
import {Input, Button, Row, Table} from 'react-materialize';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class Login extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Input s={12} label="First Name" />
                    <Input s={12} type="password" label="password"  />
                </Row>
                <Button waves='light'>Sign in</Button>
                <Link to="signup"><Button waves='light'>SignUp</Button></Link>

            </div>
        )
    }
}

export default Login;
