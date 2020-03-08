import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import rootSagas from './sagas'
import reducers from './ducks'

const middlewares = []

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

store.runSaga = sagaMiddleware.run
store.close = () => store.dispatch(END)
store.runSaga(rootSagas)

export default store
