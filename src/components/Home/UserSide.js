/**
 * Created by jgb on 2016-09-04.
 */


import React from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import {studyClick} from '../../actions/Study'

class UserSide extends React.Component {

    constructor(props) {
        super(props);
        this.handleStudy = this.handleStudy.bind(this);
    }

    handleStudy(id){
        this.props.studyClick(id);
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
                    <li><div className="divider"></div></li>
                    <Link to="studys"><li><a className="waves-effect">나의 정보</a></li></Link>
                    <li><div className="divider"></div></li>
                    <li className="no-padding">
                        <ul className="collapsible collapsible-accordion">
                            <li className="bold"><a className="collapsible-header waves-effect">스터디목록</a>
                                <div className="collapsible-body">
                                    <ul>
                                        {this.props.userData.studyList.map((study, i) => {
                                            return (<StudyInfo click={this.handleStudy}
                                                               id={study.id}
                                                               title={study.title}></StudyInfo>);
                                        })}
                                    </ul>
                                </div>
                            </li>
                            </ul>
                        </li>
                    <li><div className="divider"></div></li>
                    <Link to="scheduler"><li><a className="waves-effect">일정</a></li></Link>
                    <li><div className="divider"></div></li>

                </ul>

            </div>


        )


    }
}

class StudyInfo extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.click(this.props.id);
    }

    render() {

        return(
            <li><a onClick={this.handleClick} className="waves-effect">{this.props.title}</a></li>
        );
    }
}

const mapStateToProps = (state) => {

    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        studyClick: (id) => {
            return dispatch(studyClick(id));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserSide);
