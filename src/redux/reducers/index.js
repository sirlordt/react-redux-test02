import { combineReducers } from "redux";

import articlesLocal from "./articles/local";
import articlesRemote from "./articles/remote";

const rootReducer = combineReducers(
                                     {
                                       articlesLocal,
                                       articlesRemote
                                     }
                                   );

export default rootReducer;
