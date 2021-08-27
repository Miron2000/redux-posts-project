import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import AllPosts from "./components/AllPosts";
import Header from "./components/Header";
import TestComponent from "./components/TestComponent";

function App() {

  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={AllPosts} />
          <Route exact path="/test" component={TestComponent} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
