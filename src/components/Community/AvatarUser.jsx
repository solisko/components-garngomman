import React from 'react';
import styles from './Community.module.css';

const AvatarUser = ({ username, avatarUrl }) => {
    return (
        <div className={styles.avatarUser}>
            <img src={avatarUrl} alt={`${username}'s avatar`} className={styles.avatar} />
            <p className={styles.username}>{username}</p>
        </div>
    );
};

export default AvatarUser;
