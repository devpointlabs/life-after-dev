import { useState, useEffect } from "react";
import Axios from "axios";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import styled from "styled-components";

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
      <Styledh4>Comments ({comments?.length})</Styledh4>
      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <CommentInput project={project} />
    </>
  );
}

const Styledh4 = styled.h4`
  color: white;
`;

export default Comments;
