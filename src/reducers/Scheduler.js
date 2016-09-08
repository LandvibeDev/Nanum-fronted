/**
 * Created by jgb on 2016-08-27.
 */
import * as types from '../actions/ActionTypes';
import {List, Map,fromJS,} from 'immutable';


export default function Scheduler(state, action) {
    if(typeof state === "undefined"){
        state = Map(
            {status:false,
            start:"",
            end:"",
            title:""}
            );
    }

    switch(action.type) {
        /* LOGIN */
        case types.CAL_CLICKED:
            return state.set('status',true)
                .set('start',action.start)
                .set('end',action.end)
                .set('title',action.title);
        default:
            return state;
    }
}