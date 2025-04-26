import React from 'react'
import { useRef,useContext } from 'react'
import { ImageContext } from './ImageContext';

const ImageInput = () => {
    const fileRef = useRef()
    const { setImageUrl } = useContext(ImageContext);
    let cloudName = "dmpwebopc"
    let unsignedUploadPreset = "ugiqcl22"
    let resourceUrl;
    
    const imageUrl = ()=>{
        
console.log(fileRef.current.files[0])
let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
let fd = new FormData() //empty data
fd.append("file",fileRef.current.files[0])
        fd.append("upload_preset",unsignedUploadPreset)
        fetch((url),{
          method:"POST",
          body:fd,
      }).then((response)=>response.json())
      .then((data)=>{
          console.log(data)
          setImageUrl(data.secure_url);
          console.log(resourceUrl)
        })
    }
  return (
    <div>
      <label htmlFor="imageInput">Add Image</label>
      <input type="file" id='imageInput' onChange={imageUrl} ref={fileRef}/>
    </div>
  )
}

export default ImageInput
