import styled from "styled-components";

//// Project Section ////

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProjectSection = styled.div`
  width: 800px;
  height: 100%;
  padding-right: 115px;
`;

export const ProjectOwnerDiv = styled.div`
  display: flex;
  margin: 40px 0px 0px 20px;
`;

export const ProjectOwnerPic = styled.img`
  border-radius: 15px;
  height: 50px;
  width: 50px;
  object-fit: cover;
`;

export const ProjectOwnerName = styled.span`
  margin: 10px 0px 30px 10px;
  font-weight: 900;
  font-size: 14px;
  color: #000000;
`;

export const JoinButtonDiv = styled.div`
  margin-left: auto;
  margin-top: 5px;
  align-self: end;
`;

export const ProjectPic = styled.img`
  object-fit: cover;
  border-radius: 10px;
  width: 650px;
  height: 330px;
  margin: 10px 0px 0px 20px;
`;

export const BackButton = styled.div`
  margin: 50px 20px 20px 20px;
`;

export const ProjectTitle = styled.div`
  font-weight: 900;
  font-size: 28px;
  margin: 10px 0px 10px 20px;
`;

export const ProjectLinksDiv = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const GithubIcon = styled.img`
  margin: 5px 10px 0px 20px;
  width: 25px;
  height: 25px;
`;

export const LiveIcon = styled.img`
  margin: 5px 10px 0px 0px;
  width: 25px;
  height: 25px;
`;

export const ChangePicButton = styled.div`
  margin: 0px 0px 0px 545px;
`;

export const CrudContainer = styled.div`
  display: flex;
  margin: 30px 0px 0px 20px;
`;

export const EditButtonDiv = styled.div``;

//// Comment Section ////

export const UserImage = styled.img`
  border-radius: 16px;
  object-fit: cover;
  width: 50px;
  height: 50px;
  margin: 20px 0px 0px 325px;
`;

export const CommentSection = styled.div`
  background: #1e2021;
  width: 425px;
  min-height: 100vh;
  padding: 1rem;
  flex-shrink: 0;
  border-radius: 30px 0px 0px 0px;
  color: #fff;
  margin-right: -50px;
`;

export const CommentsTotal = styled.h2`
  color: #fff;
  font-weight: 900;
  margin: 40px 20px 0px 35px;
`;

export const CommentsList = styled.div`
  color: #fff;
  margin: 20px 20px 30px 35px;
`;

export const UserPic = styled.img`
  border-radius: 8px;
  object-fit: cover;
  width: 28px;
  height: 28px;
`;

export const CommentName = styled.div`
  margin-left: 5px;
`;

export const CommentBody = styled.div`
  color: #fff;
`;

export const CommentBin = styled.img`
  filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(240deg)
    brightness(107%) contrast(101%);
  margin-top: 5px;
  cursor: pointer;
`;
