import React, { Component } from 'react';

export class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editTask.id,
            message: this.props.editTask.message,
            planedStartDateTime: this.props.editTask.planedStartDateTime,
            planedComplitionDateTime: this.props.editTask.planedComplitionDateTime,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onPlanedStartDateTimeChange = this.onPlanedStartDateTimeChange.bind(this);
        this.onPlanedComplitionDateTimeChange = this.onPlanedComplitionDateTimeChange.bind(this);
    }


    onMessageChange(event) {
        this.setState({ message: event.target.value });
    }
    onPlanedStartDateTimeChange(event) {
        this.setState({ planedStartDateTime: event.target.value });
    }
    onPlanedComplitionDateTimeChange(event) {
        this.setState({ planedComplitionDateTime: event.target.value });
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.updateTask({
            id: this.state.id,
            message: this.state.message,
            planedStartDateTime: this.state.planedStartDateTime,
            planedComplitionDateTime: this.state.planedComplitionDateTime
        });
    }

    render() {
        return (
            <form className="list-item list-item-noborder" onSubmit={this.onSubmit}>
                <div className="task-content ml-35">
                    <input type="text" className="task-title" placeholder="Задача" onChange={this.onMessageChange} value={this.state.message} />
                    <input type="datetime-local" className="task-date" onChange={this.onPlanedStartDateTimeChange} value={this.state.planedStartDateTime} />
                    <input type="datetime-local" className="task-date" onChange={this.onPlanedComplitionDateTimeChange} value={this.state.planedComplitionDateTime} />
                </div>
                <button className="button" type="submit">
                    <span className="button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </span>
                </button>
                <button className="button" onClick={() => this.props.cancelEdit()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </form>
        );
    }
}