import React, { useState } from 'react';
import styles from './Community.module.css';

const SearchBar = ({ onChange }) => {
    const [searchInput, setSearchInput] = useState('');

    // Whenever the input changes, update both local and parent state
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        onChange(e.target.value); // Pass input value to parent component
    };

    return (
        <div className={styles['search-container']}>
            <input
                className={styles['search-bar']}
                type='text'
                placeholder='Search...'
                value={searchInput}
                onChange={handleInputChange}
            />
            {/* <CommunityBtn communityBtnTitle={'Search'} /> */}

            {/* <div className={styles['search-btn']}>
            </div> */}
        </div>
    );
};

export default SearchBar;
