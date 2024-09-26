import React from 'react';
import styles from './Community.module.css';

const Inspo = () => {
    return (
        <>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="Inspiration 1" />
                <h3>User 1</h3>
                <p>Short description about the inspiration.</p>
            </div>
            
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="Inspiration 2" />
                <h3>User 2</h3>
                <p>Short description about the inspiration.</p>
            </div>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="Inspiration 2" />
                <h3>User 3</h3>
                <p>Short description about the inspiration.</p>
            </div>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="Inspiration 2" />
                <h3>User 4</h3>
                <p>Short description about the inspiration.</p>
            </div>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="Inspiration 2" />
                <h3>User 5</h3>
                <p>Short description about the inspiration.</p>
            </div>
            <div className={styles['feed-item']}>
                <img src="https://via.placeholder.com/250" alt="Inspiration 2" />
                <h3>User 6</h3>
                <p>Short description about the inspiration.</p>
            </div>
        </>
    );
};

export default Inspo;
