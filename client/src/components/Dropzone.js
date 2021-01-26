import Axios from "axios";
import { useState, useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import useCustomDrop from "../hooks/useCustomDrop";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  const [image, setImage] = useState(null);
  const {updateProfile} = useCustomDrop()
  const { user } = useContext(AuthContext);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setImage(acceptedFiles[0]);
    console.log(acceptedFiles[0])
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return ( 
    <>
      <form onSubmit={() => updateProfile(user, image)}>
        
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