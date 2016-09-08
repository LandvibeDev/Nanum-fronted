/**
 * Created by jgb on 2016-08-30.
 */

import {
    VERIFICATION,
    VERIFICATION_FILE
} from "./ActionTypes"
import axios from 'axios';

export function verification(studyID,boardID){
    return (dispatch) => {
        // API REQUEST
        return axios({
            method: 'get',
            url: 'http://landvibe.com:8000/study/'+studyID+'/board/'+boardID+'/verification/'
        }).then((response) => {
            // SUCCEED
            console.log(response.data);
            console.log("asdasd");
            dispatch(verificationSuccess(response.data));
        }).catch((error)=>{
            console.log("error");
            console.log(error);
        })
    };
}

export function verificationFile(studyID,boardID,veriID){
    return (dispatch) => {
        // API REQUEST
        return axios({
            method: 'get',
            url: 'http://landvibe.com:8000/study/'+studyID+'/board/'+boardID+'/verification/'+veriID+'/file/'
        }).then((response) => {
            // SUCCEED
            console.log(response.data);
            dispatch(verificationFileSuccess(response.data));
        }).catch((error)=>{
            console.log(error);
        })
    };
}


export function verificationSuccess(data){
    return{
        type:VERIFICATION,
        data:data
    }
}

export function verificationFileSuccess(data){
    return{
        type:VERIFICATION_FILE,
        data:data
    }
}