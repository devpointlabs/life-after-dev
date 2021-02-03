import React from "react";
import styled from "styled-components";
import Rachel from "../../images/Rachel.jpg";
import Andrew from "../../images/Andrew.jpeg";
import DevLife from "../../images/DevLife.png";

const Aboutus = () => {
  return (
    <>
      <BackgroundImage src={DevLife} />
      <Wrapper>
        <Heading>About Life After Dev</Heading>
        <p>
          “Life After Dev is a place for developers to share their ideas and
          explore other projects that they might be interested in. Although many
          of us started at DevPoint Labs, anyone can join and check out what
          other members creating. To get started, simply scroll down below and
          find something you like!”
        </p>
      </Wrapper>
      <Wrapper>
        <Heading>Meet The Team</Heading>
      </Wrapper>
      <Card>
        <DevImage src={Rachel}></DevImage>
        <DevName>Rachel Wadsworth-Smith</DevName>
      </Card>
      <br />
      <br />
      <Card2>
        <DevImage src={Andrew}></DevImage>

        <DevName>Andrew Sloan</DevName>
      </Card2>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
  padding: 20px;
`;

const DevName = styled.p`
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  font-weight: bold;
  align-text: justify;
`;

// const DevEmail = styled.p`
//   width: 300px;
//   height: 16.64px;

//   font-style: normal;
//   font-weight: normal;
//   font-size: 24px;
//   line-height: 17px;
//   color: black;
// `;

const Card = styled.div`
  width: 20%;
  background-color: #79d0f1;
  text-decoration: none;
  align-text: center;
`;

const Card2 = styled.div`
  width: 20%;
  background-color: #53d769;
  text-decoration: none;
  align-text: center;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 33vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 429px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const DevImage = styled.img`
  width: 100%;
`;
// const DevImage2 = styled.img`
//   width: 200px;
//   height: 200px;
// `;
export default Aboutus;
