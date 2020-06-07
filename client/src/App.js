import React from 'react';
import Header from './components/header.component';
import RecipesManager from './components/recipes-manager.component';

import './style.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <RecipesManager />
    </div>
  );
}
  
export default App;

    