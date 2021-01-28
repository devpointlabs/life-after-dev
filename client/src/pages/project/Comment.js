import { useState, useEffect } from "react";
import Axios from "axios";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

function Comment({ comment }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Axios.get(`/api/users/${comment.user_id}/`)
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.log);
  }, []);

  ///api/projects/:project_id/comments/:id
  const deleteComment = async (comment) => {
    try {
      let res = await Axios.delete(
        `/api/projects/${project_id}/comments/${id}`
      );
      console.log(res.data);
    }
  };

  return (
    // <div className="comment">
    //   <div className="comment_top">
    //     <Image src={user && user.image} avatar />
    //     <div className="comment_topInfo">
    //       <h3>
    //         {user && user.firstname} {user && user.lastname}
    //       </h3>
    //     </div>
    //     <div className="post_bottom">
    //       <p>{comment.body}</p>
    //     </div>
    //   </div>
    //   <div className="comment_options">
    //     <p>❤️</p>
    //     <p>😱</p>
    //     <p>🤮</p>
    //     <p>Reply</p>
    //   </div>
    // </div>
    <Wrapper>
      <UserInfo>
        <Image src={user?.image} avatar />
        <span>
          {user?.firstname} {user?.lastname}
        </span>
      </UserInfo>
      <p>{comment.body}</p>
    </Wrapper>
  );
}

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

const Wrapper = styled.div`
  color: white;
  padding: 1rem 0;
`;

export default Comment;
