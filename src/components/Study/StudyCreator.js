/**
 * Created by jgb on 2016-07-25.
 */

import React from 'react';
import { connect } from 'react-redux';
import { postStudy,getStudy,PostStudy } from '../../actions';
import axios from 'axios';
import {Input, Button, Row} from 'react-materialize';


class StudyCreator extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state = {
            title: "",
            topic: "",
            id:""
        };
    }

    componentDidMount(){
        this.props.getReceive();
    }

    render() {
        return (
            <div>
                <Row>
                    <Input s={12} type="text" name="title" value={this.state.title} onChange={this.handleChange} label="title"/>
                    <Input s={12} type="text" name="topic" value={this.state.topic} onChange={this.handleChange} label="topic"/>
                    <Input s={12}type="text" name="id"  value={this.state.id} onChange={this.handleChange} label="id"/>
                    <Button onClick={this.onClick}>
                        Insert
                    </Button>
                    <Button onClick={this.onClick2}>
                        Post
                    </Button>
                </Row>
            </div>
        )
    }

    onClick() {
        this.props.onReceive([{title:this.state.title,topic:this.state.topic,id:this.state.id}]);
    }
    onClick2(){
        this.props.postReceive();
    }
    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onReceive: (data) => {
            dispatch(PostStudy(data));
        },
        postReceive:() =>{
            dispatch(postStudy());
        },
        getReceive:() =>{
            dispatch(getStudy());
        }
    }
};

StudyCreator = connect(undefined, mapDispatchToProps)(StudyCreator);

export default StudyCreator;
