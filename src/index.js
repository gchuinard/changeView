/**
 * Imports de dépendances
 */
import '@babel/polyfill';

// La librairie 'react' fait un export par défaut, on fait donc un import par
// défaut (=> on commande le plat du jour)
import React from 'react';

// La librairie 'react-dom' fait plusieurs exports nommés, on fait donc un import
// nommé en désignant explicitement ce qui nous intéresse (=> on commande à la
// carte)
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';

/**
 * Imports locaux
 */
import App from 'src/components/App';

/**
 * Code
 */
const rootComponent = <App />;
const renderingArea = document.querySelector('#root');
ReactDOM.render(rootComponent, renderingArea);
