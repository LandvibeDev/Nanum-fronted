/**
 * Created by jgb on 2016-07-25.
 */

import React from 'react';
import { connect } from 'react-redux';
import { receiveStudy } from '../../actions';
import StudyCreator from './StudyCreator'
import {Input, Button, Row, Table} from 'react-materialize';

class Study extends React.Component {
    render (){
        return(
            <div>
              <Table>
                <thead>
                  <tr>
                    <th data-field="title">Title</th>
                    <th data-field="content">Content</th>
                    <th data-field="member">Member</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{this.props.title}</td>
                  <td>{this.props.content}</td>
                  <td>{this.props.member}</td>
                </tr>
                </tbody>
              </Table>
                <StudyCreator/>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
  console.log(typeof state.studyInfo)
    return {
        title: state.studyInfo.get('title'),
        content:state.studyInfo.get('content'),
        member:state.studyInfo.get('member')
    }
};

export default connect(mapStateToProps)(Study);
