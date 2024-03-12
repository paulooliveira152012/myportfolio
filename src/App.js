import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

// Import your CSS file
import "./pages/style.css";


function App() {
  const [page, setPage] = useState('AboutMe');

  function displayPage() {
    if (page === "ContactMe") {
      return <ContactMe />;
    } else if (page === "Project") {
      return <Project />;
    } else {
      return <AboutMe />;
    }
  }

  function handleChange(page) {
    setPage(page);
  }

  return (
    <div>
    <div className="main">
      <Header />
      <Navigation page={page} handleChange={handleChange} />
      {displayPage()}
    </div>
      <Footer />
      </div>
  );
}


export default App;


