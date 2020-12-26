import React, { Component } from 'react';

export class Titles extends Component {
    render() {
        return (
            <li className="list-item list-item-noborder m-0 p-0">
                <div className="task-content ml-35">
                    <h2 className="task-title">Задача</h2>
                    <h2 className="task-date">Начало</h2>
                    <h2 className="task-date">Окончание</h2>
                </div>
            </li>
        );
    }
}