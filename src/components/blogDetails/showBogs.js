import React, { Component } from 'react'
import "./showBlogs.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function ShowBogs ({texts}) {

    return (
      <div className='container'>
          <div className="media">
            
            <div className="media-body" id='body'>

              <h3 class="mt-0">Introduction</h3>
                
                <div id='text' >
                  {texts} 
                </div>                
            </div>
            </div>
      </div>
    )
  
}
export default ShowBogs;