import {UPDATE_ENABLED_FEATURES} from "./types";

const updateFeatures = json => ({
    type: UPDATE_ENABLED_FEATURES,
    enabledFeatures: json.enabledFeatures
});

/**
 * Asks the server for new features
 *
 * @param {string} url the url to fetch from
 * @param {object} headers additional headers for the fetch request
 */
export const checkFeatures = (url, headers) => dispatch => {

    fetch(`${url}`, { headers, mode: 'cors' })
        .then(response => response.ok ? response.json() : { enabledFeatures: [] })
        .then(json => dispatch(updateFeatures(json)))
        .catch(console.error)

};
