'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FoggleConsumer = exports.FoggleProvider = exports.FoggleConfig = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
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
                                                                                                                                                                                                                                                                   * index.js 05.07.18
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * (c) Copyright 2018 ergovia GmbH
                                                                                                                                                                                                                                                                   */


exports.withFoggle = withFoggle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = require('./state/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = require('./state/actions');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React$createContext = _react2.default.createContext({
    enabledFeatures: []
}),
    ContextProvider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var FOGGLE_STORE_KEY = 'foggleStore';

/**
 * @typedef {Object} FoggleOptions
 * @property {function} getOptions returns all configured options
 * @property {function} getHost returns the configured host url
 * @property {function} getUpdateInterval returns the configured update interval in milliseconds. default is 600000ms (10 Minutes)
 * @property {function} setUpdateInterval sets the update interval in which Foggle fetches for new enabled features
 *
 */

/**
 * The configuration file for Foggle.
 *
 * @param {string} host required parameter to let Foggle know from where to fetch the enabled features
 * @return {FoggleOptions} an object with all configured options
 * @constructor
 */
var FoggleConfig = exports.FoggleConfig = function FoggleConfig(host) {

    console.assert(host, 'Host not specified. Please pass a host to the FoggleConfig');

    var defaultOptions = {
        updateInterval: 1000 * 60 * 10,
        headers: {},
        host: host
    };

    return {

        /**
         * Returns all configured options.
         *
         * @return {object} returns an object of all configured options
         */
        getOptions: function getOptions() {
            return _extends({}, defaultOptions);
        },


        /**
         * Returns the configured host url.
         *
         * @return {string} the url
         */
        getHost: function getHost() {
            return defaultOptions.host;
        },


        /**
         * getUpdateInterval returns the configured update interval in milliseconds. default is 600000ms (10 Minutes)
         *
         * @return {number} the interval
         */
        getUpdateInterval: function getUpdateInterval() {
            return defaultOptions.updateInterval;
        },


        /**
         * Sets the update interval in which Foggle fetches for new enabled features
         *
         * @param {number} interval the interval to set
         */
        setUpdateInterval: function setUpdateInterval(interval) {
            if (isNaN(interval)) {
                throw new Error('interval must be of type number');
            }
            defaultOptions.updateInterval = interval;
        },


        /**
         * Returns all the Headers that are configured and passed to the backend
         *
         * @return {object} an objects containing all headers
         */
        getHeaders: function getHeaders() {
            return _extends({}, defaultOptions.headers);
        },


        /**
         * Adds a header that will be sent to the Foggle backend. You can set a header via key and value, or via object.
         *
         * @param {string | object} name the name of the header to add, or the object containing all headers to add
         * @param {string} value the value of the header to add
         */
        addHeader: function addHeader() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var value = arguments[1];


            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object' && typeof value === 'undefined') {
                defaultOptions.headers = _extends({}, defaultOptions.headers, name);
            } else {
                defaultOptions.headers[name] = value;
            }
        },


        /**
         * Clears all headers that are configured
         */
        clearHeaders: function clearHeaders() {
            defaultOptions.headers = {};
        }
    };
};

/**
 * Private _FoggleProvider used to start the update interval and wrapping the application in a context
 */

var _FoggleProvider = function (_React$Component) {
    _inherits(_FoggleProvider, _React$Component);

    function _FoggleProvider() {
        _classCallCheck(this, _FoggleProvider);

        return _possibleConstructorReturn(this, (_FoggleProvider.__proto__ || Object.getPrototypeOf(_FoggleProvider)).apply(this, arguments));
    }

    _createClass(_FoggleProvider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            setInterval(function update() {
                this.props.checkFeatures(this.props.config.getHost(), this.props.config.getHeaders());
                return update.bind(this);
            }.bind(this)(), this.props.config.getUpdateInterval());
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                features = _props.features;


            return _react2.default.createElement(
                ContextProvider,
                { value: { features: features } },
                children
            );
        }
    }]);

    return _FoggleProvider;
}(_react2.default.Component);

/**
 * Because Foggle is built with redux, we assume that there is a store already. To let redux know, which store should be adressed for Foggle, we pass a static storeKey to
 * the connected Component
 */


function connectExtended(mapStateToProps, mapDispatchToProps, mergeProps) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    options.storeKey = FOGGLE_STORE_KEY;
    return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps, options);
}

var FoggleContainer = connectExtended(function (_ref) {
    var features = _ref.features;
    return { features: features };
}, { checkFeatures: _actions.checkFeatures })(_FoggleProvider);

/**
 * The ContextProvider to wrap around your App. It is used to provide all the enabled feautres around your application.
 */

var FoggleProvider = exports.FoggleProvider = function (_React$Component2) {
    _inherits(FoggleProvider, _React$Component2);

    function FoggleProvider(props) {
        _classCallCheck(this, FoggleProvider);

        var _this2 = _possibleConstructorReturn(this, (FoggleProvider.__proto__ || Object.getPrototypeOf(FoggleProvider)).call(this, props));

        _this2.provider = (0, _reactRedux.createProvider)(FOGGLE_STORE_KEY);
        _this2.store = (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
        return _this2;
    }

    _createClass(FoggleProvider, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                _props2$config = _props2.config,
                config = _props2$config === undefined ? FoggleConfig() : _props2$config;


            var ReduxProvider = this.provider;

            return _react2.default.createElement(
                ReduxProvider,
                { store: this.store },
                _react2.default.createElement(
                    FoggleContainer,
                    { config: config },
                    children
                )
            );
        }
    }]);

    return FoggleProvider;
}(_react2.default.Component);

FoggleProvider.propTypes = {
    config: _propTypes2.default.exact({
        getOptions: _propTypes2.default.func.isRequired,
        getHost: _propTypes2.default.func.isRequired,
        getUpdateInterval: _propTypes2.default.func.isRequired,
        getHeaders: _propTypes2.default.func.isRequired,
        addHeader: _propTypes2.default.func.isRequired,
        clearHeaders: _propTypes2.default.func.isRequired
    })
};

/**
 * The Consumer to wrap around the feature that should be toggled. The id property is mandatory because it defines, which feature should be toggled.
 */

var FoggleConsumer = exports.FoggleConsumer = function (_React$Component3) {
    _inherits(FoggleConsumer, _React$Component3);

    function FoggleConsumer() {
        _classCallCheck(this, FoggleConsumer);

        return _possibleConstructorReturn(this, (FoggleConsumer.__proto__ || Object.getPrototypeOf(FoggleConsumer)).apply(this, arguments));
    }

    _createClass(FoggleConsumer, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                id = _props3.id,
                children = _props3.children;


            return _react2.default.createElement(
                Consumer,
                null,
                function (value) {
                    var found = value.features.enabledFeatures.find(function (feature) {
                        return feature.id === id;
                    });
                    if (found) {
                        return children;
                    }
                    return null;
                }
            );
        }
    }]);

    return FoggleConsumer;
}(_react2.default.Component);

FoggleConsumer.propTypes = {
    id: _propTypes2.default.string.isRequired
};

/**
 * Higher-Order-Component if you wish to activate Foggle on container level without using the FoggleConsumer
 *
 * @param {Object} Component the Component that should be wrapped in Foggle
 * @param {string} featureId the id of the feature that should be toggled
 * @param {object} mapStateToProps maps the current state the components props
 * @param {object} mapDispatchToProps maps the redux actions to the components props
 * @return {function} the wrapped component
 */
function withFoggle(Component, featureId, mapStateToProps, mapDispatchToProps) {
    var FoggyComponent = function (_React$PureComponent) {
        _inherits(FoggyComponent, _React$PureComponent);

        function FoggyComponent(props) {
            _classCallCheck(this, FoggyComponent);

            var _this4 = _possibleConstructorReturn(this, (FoggyComponent.__proto__ || Object.getPrototypeOf(FoggyComponent)).call(this, props));

            var dipsatch = props.dipsatch;

            _this4.boundActionCreators = (0, _redux.bindActionCreators)(mapDispatchToProps, dipsatch);
            return _this4;
        }

        _createClass(FoggyComponent, [{
            key: 'render',
            value: function render() {
                var _this5 = this;

                return _react2.default.createElement(
                    Consumer,
                    null,
                    function (value) {

                        var found = value.features.enabledFeatures.find(function (feature) {
                            return feature.id === featureId;
                        });
                        if (found) {
                            return _react2.default.createElement(Component, _extends({}, _this5.props, _this5.boundActionCreators));
                        }

                        return null;
                    }
                );
            }
        }]);

        return FoggyComponent;
    }(_react2.default.PureComponent);

    return (0, _reactRedux.connect)(mapStateToProps)(FoggyComponent);
}
//# sourceMappingURL=index.js.map
