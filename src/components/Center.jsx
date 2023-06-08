import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 0;
  background-color: #f9fafa;
  height: 75vh;
`;

const Left = styled.div`
  margin-top: 10vh;
  margin-left: 20vw;
`;
const Image = styled.img`
  object-fit: cover;
  height: 60vh;
  width: 30vw;
  border-radius: 100%;
  flow: left;
`;
const Right = styled.div`
  margin-top: 15vh;
  margin-left: 3vw;
`;
const Hello = styled.h1``;
const About = styled.h2``;
const Detail = styled.div`
  width: 20vw;
  text-align: justify;
`;
const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  margin-top: 10vh;
`;
const ResumeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResumeRound = styled.span`
  border: solid 1px #ff9a3c;
  background-color: #ff9a3c;
  height: 10vh;
  width: 7vw;
  border-radius: 100%;
  position: absolute;
  &:hover {
    background-color: #f9fafa;
    border: solid 1px black;
  }
`;
const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: black;
`;

const ProjectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProjectsRound = styled.span`
  border: solid 1px #dc2f2f;
  background-color: #dc2f2f;
  height: 10vh;
  width: 7vw;
  border-radius: 100%;
  position: absolute;
  &:hover {
    background-color: #f9fafa;
    border: solid 1px black;
  }
`;
const Projects = styled.a`
  position: relative;
  text-decoration: none;
  color: black;
`;
const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactRound = styled.span`
  border: solid 1px #80ced6;
  background-color: #80ced6;
  height: 10vh;
  width: 7vw;
  border-radius: 100%;
  position: absolute;
  &:hover {
    background-color: #f9fafa;
    border: solid 1px black;
  }
`;
const Contact = styled.a`
  position: relative;
  text-decoration: none;
  color: black;
`;

const Center = () => {
  return (
    <Container>
      <Left>
        <Image src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </Left>
      <Right>
        <Hello>HELLO</Hello>
        <About>A Bit About Me</About>
        <Detail>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </Detail>
        <NavItems>
          <ResumeDiv>
            <ResumeRound></ResumeRound>
            <StyledLink to="/resume">Resume</StyledLink>
          </ResumeDiv>
          <ProjectDiv>
            <ProjectsRound></ProjectsRound>
            <StyledLink to="/projects"> Projects </StyledLink>
          </ProjectDiv>
          <ContactDiv>
            <ContactRound></ContactRound>
            <StyledLink to="/contact"> Contact </StyledLink>
          </ContactDiv>
        </NavItems>
      </Right>
    </Container>
  );
};

export default Center;
