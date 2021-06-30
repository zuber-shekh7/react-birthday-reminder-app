import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Navigation from "./Navigation";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <main className="min-vh-100">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
