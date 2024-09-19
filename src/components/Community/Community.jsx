import React from 'react';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import Inspo from './Inspo';
import styles from './Community.module.css';

const Community = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Inspiration Feed</h1>

            <div className={styles['search-container']}>
                <div className={styles['search-bar']}>
                    <SearchBar />
                </div>
                <div className={styles['search-btn']}>
                    <SearchBtn />
                </div>
            </div>

            <div className={styles.feed}>
                <Inspo />
            </div>

        </div>
    );
};

export default Community;
