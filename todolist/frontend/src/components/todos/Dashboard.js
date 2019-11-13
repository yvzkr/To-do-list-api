import React, { Component, Fragment } from 'react';
import Form from './Form';
import Todos from './Todos';

export class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Form/>
                    
                <Todos/>
            </Fragment>
        )
    }
}

export default Dashboard