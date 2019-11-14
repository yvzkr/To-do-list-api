import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, alert } = this.props;
        if (error !== prevProps.error) {
            {/*this.props.alert.show("prevProps.error");
            alert.error("this is error");*/ }
            if (error.msg.title) alert.error("Başlık giriniz");
            if (error.msg.description) alert.error(" Açıklama eklemeyi unutmayın");

        }
    }


    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));


{/* A JSX comment 
export default withAlert()(Alerts);
export default withAlert(Alerts);

*/}

