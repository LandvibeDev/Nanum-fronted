/**
 * Created by jgb on 2016-07-25.
 */

import React from 'react';
import { connect } from 'react-redux';
import StudyCreator from '../components/Study/StudyCreator'
import {Input, Button, Row, Table} from 'react-materialize';

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
                        return (<StudyList data={study.toJS()}
                                           key={i}/>);
                    })}

              </Table>
                <StudyCreator/>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    console.log(state.studyInfo);

    return {
        studyData: state.studyInfo
    }
};

class StudyList extends React.Component {
    render() {
        return(
            <tbody>
            <tr>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.topic}</td>
                <td>{this.props.data.id}</td>
            </tr>
            </tbody>
        );
    }
}

export default connect(mapStateToProps)(Study);
