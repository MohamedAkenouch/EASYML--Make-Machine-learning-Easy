
import 'bootstrap/dist/css/bootstrap.min.css';
import "./blogTitles.css";

// this component will show the title of the blog
import React, { Component } from 'react';

function BlogTitles ({title,img}) {

   

 

    return (
        <div className='container-fluid' id="myStyle">
        <div className="card" id="title" >
          <div className='row'>
            <div className="card-body col-sm-8"  >
                <h2 class="card-title" id="cardTitle">{title}</h2>
                
                
            </div>
            <img className="card-img-left col-sm-4" style={{ padding: "50px"}} src={img} alt="blog"/>
            
          </div>
            
            
        </div>
      </div>

    )
  
}
export default BlogTitles;
