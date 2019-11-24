import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodoItem } from '../../actions/todoItem';


export class Form extends Component {
    state = {
        name: '',
        content: '',
        deadline_date: ''
    }

    static propTypes = {
        addTodoItem: PropTypes.func.isRequired
    };


    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, content,deadline_date } = this.state;
        const todo = { name, content,deadline_date };
        this.props.addTodoItem(todo_item);
        this.setState({
            name: "",
            content: "",
            deadline_date: ""
        });
    };


    render() {
        const { name, content, deadline_date  } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>İş Ekleme</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Başlık</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>İçerik</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="content"
                            onChange={this.onChange}
                            value={content}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Kaydet
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

export default connect(null, { addTodoItem})(Form);
