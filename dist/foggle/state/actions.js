"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFeatures = undefined;

var _types = require("./types");

var updateFeatures = function updateFeatures(json) {
  return {
    type: _types.UPDATE_ENABLED_FEATURES,
    enabledFeatures: json.enabledFeatures
  };
};

/**
 * Asks the server for new features
 *
 * @param {string} url the url to fetch from
 * @param {object} headers additional headers for the fetch request
 */
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
 * actions.js 05.07.18
 *
 * (c) Copyright 2018 ergovia GmbH
 */
var checkFeatures = exports.checkFeatures = function checkFeatures(url, headers) {
  return function (dispatch) {

    fetch("" + url, { headers: headers, mode: 'cors' }).then(function (response) {
      return response.ok ? response.json() : { enabledFeatures: [] };
    }).then(function (json) {
      return dispatch(updateFeatures(json));
    }).catch(console.error);
  };
};
//# sourceMappingURL=actions.js.map
