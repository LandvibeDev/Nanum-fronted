/**
 * Created by jgb on 2016-07-27.
 */
import React from 'react';
import {Input, Button, Row, Table} from 'react-materialize';


class SignUp extends React.Component {
    render() {
        return (
            <div>
                <h1>회원가입</h1>
                <Row>
                    <Input s={12} label="First Name" />
                    <Input s={12} type="password" label="password"  />
                </Row>
            </div>
        )
    }
}

export default SignUp;