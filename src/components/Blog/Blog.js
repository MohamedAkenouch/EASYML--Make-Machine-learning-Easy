import React from 'react'
import { Link } from 'react-router-dom';

function Blog({blog}) {
  return (
    <div>
      <div className='blog-block' >
           <h6>{blog.createdAt}</h6>
           <h3>{blog.title}</h3> 
           <h4>{blog.content}</h4>
           <Link to={`/showBlog/${blog._id}`}>
            <div  style={{fontWeight:'bold', color:'red'}}>Read More..</div>
           </Link>
           <br></br>
           <hr></hr>
           
           
        </div> 
        
    </div>
  )
}

export default Blog
