import styled from "styled-components";
import { work_experience, education, skils } from "../data/data";

const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  height: 170vh;
  background-color: #f9fafa;
`;
const SectionFrame = styled.div`
  margin: 15vh 15vw 5vh 15vw;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div``;
const Head = styled.h1`
  font-size: 6vh;
  margin-bottom: 7vh;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
`;
const FirstSection = styled.div`
  display: flex;
  justify-content: center;
`;
const TopLeft = styled.div`
  flex: 1;
`;
const Title = styled.h2``;
const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30vw;
`;

const DateDiv = styled.div`
  margin-right: 2vw;
  flex: 1;
`;
const Date = styled.p``;
const Time = styled.span``;
const JobDiv = styled.div`
  flex: 3;
`;
const Job = styled.h3`
  margin-top: 1.7vh;
`;
const ExplanationDiv = styled.div`
  margin-top: 0.5vh;
`;
const Explanation = styled.p``;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const CenterLeft = styled.div``;
const CenterRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30vw;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
const BottomLeft = styled.div``;
const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30vw;
`;
const SecondSection = styled.div`
  display: flex;
  justify-content: center;
`;
const ThirdSection = styled.div`
  display: flex;
  justify-content: center;
`;
const Line = styled.div`
  border: solid 1px gray;
  margin: 5vh 0;
`;

const SkilList = styled.ul`
  margin-left: 7vw;
`;
const List = styled.li``;

const BottomLine = styled.div`
  background-color: #f9fafa;
  margin: 0;
`;

const Resume = () => {
  return (
    <>
      <Container>
        <SectionFrame>
          <Header>
            <Head>Resume</Head>
          </Header>
          <Top>
            <TopLeft>
              <Title>
                Work
                <br />
                Experience
              </Title>
            </TopLeft>
            <TopRight>
              <FirstSection>
                <DateDiv>
                  <Date>
                    <Time>2020 - President </Time>
                  </Date>
                </DateDiv>
                <JobDiv>
                  <Job>Editor</Job>
                  <ExplanationDiv>
                    <Explanation>
                      I'm a paragraph. Click here to add your own text and edit
                      me. It’s easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font.
                    </Explanation>
                  </ExplanationDiv>
                </JobDiv>
              </FirstSection>
              <SecondSection>
                <DateDiv>
                  <Date>
                    <Time>2009 - 2020 </Time>
                  </Date>
                </DateDiv>
                <JobDiv>
                  <Job>Software Developer</Job>
                  <ExplanationDiv>
                    <Explanation>
                      I'm a paragraph. Click here to add your own text and edit
                      me. It’s easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font.
                    </Explanation>
                  </ExplanationDiv>
                </JobDiv>
              </SecondSection>
              <ThirdSection>
                <DateDiv>
                  <Date>
                    <Time>2004 - 2009 </Time>
                  </Date>
                </DateDiv>
                <JobDiv>
                  <Job>Junior Front-End Developer</Job>
                  <ExplanationDiv>
                    <Explanation>
                      I'm a paragraph. Click here to add your own text and edit
                      me. It’s easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font.
                    </Explanation>
                  </ExplanationDiv>
                </JobDiv>
              </ThirdSection>
            </TopRight>
          </Top>
          <BottomLine>
            <hr
              style={{
                backgroundColor: "#f9fafa",
                margin: "5vh 0",
              }}
            />
          </BottomLine>
          <Center>
            <CenterLeft>
              <Title>Education</Title>
            </CenterLeft>
            <CenterRight>
              <FirstSection>
                <DateDiv>
                  <Date>
                    <Time>2019 - 2023 </Time>
                  </Date>
                </DateDiv>
                <JobDiv>
                  <Job>
                    Istanbul University |
                    <br />
                    Master’s Degree
                  </Job>
                  <ExplanationDiv>
                    <Explanation>
                      I'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you
                    </Explanation>
                  </ExplanationDiv>
                </JobDiv>
              </FirstSection>
              <FirstSection>
                <DateDiv>
                  <Date>
                    <Time>2019 - 2023 </Time>
                  </Date>
                </DateDiv>
                <JobDiv>
                  <Job>
                    Istanbul University |
                    <br />
                    Master’s Degree
                  </Job>
                  <ExplanationDiv>
                    <Explanation>
                      I'm a paragraph. Click here to add your own text and edit
                      me. Let your users get to know you
                    </Explanation>
                  </ExplanationDiv>
                </JobDiv>
              </FirstSection>
            </CenterRight>
          </Center>
          <BottomLine>
            <hr
              style={{
                backgroundColor: "#f9fafa",
                margin: "5vh 0",
              }}
            />
          </BottomLine>
          <Bottom>
            <BottomLeft>
              <Title>
                Skills
                <br />& Expertise
              </Title>
            </BottomLeft>
            <BottomRight>
              <FirstSection>
                <SkilList>
                  <List>
                    I'm a paragraph. Click here to add your own text and edit
                    me.
                  </List>
                  <List>
                    I'm a paragraph. Click here to add your own text and edit
                    me.
                  </List>
                  <List>
                    I'm a paragraph. Click here to add your own text and edit
                    me.
                  </List>
                  <List>
                    I'm a paragraph. Click here to add your own text and edit
                    me.
                  </List>
                </SkilList>
              </FirstSection>
            </BottomRight>
          </Bottom>
        </SectionFrame>
      </Container>
      <BottomLine>
        <hr
          style={{ backgroundColor: "#f9fafa", margin: "0", margin: "0 3vw" }}
        />
      </BottomLine>
    </>
  );
};

export default Resume;
