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

class Feeling extends Component {
    state= {
        newInput: {
            feeling: 0
        }
    }

    handleChangeFeeling = (event) => {
        this.setState({
            newInput: {
                feeling: event.value
            }
        })
    }

    handleSubmit = (input) => {
        this.props.dispatch({type: 'ADD_FEELING', payload:input})
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <>
                <h3>How are you feeling today?</h3>
                <Select options={options} placeholder="Feeling?" onChange= {(event) => this.handleChangeFeeling(event)}/>
                <Button variant="contained" size="small" color="primary" onClick={() => {this.handleSubmit(this.state.newInput.feeling)}}>Submit</Button>
            </>
        );
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Feeling));