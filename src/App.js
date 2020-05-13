/* eslint-disable import/no-named-as-default */
import React from "react";

import "./App.css";

import Post from "./components/Posts";

const App = () => {

  return (

    <div className="app">
      <div>
        <h2>Articles</h2>
        {/*<List />*/}
      </div>
      <div>
        <h2>Add a new article</h2>
        {/*<Form />*/}
      </div>
      <div>
        <h2>API posts</h2>
        <Post />
      </div>
    </div>

  );

};

export default App;
