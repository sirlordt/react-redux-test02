import { _ARTICLES_ADD } from "../../constants/actionsTypes";

const initialState = { items: [] };

function reducer( state = initialState, action ) { // { type, payload }

  let result = null;

  switch ( action.type ) {

    case _ARTICLES_ADD: {

      result = {

        ...state, // keep the old state data, spread operator
        items: state.items.concat( action.payload ) //Add the new articles to state, not lost the old one.
        // articles: action.payload //Replace with the new articles

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
