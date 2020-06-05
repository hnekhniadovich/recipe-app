import React from 'react';

import { connect } from 'react-redux';
import { setActiveRecipe } from '../actions/recipe.actions';

class LikesListItem extends React.Component {

    handleFetchRecipe = event => {
        event.preventDefault();
        const { item, setActiveRecipe } = this.props;
        setActiveRecipe(item.id);
    }

    render() {
        const { id, title, image } = this.props.item;
        return (
            <li>
                <a className="likes__link" href={'/' + id} onClick={this.handleFetchRecipe}>
                    <figure className="likes__fig">
                        <img src={image} alt={title} />
                    </figure>
                    <div className="likes__data">
                        <h4 className="likes__name">{title}</h4>
                    </div>
                </a>
            </li>
        )
    }   
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveRecipe: (id) => dispatch(setActiveRecipe(id))
    };
};

const mapStateToProps = (state) => {
    return {
        activeRecipe: state.recipes.activeRecipe
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikesListItem);