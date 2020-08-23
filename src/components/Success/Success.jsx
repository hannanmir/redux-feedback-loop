import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';

class Supported extends Component {
    // Sets the redux state for the feedback object back to an empty object and routes back to the first page
    handleSuccess = () => {
        this.props.dispatch({type: 'SUCCESS'})
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <h1>Thank you for your feedback!</h1>
                <Button variant="contained" size="small" color="primary" onClick={this.handleSuccess}>Leave New Feedback</Button>
            </>
        );
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Supported));