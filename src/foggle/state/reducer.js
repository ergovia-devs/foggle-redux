/**
 * This file is part of foggle-redux.
 *
 * foggle-redux. is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * foggle-redux is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with foggle-redux.  If not, see <http://www.gnu.org/licenses/>.
 *
 * reducer.js 05.07.18
 *
 * (c) Copyright 2018 ergovia GmbH
 */
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
