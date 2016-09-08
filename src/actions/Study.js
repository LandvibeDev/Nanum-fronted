/**
 * Created by jgb on 2016-09-04.
 */
/**
 * Created by jgb on 2016-08-30.
 */

import {
    STUDY_CLICK,
    BOARD_SUCCESS,
    BOARD_CLICK
} from "./ActionTypes"
import axios from 'axios';

export function boardList(id){
    return (dispatch) => {
        // API REQUEST
        return axios({
            method: 'get',
            url: 'http://landvibe.com:8000/study/'+id+'/board/'
        }).then((response) => {
            // SUCCEED
            console.log(response.data);
            dispatch(boardSuccess(response.data));
        }).catch((error)=>{
            console.log("error");
            console.log(error);
        })
    };
}

export function boardSuccess(data){
    return{
        type:BOARD_SUCCESS,
        data:data
    }
}

export function studyClick(id){
    return{
        type:STUDY_CLICK,
        id:id
    }
}


export function boardClick(id){
    return{
        type:BOARD_CLICK,
        id:id
    }
}


