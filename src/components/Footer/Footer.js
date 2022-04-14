import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: (682) 248-0299">(682) 248-0299</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:rkingjr@outlook.com">
            rkingjr@outlook.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Resume</LinkTitle>
          <LinkItem href="https://drive.google.com/file/d/131E-Q8pinE4MnFa7G7Rw1DZX5OhzluYY/view?usp=sharing">
            CLICK TO DOWNLOAD
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIcons>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>加油! KEEP GOING!</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/rkingjr">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/timothy-king-jr/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            {/* <SocialIcons href="https://www.instagram.com/rkingjr12/">
              <AiFillInstagram size="3rem" />
            </SocialIcons> */}
          </SocialContainer>
        </SocialIconsContainer>
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
