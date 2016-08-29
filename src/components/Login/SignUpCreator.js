/**
 * Created by jgb on 2016-08-29.
 */
import React from 'react';

class SignUpCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: "",
            passwordCheck:"",
            firstName:"",
            lastName:"",
            birthDay:"",
            email:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);

    }

    componentDidMount(){
        $(document).ready(()=> {
            $('.datepicker').pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15 // Creates a dropdown of 15 years to control year
            });
        })
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleSignUp(){
        let id=this.state.id;
        let pw=this.state.password;
        let fn=this.state.firstName;
        let nm=this.state.lastName;
        let em=this.state.email;
        let bd=this.state.birthDay;

        this.props.onSignUp(id,pw,fn,nm,em,bd);
    }

    render() {
        return (
            <div>
                <h1 className="center">Nanum</h1>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s8">
                                <input name="id"
                                       type="text"
                                       className="validate"
                                       onChange={this.handleChange}
                                       value={this.state.id}/>
                                <label >User Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8">
                                <input name="password"
                                       type="password"
                                       className="validate"
                                       onChange={this.handleChange}
                                       value={this.state.password}/>
                                <label>Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8">
                                <input name="passwordCheck"
                                       type="password"
                                       className="validate"
                                       onChange={this.handleChange}
                                       value={this.state.passwordCheck}/>
                                <label>Password check</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4">
                                <input name="firstName"
                                       type="text"
                                       className="validate"
                                       onChange={this.handleChange}
                                       value={this.state.firstName}/>
                                <label>First Name</label>
                            </div>
                            <div className="input-field col s4">
                                <input name="lastName"
                                       type="text"
                                       className="validate"
                                       onChange={this.handleChange}
                                       value={this.state.lastName}/>
                                <label>Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8">
                                <input name="email"
                                       type="email"
                                       className="validate"
                                       onChange={this.handleChange}
                                       value={this.state.email} />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8">
                                <input type="date"
                                       name="birthDay"
                                       className="datepicker"
                                       onChange={this.handleChange}
                                       value={this.state.birthDay}/>
                                <label>BirthDay</label>
                            </div>
                        </div>
                        <a className="waves-effect waves-light col btn"
                           onClick={this.handleSignUp}>제출</a>

                    </form>
                </div>
            </div>
        )
    }

}

export default SignUpCreator;