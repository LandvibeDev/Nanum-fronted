/**
 * Created by jgb on 2016-08-06.
 */

import React from 'react';
import {Link} from 'react-router'
import style from '../../Style.css'

class Side extends React.Component {

    componentDidMount(prevProps, prveState) {
        // WHEN COMPONENT MOUNTS, INITIALIZE DROPDOWN
        // (TRIGGERED WHEN REFRESHED)
        $(".button-collapse").sideNav();
    }

    componentDidUpdate(prevProps, prveState) {
        // WHEN COMPONENT UPDATES, INITIALIZE DROPDOWN
        // (TRIGGERED WHEN LOGGED IN)
        $(".button-collapse").sideNav();
    }

    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav fixed">
                    <img className="circle responsive-img img-top" src="images/man.png"/>
                    <li><div className="userView">
                            <a href="/"><span className="name">Jeong</span></a>
                            <a href="/"><span className="email">jgb6255@gmail.com</span></a>
                    </div></li>
                    <li><div className="divider"></div></li>
                    <Link to="studys"><li><a className="waves-effect">스터디 홈</a></li></Link>
                    <li><div className="divider"></div></li>
                    <Link to="studys"><li><a className="waves-effect">스터디</a></li></Link>
                    <li><div className="divider"></div></li>
                    <Link to="studys"><li><a className="waves-effect">질문</a></li></Link>
                    <li><div className="divider"></div></li>

                </ul>

            </div>


        )


    }
}

export default Side;
