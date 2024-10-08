import React from 'react';
import styles from './Community.module.css';

const Inspo = ({ searchInput, numToShow }) => {
    const inspoData = [
        { id: 1, name: 'User 1', imgUrl: 'https://via.placeholder.com/250' },
        { id: 2, name: 'User 2', imgUrl: 'https://via.placeholder.com/250' },
        { id: 3, name: 'User 3', imgUrl: 'https://via.placeholder.com/250' },
        { id: 4, name: 'User 4', imgUrl: 'https://via.placeholder.com/250' },
        { id: 5, name: 'User 5', imgUrl: 'https://via.placeholder.com/250' },
        { id: 6, name: 'User 6', imgUrl: 'https://via.placeholder.com/250' },
        { id: 7, name: 'User 7', imgUrl: 'https://via.placeholder.com/250' },
        { id: 8, name: 'User 8', imgUrl: 'https://via.placeholder.com/250' },
        { id: 9, name: 'User 9', imgUrl: 'https://via.placeholder.com/250' },
    ];

    // Filter inspoData based on the search input (case insensitive)
    const filteredData = inspoData.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Slice the filtered data based on the numToShow
    const displayedData = filteredData.slice(0, numToShow);

    return (
        <>
        <div className={styles.feed}>
            {displayedData.length > 0 ? (
                displayedData.map((user) => (
                    <div key={user.id} className={styles['feed-item']}>
                        <img src={user.imgUrl} alt={user.name} />
                        <p>{user.name}</p>
                    </div>
                ))
            ) : (

                <div className={styles['error-msg']}>
                    <p>Hittades ej, vänligen sök något annat.</p>
                </div>
            )}
        </div>
        </>
    );
};

export default Inspo;
