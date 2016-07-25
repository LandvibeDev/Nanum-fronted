/**
 * Created by jgb on 2016-07-25.
 */

import React from 'react';
import { connect } from 'react-redux';
import { receiveStudy } from '../../actions';

class StudyCreator extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state = {
            title: "",
            content: "",
            member:""
        };
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="title"/>
                    <input type="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder="content"/>
                    <input type="text" name="member"  value={this.state.member} onChange={this.handleChange} placeholder="member"/>
                    <button onClick={this.onClick}>
                        Insert
                    </button>
                </p>
            </div>
        )
    }

    onClick() {
        this.props.onReceive(this.state.title,this.state.content,this.state.member);
    }
    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        onReceive: (title,content,member) => {
            dispatch(receiveStudy(title,content,member));
        }
    }
}

StudyCreator = connect(undefined, mapDispatchToProps)(StudyCreator);

export default StudyCreator;