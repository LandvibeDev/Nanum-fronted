/**
 * Created by jgb on 2016-08-27.
 */
import React from 'react';
import VerificationFile from './VerificationFile'
import {verificationFile} from '../../actions/Verification'
import { connect } from 'react-redux';

class Verification extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.verificationFile(this.props.studyId,this.props.boardId,this.props.list.id);
    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="card row">
                        <p>start_date:{this.props.list.start_date}</p>
                        <p>end_date:{this.props.list.end_date}</p>
                        {this.props.file.map((verificationFile, i) => {
                            return (<VerificationFile file={verificationFile}
                                                  key={i}/>);
                        })}
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        file:state.Verification.get('verificationFile'),
        studyId:state.Study.toJS().study.id,
        boardId:state.Study.toJS().board.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        verificationFile:(studyID,boardID,veriID)=>{
            return dispatch(verificationFile(studyID,boardID,veriID));
        }

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Verification);
