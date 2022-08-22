import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import Draganddrop from './Draganddrop';
import '../css/uploader.css'

export default function Uploder(){


  const [image, setImage]=useState("")
  const [loading, setLoading]=useState(false )

  function handleDrop(e){
    e.preventDefault()
    const files = e.dataTransfer.files[0]
    console.log(e.dataTransfer.files[0])
    
    try{
    
      const reader = new FileReader()
      reader.readAsDataURL(files);
      reader.onloadend = () => {
        uploadImage(reader.result);
        setLoading(true)
      }
      setLoading(true)
    }catch(err){
      swal("no seleccionaste ninguna imagen")
    }
     
    
  }
 function handleDragOver(e){
  e.preventDefault();
  e.stopPropagation();
  return false;

  }
  
const handleChange =async (e)=>{
  const files = e.target.files[0]
  try{
    
  const reader = new FileReader()
  reader.readAsDataURL(files);
  reader.onloadend = () => {
    uploadImage(reader.result);
    setLoading(true)
  }
  setLoading(true)
}catch(err){
  swal("no seleccionaste ninguna imagen")
}
 
}

const uploadImage = async (imageurl)=>{
  
  const res = await axios.post('http://localhost:3001/upload', {imageurl})

  setImage(res.data.secure_url)
 setLoading(false)
  
}




  return (
    <div className='container mt-4 '>
      <div className="card mb-3">
        <div className='dashed fw-semibold text-center'
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
          {image.length > 0 ? <img src={image} style={{"width": "40%"}} className="card-img-top img-thumbnail m-4 mx-auto d-block" alt="..." ></img>:
          <img src='https://www.paintingclassifier.com/static/uploadPH.jpg' className='mx-auto d-block ' width='20%'></img>}
          <p className=''>Drag and drop your image here</p>
          
        </div>
       
        {/* {image.length > 0 && <img src={image} style={{"width": "40%"}} className="card-img-top img-thumbnail m-4 mx-auto d-block" alt="..." ></img>} */}
          <div className="card-body">
            
            
           {loading!==false&& <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{"width": "100%"}}></div>
            </div>}
              
              
          </div>

          <div className="mb-3 p-3 file-select" >
            <label for="formFile" className="form-label"></label>
                <input className="form-control form-width mx-auto d-block "  type="file" name="file" id="formFile" onChange={handleChange}></input>
        </div>
      </div>
        
    </div>
  )
}
