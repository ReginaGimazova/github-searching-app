import React from 'react';
import {Link} from 'react-router-dom';
import styles from './TopicTag.module.css';

const TopicTag = ({display_name, name, onClick}) => (
    <div className={styles.tag}>
        <Link className={ styles.link} to={`/${name}`} onClick={onClick}>{display_name}</Link>
    </div>
);

export default TopicTag;
