import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import SubContents from "./Components/Subcontents";
import Advertisement from "./Components/Advertisement";

function App() {
  return (
    <div className="app">
      <Header />
      <section class="center">
        <Navigation />
        
        <Main>
          
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisement />

        </Main>
      </section>
    </div>
  );
}

export default App;
