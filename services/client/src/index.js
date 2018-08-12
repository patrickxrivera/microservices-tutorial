import React, { Component } from 'react'; // new
import ReactDOM from 'react-dom';
import axios from 'axios';

import UsersList from './components/UsersList';

const { REACT_APP_USERS_SERVICE_URL } = process.env;

// new
class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    let res;

    try {
      res = await axios.get(`${REACT_APP_USERS_SERVICE_URL}/users`);
    } catch (err) {
      console.log({ err });
    }

    const { users } = res.data.data;
    this.setState({ users });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <br />
              <h1 className="title is-1"> All Users </h1> <hr /> <br />
              <UsersList users={this.state.users} />
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
