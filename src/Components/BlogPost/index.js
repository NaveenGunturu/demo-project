import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/Blog.json'

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

  const [post, setPost] = useState({
            id: "",
            blogCategory: "",
            blogTitle : "",
            postedOn: "",
            author: "",
            blogImage: "",
            blogText: ""
  });
  const [postid, setPostid]  = useState("");
  

  
  useEffect(()=>{
    const postid=props.match.params.postid;
    const post=blogPost.data.find(post=>post.id==postid)
    setPost(post);
    setPostid(postid);
    
  },[post,props.match.params.postid]);

  if(post.blogImage == "") return null;


  return(
      <div className="blogPostContainer">
          <Card>
              <div className="blogHeader">
  <span className="blogCategory">{post.blogCategory}</span>
                 <h1 ClassName="postTitle">{post.blogTitle}</h1>
  <span className="postedBy">Posted on {post.postedOn} by {post.author}</span>
              </div>

              <div className="postimageContainer">

                <img src={require('../../Blogimages/' + post.blogImage)} alt="Post image"></img>
              </div>
              <div className="postContent">
                 <h3>{post.blogTitle}</h3>
                 <p>{post.blogText}</p>

              </div>
          </Card>

      </div>


   )

 }

export default BlogPost