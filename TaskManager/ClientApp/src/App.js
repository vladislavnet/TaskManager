import React, { Component } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

import './custom.css'


const url = "https://localhost:5001/"

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          tasks: [],
          isEdit: false,
          editTask: null,
      }

      this.getTasks = this.getTasks.bind(this);
      this.validateTask = this.validateTask.bind(this);
      this.addTask = this.addTask.bind(this);
      this.setCompleted = this.setCompleted.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.setEdit = this.setEdit.bind(this);
      this.cancelEdit = this.cancelEdit.bind(this);
      this.updateTask = this.updateTask.bind(this);
    }

    componentDidMount() {
        this.getTasks();
    }

    setEdit(task) {
        if (!this.state.isEdit) {
            this.setState({
                isEdit: true,
                editTask: task,
            });
        }
    }

    cancelEdit() {
        this.setState({
            isEdit: false,
            editTask: null,
        });
    }

    validateTask(task) {
        let errs = [];
        if (!task.message)
            errs.push("Введите задачу")
        if (!task.planedStartDateTime)
            errs.push("Выберите дату начала задачи")
        if (!task.planedComplitionDateTime)
            errs.push("Выберите дату окончания задачи")

        if (errs.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    setCompleted(id, isCompleted) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `Task/SetCompleted/${id}/${!isCompleted}`, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                this.getTasks();
            } else {
                console.log("Запрос отправлен не успешно");
            }
        }.bind(this);
        xhr.send();
    }

    getTasks() {
        fetch(`Task/Get`)
            .then(res => res.json())
            .then(
                (result) => {
                    result.sort((a, b) => {
                        return (a.isCompleted === b.isCompleted) ? 0 : a.isCompleted ? 1 : -1;
                    })
                    this.setState({
                        tasks: result
                    });
                },
                (error) => {
                    console.log("Запрос не удалось обработать")
                }
            )
    }

    addTask(task) {
        if (this.validateTask(task)) {
            const data = {
                "Message": task.message,
                "IsCompleted": false,
                "PlanedStartDateTime": task.planedStartDateTime,
                "PlanedComplitionDateTime": task.planedComplitionDateTime
            };
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url + "Task/Add", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function () {
                if (xhr.status === 200) {
                    this.getTasks();
                } else {
                    console.log("Запрос отправлен не успешно");
                }
            }.bind(this);
            xhr.send(JSON.stringify(data));
        }
    }

    updateTask(task) {
        if (this.validateTask(task)) {
            console.log(task.id)
            const data = {
                "Id": task.id,
                "Message": task.message,
                "IsCompleted": false,
                "PlanedStartDateTime": task.planedStartDateTime,
                "PlanedComplitionDateTime": task.planedComplitionDateTime
            };
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "Task/Update", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function () {
                if (xhr.status === 200) {
                    this.getTasks();
                    this.cancelEdit();
                } else {
                    console.log("Запрос отправлен не успешно");
                }
            }.bind(this);
            xhr.send(JSON.stringify(data));
        }
    }

    deleteTask(id) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `Task/Delete/${id}`, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                this.getTasks();
            } else {
                console.log("Запрос отправлен не успешно");
            }
        }.bind(this);
        xhr.send();
    }

  render () {
    return (
        <div className="wrapper">
            <Header />
            <TaskList tasks={this.state.tasks}
                isEdit={this.state.isEdit}
                editTask={this.state.editTask}
                setCompleted={this.setCompleted}
                deleteTask={this.deleteTask}
                addTask={this.addTask}
                setEdit={this.setEdit}
                cancelEdit={this.cancelEdit}
                updateTask={this.updateTask} />
        </div>

    );
  }
}
