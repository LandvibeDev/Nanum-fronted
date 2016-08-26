/**
 * Created by jgb on 2016-07-26.
 */
import React from 'react';
import Login from './Login'
import Calendar from '../components/Main/Calendar'
import Header from '../components/Main/Header'
import Side from '../components/Main/Side'

class Main extends React.Component {


    render() {
        return (
            <div className="row calendar">
                <Calendar/>

            </div>
        )
    }
}

export default Main;
