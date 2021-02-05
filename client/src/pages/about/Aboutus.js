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
        <p style={{ flex_wrap: "wrap", textAlign: "center" }}>
          "Life After Dev was created by a team with a mission to create a place
          for Developers to come together and show off their projects and meet
          new friends along the way."
        </p>
      </Wrapper>
      <Wrapper>
        <Heading>Meet The Team</Heading>
      </Wrapper>
      <Column>
        <Wrapper2>
          <br />
          <Card3>
            <DevImage src={Danny}></DevImage>
            <DevName>Danny Leaver</DevName>
            <h3 style={{ flexWrap: "wrap", textAlign: "center" }}>
              Project Manager
            </h3>
            <br /> <br />
          </Card3>

          <br />
          <br />
          <Card2>
            <DevImage src={Andrew}></DevImage>
            <DevName>Andrew Sloan</DevName>
            <h3 style={{ flex_wrap: "wrap", textAlign: "center" }}>
              Front-End: <br /> <br />
              Back-End: <br /> <br />
            </h3>
            <br /> <br />
          </Card2>
        </Wrapper2>
      </Column>
      <br />
      <br />
      <Wrapper2>
        <Card>
          <DevImage src={Rachel}></DevImage>
          <DevName>Rachel Wadsworth-Smith</DevName>
          <h3 style={{ flex_wrap: "wrap", textAlign: "center" }}>
            Back-end:<p>Request Controller</p> <br />
            Front-End:
            <p>
              Comment section, worked with Taylor on the Project show page.
            </p>{" "}
            <br /> <br />
          </h3>
        </Card>
        <br />
        <br />
        <Card4>
          <DevImage src={Will}></DevImage>

          <DevName>Will Liang</DevName>
          <h3 style={{ flexWrap: "wrap", textAlign: "center" }}>
            Lead Designer <br />
          </h3>
          <br />
        </Card4>
        <br />
        <br />
        <Card5>
          <DevImage src={Ian}></DevImage>
          <DevName>Ian Wilkinson</DevName>
          <h3 style={{ flexWrap: "wrap", textAlign: "center" }}>
            Front-End: <br /> <br />
            Back-End: <br /> <br />
          </h3>
          <br /> <br />
        </Card5>
        <br />
        <br />
        <Card2>
          <DevImage src={Taylor}></DevImage>
          <DevName>Taylor Collins</DevName>
          <h3 style={{ flexWrap: "wrap", textAlign: "center" }}>
            Front-End: <br /> <br />
            Back-End: <br /> <br />
          </h3>
          <br /> <br />
        </Card2>
      </Wrapper2>
      <br /> <br />
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
  align-items: center;
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
  text-align: center;
`;

const DevName = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: #f44336;
  animation: ${animateOpacity} 10s;
  text-align: center;
`;

const Card = styled.div`
  width: 30%;
  background-color: #79d0f1;
  text-decoration: none;
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
