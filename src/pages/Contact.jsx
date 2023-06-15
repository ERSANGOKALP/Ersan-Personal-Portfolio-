import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 67vh;
  background-color: #f9fafa;
  ${mobile({ height: "71.5vh" })}
`;
const Frame = styled.div`
  display: flex;
  margin: 10vh 15vw 10vh 15vw;
  ${mobile({ margin: "50px 10px 80px 10px" })}
`;

const Left = styled.div`
  flex: 2;
  ${mobile({ display: "none" })}
`;
const ContactDiv = styled.div`
  margin-bottom: 5vh;
`;
const Title = styled.h1`
  font-size: 6vh;
  letter-spacing: 2px;
`;
const Explanation = styled.span``;
const PhoneDiv = styled.div`
  margin-bottom: 5vh;
`;
const PhoneTitle = styled.h3``;
const PhoneNumber = styled.span``;
const EmailDiv = styled.div``;
const EmailTitle = styled.h3``;
const Email = styled.a`
  text-decoration: none;
  color: black;
`;
const Right = styled.div`
  flex: 3;
  ${mobile({ flex: "1" })}
`;
const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flex: "1",
    display: "flex",
    flexDirection: "wrap",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
const TableDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh 3vw;
`;
const TableLabel = styled.label`
  ${mobile({ width: "80px" })}
`;
const TableInput = styled.input`
  width: 12vw;
  height: 5vh;
  background-color: #f9fafa;
  &:hover {
    background-color: #fbe7c6;
  }
  ${mobile({ width: "120px" })}
`;
const TableInputMessage = styled.input`
  width: 20vw;
  height: 12vh;
  background-color: #f9fafa;
  &:hover {
    background-color: #fbe7c6;
  }
  ${mobile({ width: "183px", height: "9vh" })}
`;

const Button = styled.button`
  width: 7vw;
  height: 15vh;
  background-color: #fbe7c6;
  border-radius: 100%;
  margin-right: 1vw;
  margin-top: 4vh;
  cursor: pointer;
  &:hover {
    background-color: #f9fafa;
  }
  ${mobile({ width: "90px", height: "75px" })}
`;

const Contact = () => {
  return (
    <>
      <Container>
        <Frame>
          <Left>
            <ContactDiv>
              <Title>Contact</Title>
              <Explanation>Looking forward to hearing from you</Explanation>
            </ContactDiv>
            <PhoneDiv>
              <PhoneTitle>Phone </PhoneTitle>
              <PhoneNumber>321-456-852</PhoneNumber>
            </PhoneDiv>
            <EmailDiv>
              <EmailTitle>Email</EmailTitle>
              <Email href="mailto:ersan@gmail.com">ersan@gmail.com </Email>
            </EmailDiv>
          </Left>
          <Right>
            <Table>
              <TableDiv>
                <TableLabel>First Name</TableLabel>
                <TableInput></TableInput>
              </TableDiv>
              <TableDiv>
                <TableLabel>Last Name</TableLabel>
                <TableInput></TableInput>
              </TableDiv>
              <TableDiv>
                <TableLabel>Mail*</TableLabel>
                <TableInput></TableInput>
              </TableDiv>
              <TableDiv>
                <TableLabel>Subject</TableLabel>
                <TableInput></TableInput>
              </TableDiv>
              <TableDiv>
                <TableLabel>Message</TableLabel>
                <TableInputMessage></TableInputMessage>
              </TableDiv>

              <Button>Submit</Button>
            </Table>
          </Right>
        </Frame>
        <hr style={{ margin: "0 5vw" }} />
      </Container>
    </>
  );
};

export default Contact;
