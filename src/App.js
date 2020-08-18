import React from 'react';
import './App.css';
import Home from './Containers/Home/index';
import Header from './Components/Header';
import Hero from './Components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUS from './Containers/ContactUS';
import Post from './Containers/Post';

function App() {
  return (
    <Router>

         <div className="App">
         <Header />
         <Hero />

         
         <Route path="/" exact component={Home}/>
         <Route path="/contact-us" component={ContactUS}/>
         <Route path="/post/:postid" component={Post}/>


         </div>

    </Router>
    
  );
}

export default App;
