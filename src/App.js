import React from "react";
import Navbar from "./Components/Header/Navbar";
import About from "./Components/Main/About";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <div class="container">
        <Navbar />

        <Main />

        <Footer />
      </div>
    </>
  );
}
