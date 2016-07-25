import {RECV_VALUE} from '../actions';

const initialValue = {
    value: -1
};

const counterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case RECV_VALUE:
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state;
    }
};

export default counterReducer;