import {combineReducers} from 'redux';

const allReducers = combineReducers({
    a : function(state = null, action){
        return state;
    }
});

export default allReducers;