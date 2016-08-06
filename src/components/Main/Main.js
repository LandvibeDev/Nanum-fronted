/**
 * Created by jgb on 2016-07-26.
 */
import React from 'react';
import Login from './Login'
import Header from './Header'
import Side from './Side'

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Side />
                <Login />
            </div>
        )
    }
}

export default Main;
