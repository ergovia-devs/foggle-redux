'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _types = require('./types');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
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


var features = function features() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        enabledFeatures: []
    };
    var action = arguments[1];


    switch (action.type) {

        case _types.UPDATE_ENABLED_FEATURES:

            return {
                enabledFeatures: [].concat(_toConsumableArray(action.enabledFeatures))
            };

        default:
            return state;

    }
};

exports.default = (0, _redux.combineReducers)({ features: features });
//# sourceMappingURL=reducer.js.map
