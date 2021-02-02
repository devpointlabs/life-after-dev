import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import styled from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";
import {
  CommentsList,
  CommentsTotal,
  UserImage,
} from "../../styles/ProjectShowStyle";

function Comments({ project }) {
  const [comments, setComments] = useState(null);
  const { user } = useContext(AuthContext);

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
      {user?.id == project.user_id && <UserImage src={user.image} />}

      <CommentsTotal>Comments ({comments?.length})</CommentsTotal>
      <CommentsList>
        {comments?.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            project={project}
            deleteComment={deleteComment}
          />
        ))}
      </CommentsList>
      <CommentInput project={project} updateComments={updateComments} />
    </>
  );
}

export default Comments;
