import React, { Component, Fragment } from 'react';
import Form from './Form';
import TodoItem from './TodoItem';

export class TodoItemDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: this.props.match.params.todoid
    };
  }

    render() {
        return (
            <Fragment>
                <Form value={this.state.todoItem} />

                <TodoItem value={this.state.todoItem}/>

            </Fragment>
        )
    }
}

export default TodoItemDashboard