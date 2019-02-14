/* eslint-disable react/no-array-index-key,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../atoms/TopicTag';
import styles from './TopicList.module.css';

const TopicList = ({ data, receiveRepos }) => (
  <div className={styles.list}>
    {data.map((tagItems, i) => (
      <Tag
        key={i}
        {...tagItems}
        onClick={() => receiveRepos(tagItems.name)}
      />
    ))}
  </div>
);

TopicList.propTypes = {
  data: PropTypes.array,
  receiveRepos: PropTypes.func,
};

TopicList.defaultProps = {
  data: [],
  receiveRepos: undefined,
};
export default TopicList;
