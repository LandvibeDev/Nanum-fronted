/**
 * Created by jgb on 2016-08-06.
 */

import React from 'react';
import { Link } from 'react-router'

import Side from './Side'


class Header extends React.Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper ">
                    <a href="/" className="brand-logo center">Nanum</a>
                    <ul className="left hide-on-med-and-down">
                        <li><Link to=""><i className="material-icons">menu</i></Link></li>
                        <li><Link to ="login">SignIn</Link></li>
                    </ul>

                </div>
            </nav>

        )
    }
}

export default Header;