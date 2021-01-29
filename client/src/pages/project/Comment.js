import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import binicon from "../../icons/Bin.png";
import { AuthContext } from "../../providers/AuthProvider";

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
      return <div onClick={() => deleteComment(comment.id)}>Delete</div>;
    }
  };

  return (
    <Wrapper>
      <UserInfo>
        <Image src={account?.image} avatar />
        <span>
          {account?.firstname} {account?.lastname}
        </span>
      </UserInfo>
      <p>{comment.body}</p>
      {renderDelete()}
    </Wrapper>
  );
}

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

const Wrapper = styled.div`
  color: black;
  padding: 1rem 0;
`;

export default Comment;
