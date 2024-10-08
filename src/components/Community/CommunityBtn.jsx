import React from 'react';
import styles from './Community.module.css';



const CommunityBtn = ({communityBtnTitle, onClickHandler }) => {
    return (
        <div  className={styles['community-btn']}>
             <button onClick={onClickHandler}>
                {communityBtnTitle}
            </button>
        
        </div>

    );
};

export default CommunityBtn;