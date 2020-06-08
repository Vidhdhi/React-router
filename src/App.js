import React from "react";
import HomePage from "./components/home"
import './App.css';
import AboutPage from "./components/about"
import PricingPage from "./components/Pricing"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Album layout</Link>
          </li>
         
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/Pricing">
            <Pricing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

function Pricing() {
  return (
    <div>
      < PricingPage/>
    </div>
  );
}

function About() {
  return (
    <div>
      < AboutPage/>
    </div>
  );
}




