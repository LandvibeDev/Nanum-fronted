/**
 * Created by jgb on 2016-08-06.
 */

import React from 'react';
import { Link } from 'react-router'



class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper ">
                    <a href="/" className="brand-logo center">Nanum</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to ="login">SignIn</Link></li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Header;