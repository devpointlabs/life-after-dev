import React from "react";
import styled, { keyframes } from "styled-components";
import Rachel from "../../images/Rachel.jpg";
import Andrew from "../../images/Andrew.jpeg";
import Life from "../../images/Life.png";
import Danny from "../../images/Danny.jpeg";
import Will from "../../images/Will.jpeg";
import Ian from "../../images/Ian.jpg";
import Taylor from "../../images/Taylor.jpg";

const Aboutus = () => {
  return (
    <>
      <BackgroundImage />
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
      <Column>
        <Wrapper2>
          <Card3>
            <DevImage src={Danny}></DevImage>

            <DevName>Danny Leaver</DevName>
            <p style={{ flex_wrap: "wrap" }}>
              I'm Danny and I'm the Project Manager!
            </p>
          </Card3>

          <br />
          <br />
          <Card2>
            <DevImage src={Andrew}></DevImage>

            <DevName>Andrew Sloan</DevName>
            <p style={{ flex_wrap: "wrap" }}>
              My Name is Andrew and I'm awesome!
            </p>
          </Card2>
        </Wrapper2>
      </Column>

      <br />
      <br />
      <Card>
        <DevImage src={Rachel}></DevImage>
        <DevName>Rachel Wadsworth-Smith</DevName>
        <p style={{ flex_wrap: "wrap" }}>
          Back-end: the Request Controller <br />
          Front-End: Comment section, worked with Taylor on the Project show
          page.
        </p>
      </Card>
      <br />
      <br />
      <Card4>
        <DevImage src={Will}></DevImage>

        <DevName>Will Liang</DevName>
        <p style={{ flex_wrap: "wrap" }}>
          I'm Will Liang I came up with all the designs!
        </p>
      </Card4>
      <br />
      <br />
      <Card5>
        <DevImage src={Ian}></DevImage>
        <DevName>Ian Wilkinson</DevName>
        <p style={{ flex_wrap: "wrap" }}>I'm slappin'</p>
      </Card5>
      <Card>
        <DevImage src={Taylor}></DevImage>
        <DevName>Taylor Collins</DevName>
        <p style={{ flex_wrap: "wrap" }}>Hi my name is Taylor</p>
      </Card>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

const Wrapper2 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
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
  width: 30%;
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
  width: 30%;
  background-color: #53d769;
  text-decoration: none;
  transition: transform 1s ease; 
  &:hover {
    transform: rotateY(-60deg);
  }
}
`;

const Description = styled.div``;

const Card3 = styled.div`
 width: 30%;
  background-color: #0659FD;
  text-decoration: none;
  align-text: center;
  transition: transform 1s ease; 
  &:hover {
    transform: rotateY(-60deg);
  }
}
`;

const Card4 = styled.div`
width: 30%;
  background-color: #53d769;
  text-decoration: none;
  align-text: center;
  transition: transform 1s ease; 
  &:hover {
    transform: rotateY(-60deg);
  }
}
`;

const Card5 = styled.div`
width: 30%;
  background-color: #79D0F1;
  text-decoration: none;
  align-text: center;
  transition: transform 1s ease; 
  &:hover {
    transform: rotateY(-60deg);
  }
}
`;

const BackgroundImage = styled.div`
  padding: 25px;
  background: url(${Life});
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
const DevImage = styled.img`
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default Aboutus;
