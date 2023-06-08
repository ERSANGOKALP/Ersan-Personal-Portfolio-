import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafa;
  height: 220vh;
  margin: 0;
  padding: 0;
`;
const Sections = styled.div`
  margin: 15vh 15vw;
`;
const Section = styled.div`
  display: flex;
`;
const LeftFirst = styled.div`
  flex: 1;
  margin-right: 10vw;
`;
const HeadTitle = styled.h1`
  font-size: 6vh;
  margin-bottom: 10vh;
`;
const Title = styled.h2``;
const Explanation = styled.span`
  font-size: 2.5vh;
  text-align: center;
`;
const RightFirst = styled.div`
  flex: 1;
`;
const Image = styled.img`
  margin-top: 20.8vh;
  object-fit: cover;
  height: 40vh;
`;
const Left = styled.div`
  margin-right: 10vw;
`;
const Right = styled.div``;
const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Projects = () => {
  return (
    <>
      <Container>
        <Sections>
          <Section>
            <LeftFirst>
              <HeadTitle>Projects</HeadTitle>
              <Title>Shopping Ecommerce</Title>
              <Explanation>
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </Explanation>
            </LeftFirst>
            <RightFirst>
              <Image src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </RightFirst>
          </Section>
          <Section>
            <SectionContainer>
              <Left>
                <Title>Bank Atm Project</Title>
                <Explanation>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </Explanation>
              </Left>
              <Right>
                <Image src="https://images.pexels.com/photos/45111/pexels-photo-45111.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </Right>
            </SectionContainer>
          </Section>
          <Section>
            <SectionContainer>
              <Left>
                <Title>Ecommerce Card Projects</Title>
                <Explanation>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </Explanation>
              </Left>
              <Right>
                <Image src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </Right>
            </SectionContainer>
          </Section>
        </Sections>
        <hr style={{ margin: "0 5vw" }} />
      </Container>
    </>
  );
};

export default Projects;
