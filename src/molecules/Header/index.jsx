import React from 'react';
import SearchInputContainer from '../../molecules/SearchInputContainer';
import style from './Header.module.css';

const Header = () => (
   <header style={style}>
      <label>Github searching</label>
      <SearchInputContainer/>
   </header>
);

export default Header;
