import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import FlagIcon from '@material-ui/icons/Flag';
import swal from '@sweetalert/with-react';

class ArtistListItem extends Component {
    // DELETE request to remove feedback from database, warns user before hand
    deleteFeedback = (id) => {
        swal({
            title: "Are you sure?",
            text: "Feedback will be removed permanently!",
            icon: "warning",
            buttons: true,
        }).then((toDelete) => {
            if (toDelete) {
            swal("Feedback has been deleted", {
                icon: "success",
            });
            axios.delete(`/feedback/${id}`)
            .then( () => {
                this.props.getFeedback();
            }).catch( (error) => {
                console.log('error in DELETE', error);
            })
            } else {
            swal("Feedback was not deleted!");
            }
        })
    }

    // Allows admin to flag a feedback for further review 
    flagFeedback = (id) => {
        axios.put(`/feedback/flag/${id}`)
        .then( () => {
          this.props.getFeedback();
        }).catch( (error) => {
          console.log('error in PUT', error);
        })
    }

    render() {
        // Conditional rendering if a feedback is flagged or not
        if (this.props.feedback.flagged === true) {
            return (
                <tr>
                    <td>{this.props.feedback.feeling}</td>
                    <td>{this.props.feedback.understanding}</td>
                    <td>{this.props.feedback.support}</td>
                    <td>{this.props.feedback.comments}</td>
                    <td><Button variant="contained" size="small" color="primary" startIcon={<FlagIcon />}>Flagged for Review</Button></td>
                    <td><Button variant="contained" size="small" color="secondary" startIcon={<DeleteIcon />} onClick={() => this.deleteFeedback(this.props.feedback.id)}>DELETE</Button></td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td>{this.props.feedback.feeling}</td>
                    <td>{this.props.feedback.understanding}</td>
                    <td>{this.props.feedback.support}</td>
                    <td>{this.props.feedback.comments}</td>
                    <td><Button variant="contained" size="small" startIcon={<FlagIcon />} onClick={() => this.flagFeedback(this.props.feedback.id)}>Flag for Review</Button></td>
                    <td><Button variant="contained" size="small" color="secondary" startIcon={<DeleteIcon />} onClick={() => this.deleteFeedback(this.props.feedback.id)}>DELETE</Button></td>
                </tr>
            );
        }
    }
}

export default connect()(ArtistListItem);