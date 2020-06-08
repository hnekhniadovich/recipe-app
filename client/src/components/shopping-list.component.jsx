import React from 'react';
import { connect } from 'react-redux';
import ShoppingListItem from './shopping-list-item.component';
import nextId from "react-id-generator";

const ShoppingList = ({ shoppingList }) => { 
    return (
        <ul className="shopping__list">
            {
                shoppingList.map(item => <ShoppingListItem key={nextId()} item={item}/>)
            }
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        shoppingList: state.shoppingList.shoppingList
    }
};

export default connect(mapStateToProps)(ShoppingList);