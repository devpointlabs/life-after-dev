import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import styled from 'styled-components';


const LandingComment = ({ comment }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios.get(`/api/users/${comment.user_id}/`)
      .then(res => setUser(res.data))
      .catch(console.log)
  }, [])

  return (
    <div>
     
      <CommentName>{user?.firstname}  {user?.lastname} </CommentName>
      <CommentBody>{comment.body}</CommentBody>
    </div>
  )
}

export default LandingComment

const CommentName = styled.div`
  color: #B8B8B8;
  font-size: 16px;
  font-weight: bold;
`;

const CommentBody = styled.div`
  color: #B8B8B8
`;