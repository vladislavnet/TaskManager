import React, { Component } from 'react';

export class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.formatDate = this.formatDate.bind(this);
    }

    formatDate(date) {
        let d = new Date(date);
        return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`
    }

    render() {
        let classesIcon;
        let classesTitle;
        let classesDate;
        if (this.props.task.isCompleted) {
            classesIcon = ["task-icon", "task-content-icon-done"];
            classesTitle = ["task-title", "task-content-done"];
            classesDate = ["task-date", "task-content-done"]
        } else {
            classesIcon = ["task-icon", "task-content-icon-undone"];
            classesTitle = ["task-title", "task-content-undone"];
            classesDate = ["task-date", "task-content-undone"]
        }
        return (
            <li className="list-item">
                <span className={classesIcon.join(' ')} onClick={() => this.props.setCompleted(this.props.task.id, this.props.task.isCompleted)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                    </svg>
                </span>

                <div className="task-content">
                    <span className={classesTitle.join(' ')}>{this.props.task.message}</span>
                    <span className={classesDate.join(' ')}>{this.formatDate(this.props.task.planedStartDateTime)}</span>
                    <span className={classesDate.join(' ')}>{this.formatDate(this.props.task.planedComplitionDateTime) }</span>
                </div>

                <span className={classesIcon.join(' ')} onClick={() => this.props.setEdit(this.props.task)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                </span>

                <span className={classesIcon.join(' ')} onClick={() => this.props.deleteTask(this.props.task.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </span>

            </li>
        );
    }
}