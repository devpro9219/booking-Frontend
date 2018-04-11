import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxPromise from 'redux-promise'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import ScrollToTop from './components/shared/ScrollToTop'
import AppRoutes from './routes'
import funnel from './reducers/funnel'
// CSS Files
import './styles/main.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(funnel, composeEnhancers(
    applyMiddleware(ReduxPromise)
));

ReactDOM.render(
(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop>
                <AppRoutes />
            </ScrollToTop>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
