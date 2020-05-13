import { _ARTICLES_LOADED } from "../../constants/actionsTypes";

const initialState = { items: [] };

function reducer( state = initialState, action ) { // { type, payload }

  let result = null;

  switch ( action.type ) {

    case _ARTICLES_LOADED: {

      result = {

        ...state, // keep the old state data, spread operator
        items: state.items.concat( action.payload ) //Add the new articles to state, not lost the old one.
        // remoteArticles: action.payload //Replace with the new articles to state, lost the old one.

      };

      break;

    }

    default: {

      result = state;

    }

  }

  return result;

}

export default reducer;
