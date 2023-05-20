import React from 'react'

function Image({blog}) {
  return (
    <div style={{marginRight:"7%" ,marginLeft:"12px" , padding:"12px"}}>
      <img src={blog.selectedFile} alt='' width="300px" height="150px"/>
      
    </div>
  )
}

export default Image
