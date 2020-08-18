import React from 'react'
import './style.css';
import Card from '../../Components/UI/Card'
import BlogPost from '../../Components/BlogPost';
import Sidebar from '../../Components/Sidebar';


/**
* @author
* @function Post
**/

const Post = (props) => {

  
  return(
    <section className="container">
        <BlogPost {...props} />
        <Sidebar />
    </section>
   )

 }

export default Post