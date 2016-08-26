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
            <div className="col s12 m12 l4 hide-on-med-and-down">
                <div className="input-field col l10">
                    <label>ID</label>
                    <input
                        name="id"
                        type="text"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.id}/>
                </div>
                <div className="input-field col l10">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        className="validate"
                        onChange={this.handleChange}
                        value={this.state.password}/>
                </div>
                <div className="input-field col l10">
                    <a className="waves-effect waves-green col btn l4 offset-l3 red ">Sign up</a>
                    <a className="waves-effect waves-light col btn l4 offset-l1 " onClick={this.handleLogin}>Sign in</a>
                </div>

            </div>
        )
    }
}
export default LoginCreator;