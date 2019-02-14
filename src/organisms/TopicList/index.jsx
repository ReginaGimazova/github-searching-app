import React from 'react';
import Tag from '../../atoms/TopicTag';
import styles from './TopicList.module.css';

const TopicList = ({data, receiveRepos}) => (
    <div className={styles.list}>
    {data.map((tagItems, i) =>
        (<Tag key={i} {...tagItems} onClick={() => receiveRepos(tagItems.name)}/>))}
    </div>
);

export default TopicList;
