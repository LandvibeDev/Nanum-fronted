/**
 * Created by jgb on 2016-08-27.
 */
import React from 'react';
import { connect } from 'react-redux';
import {verification} from '../../actions/Verification'
import Verification from './Verification';

class VerificationList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.VerificationRequest(this.props.studyId,this.props.boardId);
    }

    render() {
        return (
            <div>
                {this.props.lists.map((verification, i) => {
                    return (<Verification list={verification}
                                          key={i}/>);
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        lists:state.Verification.get('verification'),
        studyId:state.Study.toJS().study.id,
        boardId:state.Study.toJS().board.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      VerificationRequest:(studyID,boardID)=>{
          return dispatch(verification(studyID,boardID));
      }

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(VerificationList);