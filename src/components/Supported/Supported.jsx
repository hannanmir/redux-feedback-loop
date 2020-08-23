import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import { Button } from '@material-ui/core';
import swal from '@sweetalert/with-react';

// The options that will show up for the select component
const options = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ]

  // Setting inital state as 0 
class Supported extends Component {
    state= {
        newInput: {
            support: 0
        }
    }

    // Changes state to the user's input
    handleChangeSupporting = (event) => {
        this.setState({
            newInput: {
                support: event.value
            }
        })
    }

    // If the user submits without selecting an value it alerts, also routes to review or next component depending on edit mode
    handleSubmit = (input) => {
        if (this.state.newInput.support === 0) {
            swal('Please select a value!');
        } else if (this.props.reduxState.editReducer === false) {
            this.props.dispatch({type: 'ADD_SUPPORTING', payload:input})
            this.props.history.push('/comments')            
        } else if (this.props.reduxState.editReducer === true) {
            this.props.dispatch({type: 'EDIT_FALSE'})
            this.props.dispatch({type: 'ADD_SUPPORTING', payload:input})
            this.props.history.push('/review')
        }
    }

    // Conditional rendering based on in edit mode or not 
    render() {
        if (this.props.reduxState.editReducer === false) {
            return (
                <>
                    <h3>How well are you being supported?</h3>
                    <Select options={options} placeholder="Supported?" onChange= {(event) => this.handleChangeSupporting(event)}/>
                    <Button variant="contained" size="small" color="primary" onClick={() => {this.handleSubmit(this.state.newInput.support)}}>Submit</Button>
                </>
            );
        } else if (this.props.reduxState.editReducer === true) {
            return (
                <>
                    <h3>How well are you being supported?</h3>
                    <h4>Inital Response: {this.props.reduxState.inputReducer.support}</h4>
                    <Select options={options} placeholder="Supported?" onChange= {(event) => this.handleChangeSupporting(event)}/>
                    <Button variant="contained" size="small" color="primary" onClick={() => {this.handleSubmit(this.state.newInput.support)}}>Submit & Return to Review</Button>
                </>
            )
        }
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Supported));