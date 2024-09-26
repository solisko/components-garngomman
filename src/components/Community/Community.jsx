import React from 'react';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import Inspo from './Inspo';
import styles from './Community.module.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import AvatarUser from './AvatarUser';
import LoadMoreBtn from './LoadMoreBtn';



const username = "Person Persson"; 
const avatarUrl = "https://i.pravatar.cc"; 

const Community = () => {
    return (
        <div>

        <Header />
        <AvatarUser username={username} avatarUrl={avatarUrl} />

            <div className={styles['search-container']}>
                <div className={styles['search-bar']}>
                    <SearchBar />
                </div>

                <div className={styles['search-btn']}>
                    <SearchBtn />
                </div>
            </div>

            <p className={styles.titleInspo}>Inspiration Feed</p>

            <div className={styles.feed}>
                <Inspo />
            </div>

            <div className={styles['loadMore-btn']}>
                    <LoadMoreBtn />
                </div>



            <Navbar />

        </div>
    );
};

export default Community;
