import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import reducers from "./reducers";

import About from "./components/About";
import Rocky_yew from "./components/p5/Rocky_yew";
import C64_10p from "./components/p5/C64_10p";
import Artwork from "./components/Artwork";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <Switch>
            <Route path='/' exact component={About}/>
            <Route path='/Rocky_yew' component={Rocky_yew}/>
            <Route path='/10print' component={C64_10p}/>
            <Route path='/artwork' component={Artwork}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
