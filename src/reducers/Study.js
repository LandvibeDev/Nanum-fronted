/**
 * Created by jgb on 2016-09-04.
 */
/**
 * Created by jgb on 2016-08-30.
 */

import * as types from '../actions/ActionTypes';
import {List, Map,fromJS,} from 'immutable';


export default function Study(state, action) {
    if(typeof state === "undefined") {
        state = Map({
            study:Map({
                isStudy:false,
                id:""
            }),
            board:Map({
                list:[],
                id:""
            })

        });
    }

    switch(action.type) {
        /* LOGIN */
        case types.STUDY_CLICK:
            return state.setIn(['study','isStudy'],true)
                        .setIn(['study','id'],action.id);
        case types.BOARD_SUCCESS:
            return state.setIn(['board','list'],action.data);
        case types.BOARD_CLICK:
            return state.setIn(['board','id'],action.id);
        default:
            return state;
    }
}