/**
 * Created by jgb on 2016-07-25.
 */

import React from 'react';
import { connect } from 'react-redux';
import { receiveStudy } from '../../actions';
import StudyCreator from './StudyCreator'
import {List, Map} from 'immutable';
import {Input, Button, Row, Table} from 'react-materialize';
import axios from 'axios';
import update from 'react-addons-update'

class Study extends React.Component {
    constructor(props) {
        super(props);
    }

    render (){
        return(
            <div>
              <Table>
                <thead>
                  <tr>
                    <th data-field="title">Title</th>
                    <th data-field="topic">topic</th>
                    <th data-field="id">id</th>
                  </tr>
                </thead>
                    {this.props.studyData.map((study, i) => {
                        return (<StudyList title={study.title}
                                           topic={study.topic}
                                           id={study.id}
                                           key={i}/>);
                    })}

              </Table>
                <StudyCreator/>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    console.log(state.studyInfo)

    return {
        studyData: state.studyInfo.data
    }
};

class StudyList extends React.Component {
    render() {
        return(
            <tbody>
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.topic}</td>
                <td>{this.props.id}</td>
            </tr>
            </tbody>
        );
    }
}

export default connect(mapStateToProps)(Study);
