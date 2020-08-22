import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class Comments extends Component {
    state= {
        newInput: {
            comments: ''
        }
    }

    handleChangeComments = (event) => {
        this.setState({
            newInput: {
                comments: event.target.value
            }
        })
    }

    handleSubmit = (input) => {
        this.props.dispatch({type: 'ADD_COMMENTS', payload:input})
        this.props.history.push('/review')
    }

    render() {
        return (
            <>
                <h3>Any comments you would like to share?</h3>
                <TextField id="standard-basic" label="Comments?" onChange= {(event) => this.handleChangeComments(event)} />
                <Button variant="contained" size="small" color="primary" onClick={() => {this.handleSubmit(this.state.newInput.comments)}}>Submit</Button>
            </>
        );
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Comments));