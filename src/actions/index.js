export const RECV_VALUE = "RECV_VALUE";
export const STUDY_VALUE = "STUDY_VALUE";
import axios from 'axios';


export function receiveValue(value) {
    return {
        type: RECV_VALUE,
        value: value
    };
};

export function receiveStudy(title,topic,id) {
    return {
        type: STUDY_VALUE,
        title:title,
        topic:topic,
        id:id
    };
};


export function postStudy() { // needs to dispatch, so it is first argument
    return (dispatch) => axios.post('/ajax-study')
        .then(response=>{
            dispatch(receiveStudy(response.data.title,response.data.topic,response.data.id));
        });
};

export function getStudy() { // needs to dispatch, so it is first argument
    return (dispatch) => axios.get('http://landvibe.com:8000/study/')
        .then(response=>{
            response.data.map((study, i) => {
                console.log(study.title);
                return (dispatch(receiveStudy(study.title,study.topic,study.id)));
            })
        })
};


