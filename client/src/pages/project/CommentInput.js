import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

export default function CommentInput({ project, updateComments }) {
  const [comment, setComment] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await Axios.post(`/api/projects/${project.id}/comments`, {
        body: comment,
      });
      console.log("axios post for comment", res.data);
      updateComments(res.data);
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
        <Button>Submit</Button>
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
