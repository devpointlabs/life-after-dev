import React from "react";
import styled, { keyframes } from "styled-components";
import Rachel from "../../images/Rachel.jpg";
import Andrew from "../../images/Andrew.jpeg";
import DevLife from "../../images/DevLife.png";
import Danny from "../../images/Danny.jpeg";
import Will from "../../images/Will.jpeg";
import Ian from "../../images/Ian.jpeg";

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
          other members are creating. To get started, simply scroll down below
          and find something you like!”
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
      <br />
      <br />
      <Card3>
        <DevImage src={Danny}></DevImage>

        <DevName>Danny Leaver</DevName>
      </Card3>
      <br />
      <br />
      <Card4>
        <DevImage src={Will}></DevImage>

        <DevName>Will Liang</DevName>
      </Card4>
      <br />
      <br />
      <Card5>
        <DevImage src={Ian}></DevImage>
        <DevName>Ian Wilkinson</DevName>
      </Card5>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

const animateOpacity = keyframes`
0%, 100% {
  opacity: 2;
}
50%{
  opacity: 0;
}
`;

const Heading = styled.h1`
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
`;

const DevName = styled.p`
  font-weight: bold;
  color: #f44336;
  animation: ${animateOpacity} 10s;
`;

const Card = styled.div`
  width: 20%;
  background-color: #79d0f1;
  text-decoration: none;
  align-text: center;
  transition: transform 1s ease; 
  &:hover {
    transform: rotateY(-60deg);
  }
}
`;

const Card2 = styled.div`
  width: 20%;
  background-color: #53d769;
  text-decoration: none;
  align-text: center;
  transition: transform 1s ease; 
  &:hover {
    transform: rotateY(-60deg);
  }
}
`;

const Description = styled.div``;

const Card3 = styled.div`
 width: 20%;
  background-color: #0659FD;
  text-decoration: none;
  align-text: center;
  transition: transform 1s ease; 
  &:hover {
    transform: rotateY(-60deg);
  }
}
`;

const CardContainer = styled.div``;

const Card4 = styled.div`
width: 20%;
  background-color: #79D0F1;
  text-decoration: none;
  align-text: center;
  transition: transform 1s ease; 
  &:hover {
    transform: rotateY(-60deg);
  }
}
`;

const Card5 = styled.div`
width: 20%;
  background-color: #79D0F1;
  text-decoration: none;
  align-text: center;
  transition: transform 1s ease; 
  &:hover {
    transform: rotateY(-60deg);
  }
}
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

export default Aboutus;
