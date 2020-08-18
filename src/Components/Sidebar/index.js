import React,{useState,useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/Blog.json'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {


  const [posts,setPosts] = useState([]); 

  
  useEffect(()=>{ 
    const Posts=blogPost.data
    setPosts(Posts);
  },posts);


  return(

    <div className="sidebarContainer">
    <Card style={{marginBottom:'20px ',padding: '20px',boxSizing: 'border-box'}}>
      <div className="cardHeader">
        <span>About Us</span>
      </div>
      <div className="profileimageContainer">
         <img src={require('../../Blogimages/naveen.JPG')} alt=""></img>
      </div>
      <div className="cardBody">
        <p className="personalBio">My name is Naveen i am a software developer specialization in Front end developement...</p>

      </div>
    </Card>
    <Card style={{marginBottom:'20px',padding: '20px',boxSizing: 'border-box'}}>
      <div className="cardHeader">
        <span>Social Network</span>
      </div>
    </Card>
    <Card style={{marginBottom:'20px',padding: '20px',boxSizing: 'border-box'}}>
      <div className="cardHeader">
         <span>Recent Posts</span>
      </div>
      <div className="recentPosts">

        {
          posts.map(post =>{
            return(
              <NavLink to={`/post/${post.id}`}>
                <div className="recentPost">
                   <h3>{post.blogTitle}</h3>
                   <span>{post.postedOn}</span>
                 </div>
              </NavLink>
              
            );
          })
        }
        
        


      </div>

    </Card>

</div>

)

}
    

export default Sidebar