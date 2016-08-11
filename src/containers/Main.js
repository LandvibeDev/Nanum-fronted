/**
 * Created by jgb on 2016-07-26.
 */
import React from 'react';
import Login from './Login'
import Header from '../components/Main/Header'
import Side from '../components/Main/Side'

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className ="row">
                <ul className="collapsible col s6" data-collapsible="accordion">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                    </li>
                </ul>

                <ul className="collapsible col s6" data-collapsible="accordion">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                        <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                    </li>
                </ul>
                </div>
            </div>



        )
    }
}

export default Main;
