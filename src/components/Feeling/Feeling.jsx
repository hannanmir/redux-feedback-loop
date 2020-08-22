import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import { Button } from '@material-ui/core';
import swal from '@sweetalert/with-react';

const options = [
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
        if (this.state.newInput.understanding === 0) {
            swal('Please select a value!');
        } else if (this.props.reduxState.editReducer === false) {
            this.props.dispatch({type: 'ADD_FEELING', payload:input})
            this.props.history.push('/understanding')            
        } else if (this.props.reduxState.editReducer === true) {
            this.props.dispatch({type: 'EDIT_FALSE'})
            this.props.dispatch({type: 'ADD_FEELING', payload:input})
            this.props.history.push('/review')
        }
    }


    render() {
        if (this.props.reduxState.editReducer === false) {
            return (
                <>
                    <h3>How are you feeling today?</h3>
                    <Select options={options} placeholder="Feeling?" onChange= {(event) => this.handleChangeFeeling(event)}/>
                    <Button variant="contained" size="small" color="primary" onClick={() => {this.handleSubmit(this.state.newInput.feeling)}}>Submit</Button>
                </>
            );
        } else if (this.props.reduxState.editReducer === true) {
            return (
                <>
                    <h3>How are you feeling today?</h3>
                    <Select options={options} placeholder="Feeling?" onChange= {(event) => this.handleChangeFeeling(event)}/>
                    <Button variant="contained" size="small" color="primary" onClick={() => {this.handleSubmit(this.state.newInput.feeling)}}>Submit & Return to Review</Button>
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

export default connect(putReduxDataProps)(withRouter(Feeling));