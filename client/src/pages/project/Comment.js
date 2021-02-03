import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import styled from "styled-components";
import binicon from "../../icons/Bin.png";
import { AuthContext } from "../../providers/AuthProvider";
import {
  CommentBin,
  CommentBody,
  CommentName,
  UserPic,
} from "../../styles/ProjectShowStyle";

function Comment({ comment, project, deleteComment }) {
  const [account, setAccount] = useState(null);
  const { user } = useContext(AuthContext);
  const [newComment, setNewComment] = useState(comment);

  useEffect(() => {
    Axios.get(`/api/users/${comment.user_id}/`)
      .then((res) => {
        setAccount(res.data);
      })
      .catch(console.log);
  }, [newComment]);

  const renderDelete = () => {
    if (user?.id == comment.user_id) {
      return (
        <div onClick={() => deleteComment(comment.id)}>
          <CommentBin src={binicon} />
        </div>
      );
    }
  };

  return (
    <Wrapper>
      <UserInfo>
        <UserPic src={account?.image} />
        <CommentName>
          {account?.firstname} {account?.lastname}
        </CommentName>
      </UserInfo>
      <CommentBody>{comment.body}</CommentBody>
      {renderDelete()}
    </Wrapper>
  );
}

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1.1rem 0;
  color: #fff;
`;

const Wrapper = styled.div`
  color: black;
  padding: 1rem 0;
`;

export default Comment;
