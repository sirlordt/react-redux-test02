import { _ARTICLES_ADD } from "../constants/actionsTypes";

function articleAdd( payload ) {

  return {
           type: _ARTICLES_ADD,
           payload
         };

}

export default articleAdd;
