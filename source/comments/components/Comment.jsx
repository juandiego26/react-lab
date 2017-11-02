import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.css';

function Comment(props) {
  return (
    <article id={`comment-${props.id}`} className={styles.comment}>
      <div className={styles.meta}>
        By: <a href={`mailto:${props.email}`}>{props.name}</a>
      </div>
      <p className={styles.meta}>
        {props.body}
      </p>
    </article>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default Comment;
