import Axios from "axios";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default (props) => {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setImage(acceptedFiles[0]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image == null) {
      alert("cant be blank");
      return;
    }
    let data = new FormData();
    data.append("file", image);
    try {
      let res = Axios.put(`/api/user/1/update-picture`, data)
      console.log(res)
    } catch (err) {
      console.log(err);
      alert("err occured");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return ( 
    <>
      <form onSubmit={handleSubmit}>
        
        <p>image</p>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        <button type="submit">add</button>
      </form>
    </>
  )
}