import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            {/*this.props.alert.show("prevProps.error");
            alert.error("this is error");*/ }
            if (error.msg.title) alert.error(`Başlık: ${error.msg.title.join()}`);
            if (error.msg.description) alert.error(`Açıklama: ${error.msg.description.join()}`);
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if (error.msg.username) alert.error(error.msg.username.join());
        }

        if (message !== prevProps.message) {
            if (message.deleteTodo) alert.success(message.deleteTodo);
            if (message.addTodo) alert.success(message.addTodo);
            if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
            if (message.completeTodo) alert.success(message.completeTodo);

        }

    }


    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));


{/* A JSX comment 
export default withAlert()(Alerts);
export default withAlert(Alerts);

*/}

