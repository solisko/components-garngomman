import React from 'react';
import styles from './Community.module.css';
import SearchBar from './SearchBar';
import Inspo from './Inspo';
import AvatarUser from './AvatarUser';
import LoadMoreBtn from './LoadMoreBtn';

const username = "Person Persson"; 
const avatarUrl = "https://i.pravatar.cc"; 

const Community = () => {
    return (
        <div>
            <div className={styles['search-container']}>
                <div className={styles['search-bar']}>
                    <SearchBar />
                </div>
            </div>
            
        <AvatarUser username={username} avatarUrl={avatarUrl} />

            <p className={styles.titleInspo}>Inspiration Feed</p>

            <div className={styles.feed}>
                <Inspo />
            </div>

            <div className={styles['loadMore-btn']}>
                    <LoadMoreBtn />
                </div>
        </div>
    );
};

export default Community;
