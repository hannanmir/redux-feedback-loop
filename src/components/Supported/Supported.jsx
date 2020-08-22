import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import { Button } from '@material-ui/core';

const options = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ]

class Supported extends Component {
    state= {
        newInput: {
            support: 0
        }
    }

    handleChangeSupported = (event) => {
        this.setState({
            newInput: {
                support: event.value
            }
        })
    }

    handleSubmit = (input) => {
        this.props.dispatch({type: 'ADD_SUPPORTING', payload:input})
        this.props.history.push('/comments')
    }

    render() {
        return (
            <>
                <h3>How well are you being supported?</h3>
                <Select options={options} placeholder="Supported?" onChange= {(event) => this.handleChangeSupported(event)}/>
                <Button variant="contained" size="small" color="primary" onClick={() => {this.handleSubmit(this.state.newInput.support)}}>Submit</Button>
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