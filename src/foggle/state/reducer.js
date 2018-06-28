import {combineReducers} from 'redux';
import {UPDATE_ENABLED_FEATURES} from './types';

const features = (state = {
    enabledFeatures: []
}, action) => {

    switch (action.type) {

        case UPDATE_ENABLED_FEATURES:

            return {
                enabledFeatures: [...action.enabledFeatures]
            };

        default:
            return state;

    }

};

export default combineReducers({ features });
