import React from 'react';
import { connect } from 'react-redux'

import { setSearchField } from '../actions/search.actions';
import { fetchRecipesStart } from '../actions/recipes.actions';

import icons from '../assets/icons.svg';

class SearchBox extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        const { searchField, fetchRecipesStart } = this.props;
        fetchRecipesStart(searchField);
    }

    handleChange = (event) => {
        this.props.onSearchChange(event.target.value);
    }
    
    render() {

        const { searchField } = this.props;

        return (
            <form onSubmit={this.handleSubmit} className="search">
                <input
                    type="search"
                    className="search__field"
                    placeholder="Search over 1,000,000 recipes..."
                    onChange={this.handleChange}
                    value={searchField}
                />
                <button className="btn search__btn">
                    <svg className="search__icon">
                        <use href={icons + '#icon-magnifying-glass'}></use>
                    </svg>
                    <span>Search</span>
                </button>
            </form>
        ); 
    }
};

const mapStateToProps = (state) => {
    return {
        searchField: state.search.searchField
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (value) => dispatch(setSearchField(value)),
        fetchRecipesStart: (searchField) => dispatch(fetchRecipesStart(searchField))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);