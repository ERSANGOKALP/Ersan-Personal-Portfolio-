import styled from "styled-components";
import Resume from "../pages/Resume";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Container = styled.div`
  height: 10vh;
  margin: 0;
  padding: 0;
  background-color: #f9fafa;
`;
const NavbarCon = styled.div`
  display: flex;
  padding: 3vh;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BorderLeft = styled.span`
  align-items: center;
  justify-content: center;
  border: solid 10px #116dff;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  margin-right: 1vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  letter-spacing: 2px;
`;

const Job = styled.span`
  margin-left: 0.5vw;
  font-size: 1vw;
  margin-top: 3px;
  letter-spacing: 2px;
`;

const Right = styled.div`
  margin-right: 1vw;
`;
const NavItems = styled.div`
  text-decoration: none;
`;

const Brace = styled.span`
  border: solid 1px;
  color: gray;
  margin: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarCon>
        <Left>
          <BorderLeft> </BorderLeft>

          <StyledLink to="/" style={{ fontSize: "1.5vw", fontWeight: "bold" }}>
            Ersan Gökalp
          </StyledLink>

          <Job>Software Engineer </Job>
        </Left>

        <Right>
          <NavItems>
            <StyledLink to="/resume">Resume </StyledLink>
            <Brace></Brace>
            <StyledLink to="/projects">Projects</StyledLink>
            <Brace></Brace>
            <StyledLink to="/contact"> Contact </StyledLink>
          </NavItems>
        </Right>
      </NavbarCon>
    </Container>
  );
};

export default Navbar;
