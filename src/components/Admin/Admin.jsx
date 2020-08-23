import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import FeedbackListItem from '../FeedbackListItem/FeedbackListItem.jsx';

class Admin extends Component {
    state = {
        feedbackList: []
    }

    componentDidMount() {
        console.log('App Mounted');
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/feedback')
        .then( (response) => {
          console.log(response.data);
          this.setState({
            feedbackList: response.data
          })
        }).catch( (error) => {
          console.log('error in getting feedback', error);
        }) 
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackList.map((feedback) => {
                            return (
                                <FeedbackListItem getFeedback={this.getFeedback} key={feedback.id} feedback={feedback}/>
                            );
                        })}
                    </tbody>
                </table> 
            </>
        );
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Admin));