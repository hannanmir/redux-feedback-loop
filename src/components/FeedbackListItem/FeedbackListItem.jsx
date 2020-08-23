import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import swal from '@sweetalert/with-react';

class ArtistListItem extends Component {
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

    render() {
        return (
            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><Button variant="contained" size="small" color="secondary" startIcon={<DeleteIcon />} onClick={() => this.deleteFeedback(this.props.feedback.id)}>DELETE</Button></td>
            </tr>
        );
    }
}

export default connect()(ArtistListItem);