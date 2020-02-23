import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Routes from "./components/home/routes";
import Header from "./components/layout/header/header";
import Footer from './components/layout/footer/footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="App container">
        <Routes />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
