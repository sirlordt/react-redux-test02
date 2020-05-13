import { _ARTICLES_LOADED } from "../constants/actionsTypes";

function articlesFetch() {

  /*
  return {
    type: _ARTICLES_LOADED,
    payload: [
               {
                 id: 1, title: "Test01"
               },
               {
                 id: 2, title: "Test02"
               }
            ]
  };
  */

  return async ( dispatch ) => {

    const response = await fetch( "https://jsonplaceholder.typicode.com/posts" );

    const jsonData = await response.json();

    dispatch(
              {
                type: _ARTICLES_LOADED,
                payload: jsonData
              }
            );

    /*
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
      */

  };

}

export default articlesFetch;
