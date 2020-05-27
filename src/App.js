import React from 'react';
import Header from './components/header.component';
import RecipesList from './components/recipes-list.component';
import './style.css';

function App() {
  return (
    <div>

      <div className='container'>
        <Header />
      </div>

      <div className="results">
        <RecipesList />
      </div>
 
    </div>
  );
}

export default App;