import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';
import axios from 'axios';
import swal from '@sweetalert/with-react';

class Review extends Component {
    handleReview = () => {
        if (this.props.reduxState.inputReducer.feeling === 0 || this.props.reduxState.inputReducer.feeling === undefined || 
            this.props.reduxState.inputReducer.understanding === 0 || this.props.reduxState.inputReducer.understanding === undefined ||
            this.props.reduxState.inputReducer.support === 0 || this.props.reduxState.inputReducer.support === undefined ) {
            swal('Please make sure that all fields have values!');
        } else {
            console.log('review', this.props.reduxState.inputReducer);
            axios.post('/feedback', this.props.reduxState.inputReducer)
            .then( () => {
                swal("Feedback Submitted!", {
                    buttons: false,
                    timer: 1000,
                })
                this.props.history.push('/success')
            }).catch( (error) => {
                console.log('error in POST', error);
            })
        }
    }

    editFeeling = () => {
        this.props.dispatch({type: 'EDIT_TRUE'})
        this.props.history.push('/')
    }

    editUnderstanding = () => {
        this.props.dispatch({type: 'EDIT_TRUE'})
        this.props.history.push('/understanding')
    }
    
    editSupporting = () => {
        this.props.dispatch({type: 'EDIT_TRUE'})
        this.props.history.push('/supporting')
    }

    editComments = () => {
        this.props.dispatch({type: 'EDIT_TRUE'})
        this.props.history.push('/comments')
    }

    render() {
        return (
            <>
                <h3>Review Your Feedback</h3>
                <p>
                    <Button variant="contained" size="small" onClick={() => this.editFeeling()}>Edit</Button>   Feeling: {this.props.reduxState.inputReducer.feeling}
                </p>
                <p>
                    <Button variant="contained" size="small" onClick={() => this.editUnderstanding()}>Edit</Button>   Understanding: {this.props.reduxState.inputReducer.understanding}
                </p>
                <p>
                    <Button variant="contained" size="small" onClick={() => this.editSupporting()}>Edit</Button>   Supported: {this.props.reduxState.inputReducer.support}
                </p>
                <p>
                    <Button variant="contained" size="small" onClick={() => this.editComments()}>Edit</Button>   Comments: {this.props.reduxState.inputReducer.comments}
                </p>
                <Button variant="contained" size="small" color="primary" onClick={() => this.handleReview()}>Submit Feedback</Button>
            </>
        );
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Review));