import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodoItems, deleteTodoItem, completeTodoItem } from '../../actions/todoItem';



export class TodoItem extends Component {

    static propTypes = {
        todo_items: PropTypes.array.isRequired,
        getTodoItems: PropTypes.func.isRequired,
        deleteTodoItem: PropTypes.func.isRequired,
        completeTodoItem: PropTypes.func.isRequired
    }

    componentDidMount() {
        "console.log(this.props.value)"
        "const { todoid } = this.props.match.params"
        this.props.getTodoItems(this.props.value);
    }

    renderElement(item){

       if(!item.completed)
          return <button onClick={this.props.completeTodoItem.bind(this, item.id)} className="btn btn-danger btn-sm">Tamamla</button>;
       else
          return <span>Tamamlandı</span>;
    }

    render() {
        return (
            <Fragment>
                <h2>İş parçacıkları </h2>
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
                        {this.props.todo_items.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.content}</td>
                                <td>
                                    { this.renderElement(item) }
                                </td>
                                <td>{item.deadline_date}</td>
                                <td>
                                    <button onClick={this.props.deleteTodoItem.bind(this, item.id)} className="btn btn-danger btn-sm">Sil</button>

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
    todo_items: state.todo_items.todo_items
});


export default connect(
    mapStateToProps,
    { getTodoItems, deleteTodoItem, completeTodoItem}
)(TodoItem);