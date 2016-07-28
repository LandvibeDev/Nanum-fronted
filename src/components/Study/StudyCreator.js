/**
 * Created by jgb on 2016-07-25.
 */

import React from 'react';
import { connect } from 'react-redux';
import { receiveStudy } from '../../actions';
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
            content: "",
            member:""
        };
    }

    componentDidMount(){
        let getNumber = () => {
            axios.get('/study').then(response => {
                this.props.onReceive(response.data.title,response.data.content,response.data.member);
            });
        };
        getNumber();
    }

    render() {
        return (
            <div>
                <Row>
                    <Input s={12} type="text" name="title" value={this.state.title} onChange={this.handleChange} label="title"/>
                    <Input s={12} type="text" name="content" value={this.state.content} onChange={this.handleChange} label="content"/>
                    <Input s={12}type="text" name="member"  value={this.state.member} onChange={this.handleChange} label="member"/>
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
        this.props.onReceive(this.state.title,this.state.content,this.state.member);
    }
    onClick2(){
        axios.post('/study').then(response => {
            this.props.onReceive(response.data.title,response.data.content,response.data.member);
        });
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
