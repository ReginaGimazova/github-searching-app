/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import styles from './Card.module.css';

const Card = ({
  full_name, description, watchers, html_url,
}) => (
  <article className={styles.card}>
    <div className={styles.rowItems}>
      <a className={styles.link} href={html_url}>{full_name}</a>
      <div className={styles.block}>
        <Star fontSize="small" />
        <p>{watchers}</p>
      </div>
    </div>
    <p>{description}</p>
  </article>
);

Card.propTypes = {
  full_name: PropTypes.string,
  description: PropTypes.string,
  watchers: PropTypes.number,
  html_url: PropTypes.string,
};

Card.defaultProps = {
  full_name: '',
  description: '',
  watchers: 0,
  html_url: '',
};
export default Card;
