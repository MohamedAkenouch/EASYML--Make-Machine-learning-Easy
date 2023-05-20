import React, { Component } from 'react';

import "./oneBlog.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function OneBlog () {

    
    
    return (
      <div>
        
        <div className='container' >
          <div className="card" id='block'>
            <div className='row'>
            <img className="card-img-left col-sm-4" id ="imgg" src={this.props.image} alt="blog"/>
              <div className="card-body col-sm-8" >
                <p className="card-text" id='date'>May 31, 2021{this.props.date}</p>
                <h5 className="card-title" id='ttitle'>Common Challenges in Machine Learning and How to Tackle Them{this.props.title}</h5>
                
                <div className="linkk">Read now</div>
                  
              </div>
            </div>
            <hr  width="" color="" id="line"/>  
              
              
          </div>
        </div>
      </div>
      
        
    )
  
}
export default OneBlog ;