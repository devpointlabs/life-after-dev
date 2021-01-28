import Axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

export default function CommentInput({ project }) {
  const [comment, setComment] = useState("");
  // const [commentMap, setcommentMap] = useState(comments ? comments : []);

  // const addComment = () => {
  //   commentMap.push({
  //     comment: comment,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let res = Axios.post(`/api/projects/${project.id}/comments`, {
        body: comment,
      });
      console.log(res.data);
      setComment([res.data, ...comment]);
      handleChange();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <NewComment onChange={handleChange} placeholder="Write a comment..." />
      </form>
    </Wrapper>
    // <div className="commentInput">
    //   <textarea
    //     className="commentInput__textarea"
    //     rows="1"
    //     placeholder="write a comment..."
    //     value={comment}
    //     onChange={(e) => setComment(e.target.value)}
    //   ></textarea>
    //   <button className="commentInput__btn">Post</button>
    // </div>
  );
}

const NewComment = styled.input`
  height: 3rem;

  &::placeholder {
    padding-left: 0.5rem;
  }
`;
const Wrapper = styled.div``;
