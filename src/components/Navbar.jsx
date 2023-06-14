import styled from "styled-components";
import Resume from "../pages/Resume";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { mobile } from "../responsive";

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

  ${mobile({ padding: "10px 0 10px 10px", marginTop: "15px" })}
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flex: "3", justifyContent: "flex-start" })}
`;

const BorderLeft = styled.span`
  align-items: center;
  justify-content: center;
  border: solid 10px #116dff;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  margin-right: 1vw;

  ${mobile({ marginRight: "5px", marginLeft: "1px" })}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  letter-spacing: 2px;

  ${mobile({ fontSize: "10px", letterSpacing: "1px", marginRight: "3px" })}
`;

const StyledLinked = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5vw;
  font-weight: bold;

  ${mobile({ fontSize: "10px", marginRight: "5px" })}
`;

const Job = styled.span`
  margin-left: 0.5vw;
  font-size: 1vw;
  margin-top: 3px;
  letter-spacing: 2px;
  ${mobile({ fontSize: "10px", letterSpacing: "0" })}
`;

const Right = styled.div`
  margin-right: 1vw;
  ${mobile({
    flex: "2",
    marginRight: "0px",
    marginLeft: "15px",
    justifyContent: "center",
    alignItems: "center",
  })}
`;
const NavItems = styled.div`
  text-decoration: none;
`;

const Brace = styled.span`
  border: solid 1px;
  color: gray;
  margin: 5px;

  ${mobile({ display: "none" })}
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarCon>
        <Left>
          <BorderLeft> </BorderLeft>

          <StyledLinked to="/">Ersan Gökalp</StyledLinked>

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
