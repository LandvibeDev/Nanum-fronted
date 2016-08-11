import React from 'react';
import {Header, Side, Main } from '../components'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Side/>
                {this.props.children}
            </div>
        )
    }
}

export default App;
