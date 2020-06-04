import React from 'react';
import { connect } from 'react-redux';
import ShoppingListItem from './shopping-list-item.component';

const ShoppingList = ({ shoppingList }) => {
    console.log("In the shopping list");
    console.log(shoppingList);
    
    return (
        <ul className="shopping__list">
            {
                shoppingList.map(item => <ShoppingListItem key={item.id} item={item}/>)
            }
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        shoppingList: state.recipes.shoppingList
    }
};

export default connect(mapStateToProps)(ShoppingList);