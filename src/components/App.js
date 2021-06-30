import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Birthdays from "../pages/Birthdays";
import Signin from "../pages/Signin";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <main className="mt-4 min-vh-100">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/birthdays" exact component={Birthdays} />
            <Route path="/signin" exact component={Signin} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
