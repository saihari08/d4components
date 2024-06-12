import logo from './logo.svg';
import './App.css';
import Player from './components/Player';

function App() {
  return (
<div className="App">
  <div className="playerdiv">
    <img className="playerpic" src="./images/rutu.png"></img>
    <h2>Name:Rutu</h2>
    <h2>Age:27</h2>
    <h2>Team:CSK</h2>
  </div>

  <div className="playerdiv">
    <img className="playerpic" src="./images/msd.png"></img>
    <h2>Name:Msd</h2>
    <h2>Age:42</h2>
    <h2>Team:CSK</h2>
  </div>

  <div className="playerdiv">
    <img className="playerpic" src="./images/jadeja.png"></img>
    <h2>Name:Jadeja</h2>
    <h2>Age:35</h2>
    <h2>Team:CSK</h2>
  </div>

  <div className="playerdiv">
    <img className="playerpic" src="./images/rahane.png"></img>
    <h2>Name:Rahane</h2>
    <h2>Age:36</h2>
    <h2>Team:CSK</h2>
  </div>

  <div className="playerdiv">
    <img className="playerpic" src="./images/shivam.png"></img>
    <h2>Name:Shivam</h2>
    <h2>Age:30</h2>
    <h2>Team:CSK</h2>
  </div>
<hr></hr>
  <Player name="msd" age="42" teamName="csk" pic="./images/msd.png"></Player>
  <Player name="rutu" age="27" teamName="csk" pic="./images/rutu.png"></Player>
  <Player name="jadeja" age="35" teamName="csk" pic="./images/jadeja.png"></Player>
  <Player name="rahane" age="36" teamName="csk" pic="./images/rahane.png"></Player>
  <Player name="shivam" age="30" teamName="csk" pic="./images/shivam.png"></Player>
</div>
  );
}

export default App;
