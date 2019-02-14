import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './SearchInput.module.css';

const SearchingInput = props => (
    <div className={styles.search}>
        <SearchIcon/>
        <input onChange={props.handleChange} type="search" placeholder="search..."/>
    </div>
);
export default SearchingInput;
