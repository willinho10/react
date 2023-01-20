import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        tasks: [
            { name: 'Tâche 1', done: false },
            { name: 'Tâche 2', done: true },
            { name: 'Tâche 3', done: false },
        ],
    };

    newTask = '';


    handleChange(taskName) {
        const { tasks } = this.state;
        const newTasks = tasks.map(task => {
            if (task.name === taskName) {
                task.done = !task.done;
            }
            return task;
        });
        this.setState({ tasks: newTasks });
    }

    addTasks(name) {
        const { tasks } = this.state;
        tasks.push({ name, done: false });
        this.setState({ tasks });
    }






    render() {
        const { tasks } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <h1>To do list</h1>

                    <ul>
                        {tasks.map(task => (
                            <li style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                                <input type="checkbox" checked={task.done} onChange={() => this.handleChange(task.name)} />
                                {task.name}
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.addTasks(event.target.value);
                                event.target.value = '';
                            }
                        }}



                        onChange={event => {
                            this.newTask = event.target.value;
                        }}
                    />
                    <br/>
                    <button onClick={() => this.addTasks(this.newTask)}>Add</button>

                </header>
            </div>
        );
    }
}



export default App;
