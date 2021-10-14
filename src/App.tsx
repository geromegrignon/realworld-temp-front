import React, { useState } from 'react'
import './App.css'
import './Header';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Settings from "./Settings";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </div>
  )
}

export default App
