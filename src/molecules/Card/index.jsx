import React from 'react';
import styles from './Card.module.css';
import Star from '@material-ui/icons/Star'
const Card = ({full_name, description, watchers, html_url}) => (
    <article className={styles.card}>
        <div className={styles.rowItems}>
            <a className={styles.link} href={html_url}>{full_name}</a>
            <div className={styles.block}>
                <Star fontSize={"small"}/>
                <p>{watchers}</p>
            </div>
        </div>
        <p>{description}</p>
    </article>
);

export default Card;
