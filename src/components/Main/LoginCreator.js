/**
 * Created by jgb on 2016-08-09.
 */
import React from 'react';

class LoginCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLogin() {
        let id = this.state.id;
        let pw = this.state.password;

        this.props.onLogin(id, pw).then(
            (success) => {
                if(!success) {
                    this.setState({
                        password: ''
                    });
                }
            }
        );
    }

    render() {
        return (
            <div>
                <div className="input-field col s12">
                    <label>ID</label>
                    <input
                        name="id"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.id}/>
                </div>
                <div className="input-field col s12">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.password}/>
                </div>
                <a className="waves-effect waves-light btn"
                   onClick={this.handleLogin}>SUBMIT</a>
            </div>
        )
    }
}
export default LoginCreator;