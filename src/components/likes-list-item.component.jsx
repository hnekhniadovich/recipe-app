import React from 'react';

const LikesListItem = ({ item }) => (
    <li>
        <a className="likes__link" href="#23456">
            <figure className="likes__fig">
                <img src={item.image} alt={item.title} />
            </figure>
            <div className="likes__data">
                <h4 className="likes__name">{(item.title)}</h4>
            </div>
        </a>
    </li>
);

export default LikesListItem;