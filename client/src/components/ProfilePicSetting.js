import Axios from "axios";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import useCustomDrop from "../hooks/useCustomDrop";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  const [image, setImage] = useState(null);
  const {updateProfile, userPhoto} = useCustomDrop()

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setImage(acceptedFiles[0]);
    console.log(acceptedFiles[0])
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(props.user.id, image)
    props.toggle()
  }

  const styles = {
    modal: {
      position: "fixed",
      zIndex: 1,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    modal_content: {
      backgroundColor: "white",
      position: "absolute",
      top: "20%",
      left: "30%",
      width: "40%",
      padding: "20px",
      borderRadius: "5px",
      border: "2px solid black",
    }
  }
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

  return (
    <div className="modal" style={styles.modal}>
      <div className="modal_content" style={styles.modal_content}>
        <span className="close" onClick={props.toggle}>
            &times;
        </span>
        <>
          <form onSubmit={handleSubmit}>
            {/* {image !== null ? <img src={image}/>: null} */}
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
                ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
            <ul>
              {acceptedFiles.map(f=> (
                <li>
                  {f.path} - {f.size} bytes
                </li>
              ))}
            </ul>
            <button type="submit">add</button>
          </form>
        </>
      </div>
    </div>
  )
}
