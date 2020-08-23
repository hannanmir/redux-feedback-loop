
![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# React Gallery

## Description

_Duration: Weekend Rush_

This app is a feedback form. It receives feedback through four metrics: how the user is feeling about the content, his/her level of understanding, if the user feels supported, and any comments the user has. The data is colleceted piecemeal and the user is routed to the next collection point after submitting the first. The can then review all their feedback which is stored in Redux state, and go back and edit any feedback before then submitting it to a database. Addtional fucntionality exists for an admin to review all feedback, delete feedback, or flag for further review. This application is a fullstack full CRUD development.

## Screen Shot

![Feeling](https://github.com/hannanmir/redux-feedback-loop/blob/master/public/images/Feeling.png)
![Admin](https://github.com/hannanmir/redux-feedback-loop/blob/master/public/images/Admin%20View.png)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Redux.js](https://redux.js.org/)
- [Sweetalert](https://sweetalert.js.org/)
- [Material-UI](https://material-ui.com/)

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Respond to the question on screen and submit your answer.
2. After submitting an answer you will be routed to the next question.
3. Once you have submitted all the answers you can review your feedback.
4. Click edit next to any feedback value to go back and change an answer.
5. Submit your feedback and you are all done!
6. Admins have addiontional functionality at /admin.
7. Admins can review all feedback and delete or flag for review.

## Built With

- React
- Node.js
- Redux.js
- Postgres
- Axios
- Sweetalert
- Material-UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special thanks to my instrucors [Dane Smith](https://github.com/DoctorHowser) and [Kris Szafranski](https://github.com/kdszafranski).

## Support
If you have suggestions or issues, please email me at [hannanmir2@gmail.com](mailto:hannanmir2@gmail.com).