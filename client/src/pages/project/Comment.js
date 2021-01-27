import { useState, useEffect } from "react";
import Axios from "axios";
import "./comment.css";
import { Image } from "semantic-ui-react";

function Comment({ comment }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Axios.get(`/api/users/${comment.user_id}/`)
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div className="comment">
      <div className="comment_top">
        <Image src={user && user.image} avatar />
        <div className="comment_topInfo">
          <h3>
            {user && user.firstname} {user && user.lastname}
          </h3>
        </div>
        <div className="post_bottom">
          <p>{comment.body}</p>
        </div>
      </div>
      <div className="comment_options">
        <p>❤️</p>
        <p>😱</p>
        <p>🤮</p>
        <p>Reply</p>
      </div>
    </div>
  );
}

export default Comment;
