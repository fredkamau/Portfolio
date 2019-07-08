import React, { Component } from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Service from "./components/service/service";
import Contact from "./components/contact/contact";
import Skill from "./components/skills/skills";
import Project from "./components/projects/projects";
import Footer from "./components/footer/footer";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Resume />
        <Service />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
