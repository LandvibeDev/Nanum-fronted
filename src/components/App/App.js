import React from 'react';
import {Counter} from '../';
import IssueList from  '../Issue/IssueList'
import Main from '../Main/Main'


class App extends React.Component {
    render() {
        return (
            <div>
            <Main />
                {this.props.children}
            </div>
        )
    }
}

export default App;
