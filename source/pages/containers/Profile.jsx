import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <section name="profile">
        <h1>About</h1>
        <Link to="/">
          Go to Home
        </Link>
        <Link to="/random">
          Go to random
        </Link>
      </section>
    );
  }
}

export default Profile;
