/**
 * Created by jgb on 2016-08-30.
 */

import * as types from '../actions/ActionTypes';
import {List, Map,fromJS,} from 'immutable';


export default function Verification(state, action) {
    if(typeof state === "undefined") {
        state = Map({
            verification: [],
            verificationFile: []
        });
    }

    switch(action.type) {
        /* LOGIN */
        case types.VERIFICATION:
            return state.set('verification',action.data);
        case types.VERIFICATION_FILE:
            return state.set('verificationFile',action.data);
        default:
            return state;
    }
}