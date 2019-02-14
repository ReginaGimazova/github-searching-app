/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './TopicTag.module.css';

const TopicTag = ({ display_name, name, onClick }) => (
  <div className={styles.tag}>
    <Link className={styles.link} to={`/${name}`} onClick={onClick}>{display_name}</Link>
  </div>
);

TopicTag.propTypes = {
  display_name: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

TopicTag.defaultProps = {
  display_name: '',
  name: '',
  onClick: undefined,
};
export default TopicTag;
