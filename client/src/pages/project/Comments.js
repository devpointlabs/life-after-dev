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

  const updateComments = (comment) => {
    console.log("comment", comment);
    setComments([...comments, comment]);
  };

  const deleteComment = (id) => {
    Axios.delete(`/api/projects/${project.id}/comments/${id}`)
      .then((res) => {
        setComments(comments.filter((comment) => comment.id !== id));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Styledh4>Comments ({comments?.length})</Styledh4>
      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          project={project}
          deleteComment={deleteComment}
        />
      ))}
      <CommentInput project={project} updateComments={updateComments} />
    </>
  );
}

const Styledh4 = styled.h4`
  color: white;
`;

export default Comments;
