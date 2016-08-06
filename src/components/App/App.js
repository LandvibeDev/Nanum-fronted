import React from 'react';
import Header from '../Main/Header'
import Side from '../Main/Side'
import {Counter} from '../';
import IssueList from  '../Issue/IssueList'
import Main from '../Main/Main'


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Side />
                {this.props.children}
            </div>
        )
    }
}

export default App;
