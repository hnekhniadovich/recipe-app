import React from 'react';

import { connect } from 'react-redux';

import LikesListItem from './likes-list-item.component';
import icons from '../assets/icons.svg';

const LikesList = ({ likesList }) => {

    return (
        <div className="likes">
        {
            likesList.length > 0
            ?
            <>
                <div className="likes__field">
                    <svg className="likes__icon">
                        <use href={icons + '#icon-heart'}></use>
                    </svg>
                </div>
                <div className="likes__panel">
                    <ul className="likes__list">
                        {
                            likesList.map(item => <LikesListItem key={item.id} item={item} />)
                        }
                        
                    </ul>
                </div>
            </>
            :
            null
        }
        
    </div>
    )
};    

const mapStateToProps = (state) => {
    return {
        likesList: state.recipes.likesList
    }
};

export default connect(mapStateToProps)(LikesList);

