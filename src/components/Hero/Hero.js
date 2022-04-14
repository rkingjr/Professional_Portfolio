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
    {/* <img src="https://drive.google.com/uc?export=view&id=19_VN47hECAUkl0GEuDhEekmbqW97hK1w"/> */}
      <SectionTitle main center>
        Howdy!,<br />
        Welcome To<br />
        My Portfolio
      </SectionTitle>
      <SectionText>Full Stack Web Developer</SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
