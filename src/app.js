//npm
//install->import->use

import React from 'react';
import  ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/Approuter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store=configureStore();

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

const appRoot=document.getElementById('app');
ReactDOM.render(jsx,appRoot);











//import './utils.js'
//import subtract, {square,add} from './utils.js'



//console.log('app.js is running');
//console.log(square(4));
//console.log(add(100,23));
//console.log(subtract(100,80));

//import issenior, {isAdult,canDrink} from './person.js';

//console.log(isAdult(17));
//console.log(canDrink(23));
//console.log(issenior(45));