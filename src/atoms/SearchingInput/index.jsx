import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import styles from './SearchInput.module.css';

const SearchingInput = ({ handleChange }) => (
  <div className={styles.search}>
    <SearchIcon />
    <input onChange={handleChange} type="search" placeholder="search..." />
  </div>
);

export default SearchingInput;

SearchingInput.propTypes = {
  handleChange: PropTypes.func,
};
SearchingInput.defaultProps = {
  handleChange: undefined,
};
