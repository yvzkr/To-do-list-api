import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodos, deleteTodo, completeTodo } from '../../actions/todos';

import { Link } from "react-router-dom";


export class Todos extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        getTodos: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTodos();
    }
    renderElement(todo){

       if(!todo.completed)
          return <button onClick={this.props.completeTodo.bind(this, todo.id)} className="btn btn-danger btn-sm">Tamamla</button>;
       else
          return <span>Tamamlandı</span>;
    }

    render() {
        return (
            <Fragment>
                <h2>Yapılacaklar </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Başlık</th>
                            <th>Açıklama</th>
                            <th>Tamamlanma</th>
                            <th>Tarih</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{ this.renderElement(todo) }</td>
                                <td>{todo.created_at}</td>
                                <td>
                                <Link to={`/todoItem/${todo.id}`} className="btn btn-success btn-sm">Madde Ekle</Link>
                                <button onClick={this.props.deleteTodo.bind(this, todo.id)} className="btn btn-danger btn-sm">Sil</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    todos: state.todos.todos
});

export default connect(
    mapStateToProps,
    { getTodos, deleteTodo ,completeTodo}
)(Todos);