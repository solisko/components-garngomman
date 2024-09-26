import React from 'react';
import styles from './Community.module.css';


const Inspo = () => {
    return (
        <>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="User 1" />
                <p>User 1</p>
            </div>
            
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="User 2" />
                <p>User 2</p>
            </div>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="User 3" />
                <p>User 3</p>
            </div>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="User 4" />
                <p>User 4</p>
            </div>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="User 5" />
                <p>User 5</p>
            </div>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="User 6" />
                <p>User 6</p>
            </div>
        </>
    );
};

export default Inspo;
