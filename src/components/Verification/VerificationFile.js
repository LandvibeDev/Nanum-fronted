/**
 * Created by jgb on 2016-08-30.
 */
import React from 'react';
import { connect } from 'react-redux';

class VerificationFile extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <div className="col s3">
                    <img className="circle responsive-img" src="images/man.png"/>
                    {this.props.file.user.user.username}

                </div>
            </div>
        )
    }
}

export default VerificationFile;
