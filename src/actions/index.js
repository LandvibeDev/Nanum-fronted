
export const GET_STUDY = "GET_STUDY";
export const POST_STUDY = "POST_STUDY";
import axios from 'axios';

export function GetStudy(data) {
    return {
        type: GET_STUDY,
        data:data
    };
};

export function PostStudy(data) {
    return {
        type: POST_STUDY,
        data:data
    };
};


export function postStudy() { // needs to dispatch, so it is first argument
    return (dispatch) => axios.post('/ajax-study')
        .then(response=>{
            return dispatch(PostStudy(response.data));
        });
};

export function getStudy() { // needs to dispatch, so it is first argument
    return (dispatch) => axios.get('http://landvibe.com:8000/study/')
        .then(response=>{
            return (dispatch(GetStudy(response.data)));
        })
};



