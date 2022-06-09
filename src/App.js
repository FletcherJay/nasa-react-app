import React from "react"
import PODcard from './Components/PODcard';
import Asteroids from './Components/Asteroids';
import Patents from './Components/Patents';
import Mainnav from './Components/Mainnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donkievents from './Components/Donkievents';
import Projects from './Components/Projects';
import './App.css';
import { Tab, Tabs } from "react-bootstrap";

function App() {

  return (
      <div className="App">
      {/* nasa APOD API /background pic */}
      <PODcard/>

      <Mainnav/>
      {/* nasa Donki API */}
      <Tabs defaultActiveKey="events" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="events" title="Events">
          <Donkievents/>
        </Tab>
      {/* nasa Asteroids NeoWs API */}
        <Tab eventKey="Asteroids" title="Asteroids">
          <Asteroids/> 
        </Tab>
      {/* nasa Techport api maps ids to another api query based on id */}
        <Tab eventKey="Projects" title="Projects">
          <Projects/>
        </Tab>
      </Tabs>
      {/* nasa TechTransfer API */}
      <Patents/>

      </div>
    );
};

export default App;
