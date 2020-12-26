"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var AddTask = (function (_Component) {
    _inherits(AddTask, _Component);

    function AddTask(props) {
        _classCallCheck(this, AddTask);

        _get(Object.getPrototypeOf(AddTask.prototype), "constructor", this).call(this, props);
        this.state = { message: "", planedStartDateTime: new Date(), planedComplitionDateTime: new Date() };

        this.onSubmit = this.onSubmit.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onPlanedStartDateTimeChange = this.onPlanedStartDateTimeChange.bind(this);
        this.onPlanedComplitionDateTimeChange = this.onPlanedComplitionDateTimeChange.bind(this);
    }

    _createClass(AddTask, [{
        key: "onMessageChange",
        value: function onMessageChange(event) {
            this.setState({ message: event.target.value });
        }
    }, {
        key: "onPlanedStartDateTimeChange",
        value: function onPlanedStartDateTimeChange(event) {
            this.setState({ planedStartDateTime: event.target.value });
        }
    }, {
        key: "onPlanedComplitionDateTimeChange",
        value: function onPlanedComplitionDateTimeChange(event) {
            this.setState({ planedComplitionDateTime: event.target.value });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(event) {
            event.preventDefault();
            this.props.addTask({
                message: this.state.message,
                planedStartDateTime: this.state.planedStartDateTime,
                planedComplitionDateTime: this.state.planedComplitionDateTime
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.isEdit) {
                console.log(this.props.editTask.message);
                this.setState({
                    message: this.props.editTask.message,
                    planedStartDateTime: this.props.editTask.planedStartDateTime,
                    planedComplitionDateTime: this.props.editTask.planedComplitionDateTime
                });
            }
            return _react2["default"].createElement(
                "form",
                { className: "task-content", onSubmit: this.onSubmit },
                _react2["default"].createElement("input", { type: "text", className: "task-title", placeholder: "Задача", onChange: this.onMessageChange, value: this.state.message }),
                _react2["default"].createElement("input", { type: "datetime-local", className: "task-date", onChange: this.onPlanedStartDateTimeChange, value: this.state.planedStartDateTime }),
                _react2["default"].createElement("input", { type: "datetime-local", className: "task-date", onChange: this.onPlanedComplitionDateTimeChange, value: this.state.planedComplitionDateTime }),
                _react2["default"].createElement(
                    "button",
                    { className: "button", type: "submit" },
                    _react2["default"].createElement(
                        "span",
                        { className: "button-icon" },
                        _react2["default"].createElement(
                            "svg",
                            { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "class": "bi bi-plus-circle", viewBox: "0 0 16 16" },
                            _react2["default"].createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                            _react2["default"].createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })
                        )
                    )
                )
            );
        }
    }]);

    return AddTask;
})(_react.Component);

exports.AddTask = AddTask;

