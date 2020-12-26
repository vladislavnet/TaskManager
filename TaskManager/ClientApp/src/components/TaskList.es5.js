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

var _TaskItem = require('./TaskItem');

var _AddTask = require('./AddTask');

var _EditTask = require('./EditTask');

var TaskList = (function (_Component) {
    _inherits(TaskList, _Component);

    function TaskList(props) {
        _classCallCheck(this, TaskList);

        _get(Object.getPrototypeOf(TaskList.prototype), 'constructor', this).call(this, props);
    }

    _createClass(TaskList, [{
        key: 'render',
        value: function render() {
            var _this = this;

            return _react2['default'].createElement(
                'ul',
                { className: 'list-group' },
                _react2['default'].createElement(
                    'li',
                    null,
                    !this.props.isEdit ? _react2['default'].createElement(_AddTask.AddTask, { addTask: this.props.addTask }) : _react2['default'].createElement(_EditTask.EditTask, { editTask: this.props.editTask, cancelEdit: this.props.cancelEdit })
                ),
                this.props.tasks.map(function (task) {
                    return _react2['default'].createElement(_TaskItem.TaskItem, { task: task,
                        key: task.id,
                        setCompleted: _this.props.setCompleted,
                        deleteTask: _this.props.deleteTask,
                        setEdit: _this.props.setEdit });
                })
            );
        }
    }]);

    return TaskList;
})(_react.Component);

exports.TaskList = TaskList;

