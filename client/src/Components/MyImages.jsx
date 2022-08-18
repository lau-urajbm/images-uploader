import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const MyImages = () => {
    const [images, setImages]=useState([])
    async function loadImages(){
        const res = await axios.get('http://localhost:3001/upload')
        console.log(res.data[0].name)
        setImages(res.data)
    }
    useEffect( ()=>{
       loadImages()
    },[])
    

  return (
    <div className='container-fluid mt-4 row justify-content-evenly'>
        {images?.map(img=>{
            
            return(
                <div className="col-3 m-4 " style={{"width": "18rem"}}>
                    <img src={img.name.split('"')[1]} className=" img-thumbnail" alt="..."></img>
                       
                </div>
            )
        })}
    </div>
  )
}
export default MyImages