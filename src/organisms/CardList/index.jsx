/* eslint-disable react/forbid-prop-types,react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../molecules/Card';
import styles from './CardList.module.css';

const CardList = ({ data }) => (
  <div className={styles.list}>
    {data.map((cardContent, i) => (<Card key={i} {...cardContent} />))}
  </div>
);

CardList.propTypes = {
  data: PropTypes.array,
};

CardList.defaultProps = {
  data: [],
};

export default CardList;
