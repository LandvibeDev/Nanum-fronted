/**
 * Created by jgb on 2016-08-27.
 */
import React from 'react';
import { connect } from 'react-redux';
import {Link, browserHistory} from 'react-router'
import {Header, Side, } from '../components';
import { logoutRequest,getStatusRequest } from '../../actions/Login'
import Login2 from '../../containers/Login2'

class Certification extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <div className="container">
                    <div className="card">
                        <div className="info">
                            <a className="username">Writer</a> wrote a log · 1 seconds ago
                        </div>
                        <div className="card-content">
                            Contents
                        </div>
                        <div className="footer">
                            <i className="material-icons log-footer-icon icon-button">star</i>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        isLoggedIn:state.Login.toJS().status.isLoggedIn
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => {
            return dispatch(logoutRequest());
        },
        getStatusRequest:(token,username)=>{
            return dispatch(getStatusRequest(token,username));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Certification);
