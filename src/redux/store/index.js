import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers";

//import { forbiddenWordsMiddleware } from "../middlewares";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//console.log( rootReducer );
const store = createStore(
                           rootReducer,
                           storeEnhancers( applyMiddleware( thunkMiddleware ) ) //forbiddenWordsMiddleware,
                         );

console.log( store.getState() );
export default store;
