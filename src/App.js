import React from 'react';
import Header from './components/header.component';
import RecipesList from './components/recipes-list.component';
import './style.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className="results">
        <RecipesList />
      </div>

      <div className="recipe">
        <figure className="recipe__fig">
          <img src="https://www.cruzinwaiter.com/editable/templates/default/images/carousel-1.jpg" alt="Tomato" className="recipe__img" />
          <h1 className="recipe__title">
              <span>Pasta with tomato cream sauce</span>
          </h1>
        </figure>
        <div className="recipe__details">
          <div className="recipe__info">
              <svg className="recipe__info-icon">
                  <use href="img/icons.svg#icon-stopwatch"></use>
              </svg>
              <span className="recipe__info-data recipe__info-data--minutes">45</span>
              <span className="recipe__info-text"> minutes</span>
          </div>
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people">4</span>
            <span className="recipe__info-text"> servings</span>

            <div className="recipe__info-buttons">
              <button className="btn-tiny">
                  <svg>
                      <use href="img/icons.svg#icon-circle-with-minus"></use>
                  </svg>
              </button>
              <button className="btn-tiny">
                  <svg>
                      <use href="img/icons.svg#icon-circle-with-plus"></use>
                  </svg>
              </button>
            </div>

          </div>
          <button className="recipe__love">
            <svg className="header__likes">
              <use href="img/icons.svg#icon-heart-outlined"></use>
            </svg>
          </button>
        </div>

        <div className="recipe__ingredients">
          <ul className="recipe__ingredient-list">
            <li className="recipe__item">
              <svg className="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
              </svg>
              <div className="recipe__count">1000</div>
              <div className="recipe__ingredient">
                <span className="recipe__unit">g</span>
                  pasta
              </div>
            </li>

            <li className="recipe__item">
              <svg className="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
              </svg>
              <div className="recipe__count">1/2</div>
              <div className="recipe__ingredient">
                <span className="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>

            <li className="recipe__item">
              <svg className="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
              </svg>
              <div className="recipe__count">1</div>
              <div className="recipe__ingredient">
                <span className="recipe__unit"></span>
                can of tomatoes, whole or crushed
              </div>
            </li>


            <li className="recipe__item">
              <svg className="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
              </svg>
              <div className="recipe__count">1</div>
              <div className="recipe__ingredient">
                <span className="recipe__unit"></span>
                can tuna packed in olive oil
              </div>
            </li>

            <li className="recipe__item">
              <svg className="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
              </svg>
              <div className="recipe__count">1/2</div>
              <div className="recipe__ingredient">
                <span className="recipe__unit">cup</span>
                grated parmesan cheese
              </div>
            </li>

            <li className="recipe__item">
              <svg className="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
              </svg>
              <div className="recipe__count">1/4</div>
              <div className="recipe__ingredient">
                <span className="recipe__unit">cup</span>
                fresh basil, chopped or torn
              </div>
            </li>
          </ul>

          <button className="btn-small recipe__btn">
            <svg className="search__icon">
              <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Add to shopping list</span>
          </button>
        </div>

        <div className="recipe__directions">
          <h2 className="heading-2">How to cook it</h2>
          <p className="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span className="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
          </p>
          <a className="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank">
            <span>Directions</span>
            <svg className="search__icon">
              <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>
          </a>
        </div>

      </div>


      <div className="shopping">
        <h2 className="heading-2">My Shopping List</h2>

        <ul className="shopping__list">

          <li className="shopping__item">
            <div className="shopping__count">
              <input type="number" value="500" step="100" />
              <p>g</p>
            </div>
            <p className="shopping__description">Pasta</p>
            <button className="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
          </li>

          <li className="shopping__item">
            <div className="shopping__count">
              <input type="number" value="0.5" step="0.1" />
              <p>cup</p>
            </div>
            <p className="shopping__description">Ricotta cheese</p>
            <button className="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
          </li>

          <li className="shopping__item">
            <div className="shopping__count">
              <input type="number" value="3.5" step="0.1" />
              <p>tbsp</p>
            </div>
            <p className="shopping__description">Toasted almond slices</p>
            <button className="shopping__delete btn-tiny">
              <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
              </svg>
            </button>
          </li>

          <li className="shopping__item">
            <div className="shopping__count">
              <input type="number" value="0.5" step="0.1" />
              <p>tbsp</p>
            </div>
            <p className="shopping__description">Sea salt</p>
            <button className="shopping__delete btn-tiny">
              <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
              </svg>
            </button>
          </li>

          <li className="shopping__item">
            <div className="shopping__count">
              <input type="number" value="0.25" step="0.1" />
              <p>cup</p>
            </div>

            <p className="shopping__description">Minced green onions</p>
            <button className="shopping__delete btn-tiny">
              <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
              </svg>
            </button>
          </li>

          <li className="shopping__item">
            <div className="shopping__count">
              <input type="number" value="45" step="10" />
              <p>g</p>
            </div>
            <p className="shopping__description">Sesame seeds</p>
            <button className="shopping__delete btn-tiny">
              <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
              </svg>
            </button>
          </li>
          
        </ul>

        <div className="copyright">
            &copy; by Jonas Schmedtmann. Powered by
            <a href="http://food2fork.com" target="_blank" className="link">Food2Fork.com</a>.
        </div>

      </div>
 
    </div>
  );
  
}

export default App;