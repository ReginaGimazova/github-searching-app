import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../molecules/Header';
import styles from './MainTemplate.module.css';

const MainTemplate = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <section className={styles.main}>
      {children}
    </section>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainTemplate;
