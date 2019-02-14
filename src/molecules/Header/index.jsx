import React from 'react';
import SearchInputContainer from '../SearchInputContainer';
import style from './Header.module.css';

const Header = () => (
  <header style={style}>
    <h4>Github searching</h4>
    <SearchInputContainer />
  </header>
);

export default Header;
