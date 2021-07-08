import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Birthdays from "../pages/Birthdays";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import AddBirthday from "../pages/AddBirthday";
import { connect } from "react-redux";
import PrivateRoute from "../routes/PrivateRoute";
import { isAuthenticated } from "../actions/auth";

const App = ({ auth, isAuthenticated }) => {
  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);

  return (
    <div>
      <Router>
        <Navigation />
        <main className="mt-4 min-vh-100">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <PrivateRoute
              auth={auth.isAuthenticated}
              path="/birthdays"
              exact
              component={Birthdays}
            />
            <Route path="/birthdays/new" exact component={AddBirthday} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapStateToDispath = (dispatch) => {
  return {
    isAuthenticated: () => dispatch(isAuthenticated()),
  };
};

export default connect(mapStateToProps, mapStateToDispath)(App);
