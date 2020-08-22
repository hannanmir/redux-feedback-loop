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

class Understanding extends Component {
    state= {
        newInput: {
            understanding: 0
        }
    }

    handleChangeUnderstanding = (event) => {
        this.setState({
            newInput: {
                understanding: event.value
            }
        })
    }

    handleSubmit = (input) => {
        if (this.state.newInput.understanding === 0) {
            swal('Please select a value!');
        } else {
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload:input})
        this.props.history.push('/supporting')
        }
    }

    render() {
        return (
            <>
                <h3>How well are you understanding the content?</h3>
                <Select options={options} placeholder="Understanding?" onChange= {(event) => this.handleChangeUnderstanding(event)}/>
                <Button variant="contained" size="small" color="primary" onClick={() => {this.handleSubmit(this.state.newInput.understanding)}}>Submit</Button>
            </>
        );
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Understanding));