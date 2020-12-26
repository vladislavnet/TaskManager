'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsLayout = require('./components/Layout');

var _componentsHome = require('./components/Home');

var _componentsFetchData = require('./components/FetchData');

var _componentsCounter = require('./components/Counter');

var _componentsHeader = require('./components/Header');

var _componentsTaskList = require('./components/TaskList');

require('./custom.css');

var url = "https://localhost:5001/";

var App = (function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
        this.state = {
            tasks: [],
            isEdit: false,
            editTask: null
        };

        this.getTasks = this.getTasks.bind(this);
        this.validateTask = this.validateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.setCompleted = this.setCompleted.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.setEdit = this.setEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getTasks();
        }
    }, {
        key: 'setEdit',
        value: function setEdit(task) {
            if (!this.state.isEdit) {
                this.setState({
                    isEdit: true,
                    editTask: task
                });
            }
        }
    }, {
        key: 'cancelEdit',
        value: function cancelEdit() {
            this.setState({
                isEdit: false,
                editTask: null
            });
        }
    }, {
        key: 'validateTask',
        value: function validateTask(task) {
            var errors = [];
            if (!task.message) errors.push("������� ������");
            if (!task.planedStartDateTime) errors.push("�������� ���� ������ ������");
            if (!task.planedComplitionDateTime) errors.push("�������� ���� ��������� ������");

            if (errors.length > 0) {
                return false;
            } else {
                return true;
            }
        }
    }, {
        key: 'setCompleted',
        value: function setCompleted(id, isCompleted) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url + ('Task/SetCompleted/' + id + '/' + !isCompleted), true);
            xhr.onload = (function () {
                if (xhr.status === 200) {
                    this.getTasks();
                } else {
                    console.log("������ ��������� �� �������");
                }
            }).bind(this);
            xhr.send();
        }
    }, {
        key: 'getTasks',
        value: function getTasks() {
            var _this = this;

            fetch(url + 'Task/Get').then(function (res) {
                return res.json();
            }).then(function (result) {
                console.log(result);
                _this.setState({
                    tasks: result
                });
            }, function (error) {
                console.log("������ �� ������� ����������");
            });
        }
    }, {
        key: 'addTask',
        value: function addTask(task) {
            if (this.validateTask(task)) {
                var data = {
                    "Message": task.message,
                    "IsCompleted": false,
                    "PlanedStartDateTime": task.planedStartDateTime,
                    "PlanedComplitionDateTime": task.planedComplitionDateTime
                };
                var xhr = new XMLHttpRequest();
                xhr.open("POST", url + "Task/Add", true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = (function () {
                    if (xhr.status === 200) {
                        this.getTasks();
                    } else {
                        console.log("������ ��������� �� �������");
                    }
                }).bind(this);
                xhr.send(JSON.stringify(data));
            }
        }
    }, {
        key: 'updateTask',
        value: function updateTask(task) {
            if (this.validateTask(task)) {
                var data = {
                    "Id": task.id,
                    "Message": task.message,
                    "IsCompleted": false,
                    "PlanedStartDateTime": task.planedStartDateTime,
                    "PlanedComplitionDateTime": task.planedComplitionDateTime
                };
                var xhr = new XMLHttpRequest();
                xhr.open("POST", url + "Task/Edit", true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = (function () {
                    if (xhr.status === 200) {
                        this.getTasks();
                    } else {
                        console.log("������ ��������� �� �������");
                    }
                }).bind(this);
                xhr.send(JSON.stringify(data));
            }
        }
    }, {
        key: 'deleteTask',
        value: function deleteTask(id) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url + ('Task/Delete/' + id), true);
            xhr.onload = (function () {
                if (xhr.status === 200) {
                    this.getTasks();
                } else {
                    console.log("������ ��������� �� �������");
                }
            }).bind(this);
            xhr.send();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'wrapper' },
                _react2['default'].createElement(_componentsHeader.Header, null),
                _react2['default'].createElement(_componentsTaskList.TaskList, { tasks: this.state.tasks,
                    isEdit: this.state.isEdit,
                    editTask: this.state.editTask,
                    setCompleted: this.setCompleted,
                    deleteTask: this.deleteTask,
                    addTask: this.addTask,
                    setEdit: this.setEdit,
                    cancelEdit: this.cancelEdit })
            );
        }
    }]);

    return App;
})(_react.Component);

exports['default'] = App;
module.exports = exports['default'];

