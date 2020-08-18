import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'; 
import './style.css'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {


  const[search,setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searched")
  }

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass=search?'searchinput active':'searchinput';


  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to ="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
           
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
                  <input typr="text" className={searchClass} placeholder="Search"/>
                  <img onClick={openSearch} className="searchicon" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png" size="30px" height="30px"alt="search"/>

            </form>

        </div>

    </div>
   )

 }

export default Navbar