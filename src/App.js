import React,{ useEffect } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Category from './Category';
import { useDataLayerValue } from './DataLayer';
import axios from 'axios';
import Module from "./Module";
import Fallback from "./Fallback";
import SubCategory from "./SubCategory";
import About from "./About";
import Terms from "./Terms";

function App() {

  const DATA_URL = "https://raw.githubusercontent.com/imprakashraghu/cratable-data/main/data.json";
  // eslint-disable-next-line
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    async function fetchData() {
        const response = await axios.get(DATA_URL);
        const categories = response.data?.categories;
        const modules = response.data?.modules;
        dispatch({
            type: 'SET_CATEGORIES',
            payload: categories
        });
        dispatch({
            type: 'SET_MODULES',
            payload: modules
        });
    }
    fetchData();
    // eslint-disable-next-line
  },[] );

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/subcategory/:category/:key">
          <SubCategory />
        </Route>
        <Route path="/module/:key">
          <Module />
        </Route>
        <Route path="/category/:key">
          <Category />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/404">
          <Fallback />
        </Route>
        <Route path="*">
          <Fallback />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
