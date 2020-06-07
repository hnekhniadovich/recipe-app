import React from 'react';
import { connect } from 'react-redux';
import { deleteShoppingListItem } from '../actions/recipe.actions'; 
import { formatCount } from '../utils/utils';
import icons from '../assets/icons.svg';

const ShoppingListItem = ({ item, deleteShoppingListItem }) => (
    <li className="shopping__item">
        <div className="shopping__count">
            <input type="number" defaultValue={formatCount(item.amount.us.value)} />
            <p>{(item.amount.us.unit).toLowerCase()}</p>
        </div>
        <p className="shopping__description">{item.name}</p>
        <button className="shopping__delete btn-tiny" onClick={() => deleteShoppingListItem(item.id)}>
            <svg>
                <use href={icons + '#icon-circle-with-cross'}></use>
            </svg>
        </button>
    </li>
);

const mapDispatchToProps = (dispatch) => {
    return {
        deleteShoppingListItem: (id) => dispatch(deleteShoppingListItem(id))
    }
};

export default connect(null, mapDispatchToProps)(ShoppingListItem);