export const RECV_VALUE = "RECV_VALUE";
export const STUDY_VALUE = "STUDY_VALUE"

export function receiveValue(value) {
    return {
        type: RECV_VALUE,
        value: value
    };
};

export function receiveStudy(title,content,member) {
    return {
        type: STUDY_VALUE,
        title:title,
        content:content,
        member:member
    };
};