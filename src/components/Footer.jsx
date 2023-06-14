import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #f9fafa;
  height: 15vh;
  margin: 0;
  padding: 5vh;
  ${mobile({ padding: "0" })}
`;

const FooterItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3vw;
  ${mobile({ margin: "0 3vw" })}
`;

const PhoneDiv = styled.div``;
const Phone = styled.h4`
  ${mobile({ marginLeft: "17px" })}
`;
const PhoneNumber = styled.span``;
const EmailDiv = styled.div``;
const Email = styled.h4`
  ${mobile({ marginLeft: "26px" })}
`;
const EmailDetail = styled.a`
  text-decoration: none;
  color: black;
`;
const FollowDiv = styled.div`
  ${mobile({ alignItems: "center" })}
`;
const FollowTitle = styled.h4``;
const FollowIcons = styled.div`
  ${mobile({ marginLeft: "17px" })}
`;
const LinkedinAnchor = styled.a``;
const LinkedinImg = styled.img`
  height: 20px;
`;
const TwitterAnchor = styled.a``;
const TwitterImg = styled.img`
  height: 20px;
  margin-left: 5px;
`;
const OriginDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({ display: "none" })}
`;
const OriginLineOne = styled.span`
  font-size: 12px;
`;
const OriginLineTwo = styled.span`
  font-size: 12px;
`;

const Footer = () => {
  return (
    <Container>
      <FooterItems>
        <PhoneDiv>
          <Phone>Phone</Phone>
          <PhoneNumber>321-458-7095</PhoneNumber>
        </PhoneDiv>
        <EmailDiv>
          <Email>Email</Email>
          <EmailDetail href="mailto:ersan@gmail.com">
            ersan@gmail.com
          </EmailDetail>
        </EmailDiv>
        <FollowDiv>
          <FollowTitle>Follow Me</FollowTitle>
          <FollowIcons>
            <LinkedinAnchor href="www.linkedin.com">
              <LinkedinImg src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" />
            </LinkedinAnchor>
            <TwitterAnchor href="www.twitter.com">
              <TwitterImg src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Twitter-256.png" />
            </TwitterAnchor>
          </FollowIcons>
        </FollowDiv>
        <OriginDiv>
          <OriginLineOne>@2030 by Ersan Gökalp</OriginLineOne>
          <OriginLineTwo>Powered and secured by Ersan</OriginLineTwo>
        </OriginDiv>
      </FooterItems>
    </Container>
  );
};

export default Footer;
