import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Routes from "./components/home/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import Loading from "./components/common/loading";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Provider store={store}>
        <Header />
        <Loading />
        <div className="App container mt-5">
          
          <Routes />
        </div>
        <Footer />
      </Provider>
    </React.Fragment>
  );
}

export default App;
