/**
 * Created by jgb on 2016-08-06.
 */

import React from 'react';
import {Link,browserHistory} from 'react-router';
import { connect } from 'react-redux';
import {boardList,boardClick} from '../../actions/Study'

class Side extends React.Component {

    constructor(props) {
        super(props);
        this.checkType=this.checkType.bind(this);
    }

    componentDidMount() {
        this.props.boardList(this.props.studyId).then(
            ()=>{
                browserHistory.push('/');
            }
        )
    }

    checkType(type){
        switch(type){
            case 0:
                return "basic";
            case 1:
                return "reference";
            case 2:
                return "homework";
            case 3:
                return "verification";
            case 4:
                return "scheduler";
        }
    }

    render() {
        return (
            <div>
                <ul className="side-nav fixed">
                    <img className="circle responsive-img" src="images/man.png"/>
                    <li><div className="userView">
                            <a href="/"><span className="name">{this.props.userData.firstName} {this.props.userData.lastName}</span></a>
                            <a href="/"><span className="email">{this.props.userData.email}</span></a>
                    </div></li>
                    {this.props.board.map((data,i)=>{
                        return (<BoardInfo title={data.title} type={data.type} id={data.id}
                                           click={this.props.boardClick} checkType={this.checkType}/>)
                    })}
                    <li><div className="divider"></div></li>
                </ul>

            </div>


        )
    }
}

class BoardInfo extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        this.props.click(this.props.id);
    }

    render() {
        return(
            <Link to={this.props.checkType(this.props.type)}><li><a className="waves-effect" onClick={this.handleClick}>{this.props.title}</a></li></Link>
        );
    }
}


const mapStateToProps = (state) => {

    return {
        board:state.Study.toJS().board.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        boardList: (id) => {
            return dispatch(boardList(id));
        },
        boardClick: (id) => {
            return dispatch(boardClick(id));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Side);

