import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import About from "./navbar/about";
import Contact from "./navbar/contact";
import Projects from "./navbar/project";
import linkedin from './icons8-linkedin-50.png';
import git from './icons8-github-50.png';
import notion from './icons8-notion-50.png';
import './App.css';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <div className="header">
                <div className="jp">
                  <h1>
                    <Link to="/">Julia Piascik</Link>
                  </h1>
                </div>
                <div className="logos">

                  <a href="https://www.linkedin.com/in/juliapiascik/" target="_blank">
                    <img src={linkedin} className="linkedin-logo" alt="LinkedIn logo"/>
                  </a>


                  <a href="https://github.com/liapia99" target="_blank">
                    <img src={git} className="github-logo" alt="GitHub logo"/>
                  </a>


                  <a href="https://lukapia.notion.site/lukapia/brain-dumps-b6dd6fe1a56c4a2992cc7c7d5afea961" target="_blank">
                    <img src={notion} className="notion-logo" alt="Notion logo"/>
                  </a>

                </div>

              </div>
            </header>
            <div className="body">
              <div className="desc">
                <p className="julia">
                  I am a full-time undergrad at Sacred Heart University majoring in Computer Science and Computer Engineering.
                </p>
              </div>

              <div className="menubar">
                <a>
                  <div className="aboutpg"><Link to="/about"> About </Link></div>
                  <div className="contactpg"><Link to="/projects"> Projects </Link></div>
                  <div className="projectspg"><Link to="/contact"> Contact </Link></div>
                </a>

              </div>

              <Routes>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/projects" component={Projects}></Route>
                <Route exact path="/contact" component={Contact}></Route>
              </Routes>

              <div className="disc">
                <p>
                  Designed in Figma and coded in WebStorm by Julia Piascik. Built with React.js and Tailwind CSS. All text is
                  Khand typeface and icons are from Icons8.
                </p>
              </div>
            </div>
          </div>
        </Router>
    );
  }
}
export default App;
