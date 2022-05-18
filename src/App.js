import React from "react"
import PODcard from './Components/PODcard';
import Asteroids from './Components/Asteroids';
import Patents from './Components/Patents';
import Mainnav from './Components/Mainnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donkievents from './Components/Donkievents';
import Projects from './Components/Projects';
import './App.css';

function App() {

  return (
      <div className="App">
      {/* nasa APOD API /background pic */}
      <PODcard/>

      <Mainnav/>
      {/* nasa Donki API */}
      <Donkievents/>
      {/* nasa Asteroids NeoWs API */}
      <Asteroids/> 
      {/* nasa TechTransfer API */}
      <Patents/>
      {/* nasa Techport api maps ids to another api query based on id */}
      <Projects/>
      </div>
    );
};

export default App;
