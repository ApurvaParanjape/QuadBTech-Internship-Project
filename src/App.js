import logo from './logo.svg';
import './App.css';
import Shows from './components/Shows';
import ShowDetails from './components/ShowDetails';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Form from './components/Form';
function App() {
  const [showInfo, setShowInfo] = useState(null)
    const fetchShow = async () => {

        const data = await fetch(`https://api.tvmaze.com/search/shows?q=all`)

        const json = await data.json();

        setShowInfo(json);

    }

    useEffect(() => {
        fetchShow()
    }, [])
  return (
    <>
    <div>
      <Router>
      <Navbar/>
        <Routes>
      <Route exact path="/" element= {<Shows showInfo={showInfo}/>}/>
      <Route exact path="/details/:id" element= {<ShowDetails showInfo={showInfo}/>}/>
      <Route exact path="/booking/:id" element= {<Form showInfo={showInfo}/>}/>
      
        </Routes>

      </Router>
    </div>
    </>
  );
}

export default App;
