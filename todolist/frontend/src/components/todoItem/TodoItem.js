import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodoItems } from '../../actions/todoItem';



export class TodoItem extends Component {

    static propTypes = {
        todo_items: PropTypes.array.isRequired
    }

    componentDidMount() {
        "console.log(this.props.value)"
        "const { todoid } = this.props.match.params"
        this.props.getTodoItems(this.props.value);
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

                                </td>
                                <td>{item.deadline_date}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Sil</button>

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
    { getTodoItems}
)(TodoItem);