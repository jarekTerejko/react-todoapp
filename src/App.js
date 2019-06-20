import React, { Component } from "react";
import Todos from "./Todos";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header
          title="Another Todo App"
          subtitle="...but built in React and with Local Storage"
        />
        <Todos />
        <Footer />
      </div>
    );
  }
}

export default App;
