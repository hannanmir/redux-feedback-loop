import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';
import axios from 'axios';
import swal from '@sweetalert/with-react';

class Review extends Component {
    handleReview = () => {
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

    render() {
        return (
            <>
                <h3>Review Your Feedback</h3>
                <p>Feeling: {this.props.reduxState.inputReducer.feeling}</p>
                <p>Understanding: {this.props.reduxState.inputReducer.understanding}</p>
                <p>Supported: {this.props.reduxState.inputReducer.support}</p>
                <p>Comments: {this.props.reduxState.inputReducer.comments}</p>
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