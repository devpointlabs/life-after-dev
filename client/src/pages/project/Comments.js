import { useState, useEffect } from "react";
import Axios from "axios";
import Comment from "./Comment";

function Comments({ project }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    Axios.get(`/api/projects/${project.id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch(console.log);
  }, []);

  //This component returns all the comments for this project

  return (
    <>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default Comments;
