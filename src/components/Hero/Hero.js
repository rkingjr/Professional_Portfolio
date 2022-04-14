import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";


const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Howdy!,<br />
        Welcome To<br />
        Randy's Portfolio
      </SectionTitle>
      <SectionText>Full Stack Web Developer</SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
