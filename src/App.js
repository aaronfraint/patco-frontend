import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [apiData, setApiData] = useState('');

  async function getDataFromApi() {
    const response = await fetch("http://localhost:8000/api/v0/timetable/?station_name=haddonfield&direction=wb");
    const jsonData = await response.json();
    return jsonData
  }

  // getDataFromApi();

  useEffect(() => {
    getDataFromApi()
    .then(data =>

      setApiData(data.upcoming_times)
      );
   }, [])
 
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world
          {apiData}
        </a>
      </header>
    </div>
  );
}

export default App;
