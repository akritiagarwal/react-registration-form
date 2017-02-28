(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormActions = function () {
    function FormActions() {
        _classCallCheck(this, FormActions);

        this.generateActions('addCharacterSuccess', 'addCharacterFail', 'updateName', 'updateGender', 'updateEmail', 'updateDate', 'updateQuestion', 'invalidName', 'invalidGender', 'invalidDob', 'invalidEmail', 'invalidQuestion');
    }

    _createClass(FormActions, [{
        key: 'addCharacter',
        value: function addCharacter(userDetails) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/api/User',
                data: userDetails
            }).done(function (data) {
                _this.actions.addCharacterSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addCharacterFail($.parseJSON(response.responseText).message);
            });
        }
    }]);

    return FormActions;
}();

exports.default = _alt2.default.createActions(FormActions);

},{"../alt":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

},{"./form":4,"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formStore = require('../stores/formStore');

var _formStore2 = _interopRequireDefault(_formStore);

var _formActions = require('../actions/formActions');

var _formActions2 = _interopRequireDefault(_formActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.state = _formStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Form, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _formStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _formStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            var name = this.state.name.trim();
            var email = this.state.email;
            var gender = this.state.gender;
            var dob = this.state.dob;
            var question = this.state.question;

            if (!name) {
                _formActions2.default.invalidName();
                this.refs.nameTextField.getDOMNode().focus();
            }

            if (!email) {
                _formActions2.default.invalidEmail();
                this.refs.nameTextField.getDOMNode().focus();
            }
            if (!gender) {
                _formActions2.default.invalidGender();
            }
            if (!dob) {
                _formActions2.default.invalidDob();
                this.refs.nameTextField.getDOMNode().focus();
            }
            if (!question) {
                _formActions2.default.invalidQuestion();
                this.refs.nameTextField.getDOMNode().focus();
            }

            if (name && email && dob && question && gender) {
                var userObj = {
                    userName: name,
                    gender: gender,
                    userEmail: email,
                    dateOfBirth: dob,
                    question: question
                };
                _formActions2.default.addCharacter(userObj);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container container-fluid center-block ' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.nameValidationState },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            'Name'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                                            onChange: _formActions2.default.updateName, autoFocus: true }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'help-block' },
                                            this.state.helpBlock
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.emailValidationState },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            'Email'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.email,
                                            onChange: _formActions2.default.updateEmail, autoFocus: true }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'help-block' },
                                            this.state.helpBlock
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.genderValidationState },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'gender', id: 'female', value: 'Female', checked: this.state.gender === 'Female',
                                                onChange: _formActions2.default.updateGender }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'female' },
                                                'Female'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'gender', id: 'male', value: 'Male', checked: this.state.gender === 'Male',
                                                onChange: _formActions2.default.updateGender }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'male' },
                                                'Male'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            'DOB'
                                        ),
                                        _react2.default.createElement('input', { type: 'date', className: 'form-control', ref: 'nameTextField', value: this.state.dob,
                                            onChange: _formActions2.default.updateDate, autoFocus: true }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'help-block' },
                                            this.state.helpBlock
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            'Question'
                                        ),
                                        _react2.default.createElement('input', { type: 'text-area', className: 'form-control', ref: 'nameTextField', value: this.state.question,
                                            onChange: _formActions2.default.updateQuestion, autoFocus: true }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'help-block' },
                                            this.state.helpBlock
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary' },
                                        'Submit'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

exports.default = Form;

},{"../actions/formActions":1,"../stores/formStore":7,"react":"react"}],5:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _form = require('./components/form');

var _form2 = _interopRequireDefault(_form);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_form2.default, null), document.getElementById('app'));

},{"./components/form":4,"./routes":6,"react":"react","react-dom":"react-dom","react-router":"react-router"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _form = require('./components/form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { component: _App2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _form2.default })
);

},{"./components/App":3,"./components/form":4,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _formActions = require('../actions/formActions');

var _formActions2 = _interopRequireDefault(_formActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormStore = function () {
    function FormStore() {
        _classCallCheck(this, FormStore);

        this.bindActions(_formActions2.default);
        this.name = '';
        this.gender = '';
        this.email = '';
        this.dob = '';
        this.question = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
        this.emailValidationState = '';
    }

    _createClass(FormStore, [{
        key: 'onAddCharacterSuccess',
        value: function onAddCharacterSuccess(successMessage) {
            this.nameValidationState = 'has-success';
            this.helpBlock = successMessage;
        }
    }, {
        key: 'onAddCharacterFail',
        value: function onAddCharacterFail(errorMessage) {
            this.nameValidationState = 'has-error';
            this.helpBlock = errorMessage;
        }
    }, {
        key: 'onUpdateName',
        value: function onUpdateName(event) {
            this.name = event.target.value;
            this.nameValidationState = '';
            this.helpBlock = '';
        }
    }, {
        key: 'onUpdateGender',
        value: function onUpdateGender(event) {
            this.gender = event.target.value;
            this.genderValidationState = '';
        }
    }, {
        key: 'onUpdateEmail',
        value: function onUpdateEmail(event) {
            this.email = event.target.value;
            this.emailValidationState = '';
        }
    }, {
        key: 'onUpdateDate',
        value: function onUpdateDate(event) {
            this.dob = event.target.value;
        }
    }, {
        key: 'onUpdateQuestion',
        value: function onUpdateQuestion(event) {
            this.question = event.target.value;
        }
    }, {
        key: 'onInvalidName',
        value: function onInvalidName() {
            this.nameValidationState = 'has-error';
            this.helpBlock = 'Please enter a name.';
        }
    }, {
        key: 'onInvalidGender',
        value: function onInvalidGender() {
            this.genderValidationState = 'has-error';
        }
    }, {
        key: 'onInvalidEmail',
        value: function onInvalidEmail() {
            this.nameValidationState = 'has-error';
            this.helpBlock = 'Please enter a email.';
        }
    }]);

    return FormStore;
}();

exports.default = _alt2.default.createStore(FormStore);

},{"../actions/formActions":1,"../alt":2}]},{},[5])

//# sourceMappingURL=bundle.js.map
