import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 67vh;
  background-color: #f9fafa;
`;
const Frame = styled.div`
  display: flex;
  margin: 10vh 15vw 10vh 15vw;
`;

const Left = styled.div`
  flex: 2;
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
`;
const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TableDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vh 3vw;
`;
const TableLabel = styled.label``;
const TableInput = styled.input`
  width: 12vw;
  height: 5vh;
  background-color: #f9fafa;
  &:hover {
    background-color: #fbe7c6;
  }
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
                <TableInput
                  style={{ height: "12vh", width: "20vw" }}
                ></TableInput>
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
