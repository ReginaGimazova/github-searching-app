import React from 'react';
import Card from '../../molecules/Card';
import styles from './CardList.module.css';

const CardList = ({data}) => (
    <div className={styles.list}>
        {data.map((cardContent, i) =>
            (<Card key={i}{...cardContent} />)
        )}
    </div>
);

export default CardList;
