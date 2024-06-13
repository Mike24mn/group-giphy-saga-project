import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

// Reducer that holds our results
const gifList = (state = [], action) => {
  if (action.type === 'SET_SEARCH') {
    return action.payload;
  }
  return state;
};

// Saga function to handle FETCH_GIF action
function* fetchGif(action) {
  try {
    const apiKey = 'sv1yVDmbFUOEbuIERKzQXylpQQ4W6osd';
    const gifResponse = yield axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: apiKey,
        limit: 5,
        q: action.payload 
      }
    });
    yield put({ type: 'SET_SEARCH', payload: gifResponse.data.data });
  } catch (error) {
    console.log('Error with gif get request', error);
  }
}

// Root Saga to initialize and watch for FETCH_GIF action
function* rootSaga() {
  yield takeLatest('FETCH_GIF', fetchGif);
}

const sagaMiddleware = createSagaMiddleware();

// Create Redux store with combineReducers, applyMiddleware, and Saga middleware
const storeInstance = createStore(
  combineReducers({
    gifList,
  }),
  applyMiddleware(sagaMiddleware, logger),
);

// Run rootSaga to start watching for actions
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with Redux Provider wrapping the App component
root.render(
  <Provider store={storeInstance}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

export default storeInstance;
