/**
 * Created by jgb on 2016-07-25.
 */

import React from 'react';
import { connect } from 'react-redux';
import { receiveStudy } from '../../actions';
import StudyCreator from './StudyCreator'

class Study extends React.Component {
    render (){
        return(
            <div>
                {this.props.title} - {this.props.content} - {this.props.member}
                <StudyCreator/>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        title: state.studyInfo.title,
        content:state.studyInfo.content,
        member:state.studyInfo.member
    }
};

export default connect(mapStateToProps)(Study);
