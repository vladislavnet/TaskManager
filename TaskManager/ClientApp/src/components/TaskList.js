import React, { Component } from 'react';
import { TaskItem } from './TaskItem';
import { AddTask } from './AddTask';
import { EditTask } from './EditTask';
import { Titles } from './Titles';

export class TaskList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-group">
                <Titles />
                <li>
                    {!this.props.isEdit ? <AddTask addTask={this.props.addTask} /> :
                        <EditTask editTask={this.props.editTask} cancelEdit={this.props.cancelEdit} updateTask={this.props.updateTask} />}                    
                </li>
                {this.props.tasks.map(task => {
                    return <TaskItem task={task}
                        key={task.id}
                        setCompleted={this.props.setCompleted}
                        deleteTask={this.props.deleteTask}
                        setEdit={this.props.setEdit} />
                })}
            </ul>
        );
    }
}