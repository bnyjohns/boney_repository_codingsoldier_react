import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import allReducers from '../reducers/index';
import {Provider} from 'react-redux';
import ReduxPromiseMiddleware from 'redux-promise';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import Main from './main';
import Layout from './layout';

const root = document.getElementById('root');
console.log('app is starting');
const store = createStore(allReducers, applyMiddleware(ReduxPromiseMiddleware));

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>                    
                        <Layout>
                            <Main/>
                        </Layout>
                    </BrowserRouter>
                </Provider>
                ,root);