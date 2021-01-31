import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import styled from "styled-components";
import { AuthContext } from "../../providers/AuthProvider";

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
const UserImage = styled.img`
  border-radius: 8px;
  padding: 5px;
  width: 50px;
`;

export default Comments;
