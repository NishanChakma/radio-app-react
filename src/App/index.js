import React from "react";
import Header from "../Components/Header/Header";
import Home from "../Components/Home";
import Footer from "../Components/Footer/Footer";
import "../Styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
