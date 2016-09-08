import React from 'react';
import { connect } from 'react-redux';
import {Link, browserHistory} from 'react-router'
import {Header, Side,UserSide } from '../components';
import SignUp from '../components/Login/SignUp'
import { logoutRequest,getStatusRequest} from '../actions/Login'
import Main from './Main'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        // get cookie by name
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        // get loginData from cookie
        let loginData = getCookie('key');

        // if loginData is undefined, do nothing
        if (typeof loginData === "undefined") return;

        // decode base64 & parse json
        loginData = JSON.parse(atob(loginData));
        console.log(loginData);

        // if not logged in, do nothing
        if (!loginData.isLoggedIn) return;

        this.props.getStatusRequest(loginData.token,loginData.username,loginData.sessionid);
    }

    handleLogout(){

        // EMPTIES THE SESSION
        let loginData = {
            isLoggedIn:false,
            username: '',
            token:'',
            sessionid:''
        };

        document.cookie = 'key=' + btoa(JSON.stringify(loginData));
        this.props.logoutRequest();
        window.location.reload();
    }

    render() {

        const loggedin=(
            <div>
                <div>
                    {this.props.isStudy ?
                        <Side userData={this.props.userData}
                              studyId={this.props.studyId}/>
                        :
                        <UserSide userData={this.props.userData}/>
                    }
                </div>
                <div className="base">
                    <Header onLogout={this.handleLogout}/>
                    {this.props.children}
                </div>
            </div>
        );


        return (
            <div>
                {this.props.isLoggedIn ? loggedin  : (this.props.signUp ? <SignUp/>:<Main/>)}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.Study.toJS().study.isStudy);

    return {
        signUp:state.Login.toJS().signUp.clicked,
        isLoggedIn:state.Login.toJS().status.isLoggedIn,
        userData:state.Login.toJS().data,
        isStudy:state.Study.toJS().study.isStudy,
        studyId:state.Study.toJS().study.id
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => {
            return dispatch(logoutRequest());
        },
        getStatusRequest:(token,username,sessionid)=>{
            return dispatch(getStatusRequest(token,username,sessionid));
        },

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
