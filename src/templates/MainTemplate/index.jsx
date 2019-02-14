import React, {Component} from 'react';
import Header from '../../molecules/Header';
import styles from './MainTemplate.module.css';

class MainTemplate extends Component {
    render(){
        return (
            <div className={styles.container}>
                <Header/>
                <section className={styles.main}>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default MainTemplate;
