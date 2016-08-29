/**
 * Created by jgb on 2016-07-26.
 */
import React from 'react';
import Login from '../components/Login/Login'
import Calendar from '../components/Home/Calendar'
import Header from '../components/Home/Header'
import Side from '../components/Home/Side'

class Home extends React.Component {


    render() {
        return (
            <div className="row calendar">
                <Calendar/>

            </div>
        )
    }
}

export default Home;
