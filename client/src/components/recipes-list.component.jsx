import React from 'react';

import { connect } from 'react-redux';
import { nextPage, prevPage } from '../actions/pagination.actions';

import RecipesListItem from './recipes-list-item.component';
import Spinner from './spinner.component';
import PageButton from './page-button.components';


class RecipesList extends React.Component {

    renderResults = (recipes, page, resPerPage = 10) => { 
        const start = (page - 1) * resPerPage;
        const end = page * resPerPage;

        return recipes.results.slice(start, end).map(recipe => {
            return (
                <RecipesListItem 
                    key={recipe.id} 
                    recipe={recipe} 
                />
            )
        });
    }

    renderButtons = (pageNum, numResults, resPerPage) => {

        const { prevPage, nextPage } = this.props;
        const pages = Math.ceil(numResults / resPerPage);
        let content;

        if(pageNum === 1 && pages > 1) {
            content = <PageButton direction={'next'} pageNum={pageNum + 1} arrow={'right'} action={nextPage}/>
        } else if (pageNum < pages) {
            content = (
                <>
                    <PageButton direction={'prev'} pageNum={pageNum - 1} arrow={'left'} action={prevPage}/>
                    <PageButton direction={'next'} pageNum={pageNum + 1} arrow={'right'} action={nextPage}/>
                </>
            )
        } else if (pageNum === pages && pages > 1) { 
            content = <PageButton direction={'prev'} pageNum={pageNum - 1} arrow={'left'} action={prevPage}/>
        }

        return content;
    }

    render() {
        const {recipes, isPending, pageNum } = this.props;

        let content;

        if(isPending) {
            content = <Spinner />
        } else {
            if(recipes) {
                
                if(!recipes.results.length) {
                    alert('Oh no.. we do not have any recipes for the given search. Please try again!');
                }
                else { content = (
                    <>
                        <ul className="results__list">
                        {
                            this.renderResults(recipes, pageNum)
                        }
                        </ul>
                        <div className="results__pages">
                            {this.renderButtons(pageNum, recipes.results.length, 10)}
                        </div>
                    </>
                )
                }
            } else {
                content = null
            }
        }

        return (
            <>
                { content }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes,
        isPending: state.recipes.isPending,
        pageNum: state.pages.pageNumber
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        prevPage: () => dispatch(prevPage()),
        nextPage: () => dispatch(nextPage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);