import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Post from '../../posts/containers/Post';
import Loading from '../../shared/components/Loading';
import Title from '../../shared/components/Title';
import api from '../../api';
import styles from './Page.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const [
      user,
      posts,
    ] = await Promise.all([
      api.users.getSingle(this.props.id),
      api.users.getPosts(this.props.id),
    ]);

    this.setState({
      user,
      posts,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <section name="profile" className={styles.section}>
        <Title>
          <FormattedMessage
            id="title.profile"
            values={{
              name: this.state.user.name,
            }}
          />
        </Title>

        <section className={styles.main}>
          <fieldset className={styles.field}>
            <FormattedMessage id="profile.field.basic" tagName="legend" />
            <input type="email" value={this.state.user.email || ''} disabled />
          </fieldset>

          {this.state.user.address && (
            <fieldset className={styles.field}>
              <FormattedMessage id="profile.field.address" tagName="legend" />
              <address>
                {this.state.user.address.street}<br />
                {this.state.user.address.suite}<br />
                {this.state.user.address.city}<br />
                {this.state.user.address.zipcode}<br />
              </address>
            </fieldset>
          )}
        </section>

        <section className={styles.list}>
          {this.state.posts
            .map(post => (
              <Post
                key={post.id}
                user={this.state.user}
                {...post}
              />
            ))
          }
        </section>
      </section>
    );
  }
}

Profile.defaultProps = {
  id: 1,
};

Profile.propTypes = {
  id: PropTypes.number,
};

export default Profile;
