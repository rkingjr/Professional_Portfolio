import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle,} from '../../styles/GlobalComponents';
import Button from "../../styles/GlobalComponents/Button";

const Resume = () => {
    return (
    <Section id="resume">
        <SectionDivider/>
        <br/>
        <br/>
        <br/>
        <SectionTitle>
            Resume
        </SectionTitle>
        <Button className="container" style='content-align: center'>
            <a href="https://drive.google.com/file/d/131E-Q8pinE4MnFa7G7Rw1DZX5OhzluYY/view?usp=sharing" target="_blank">
            {/* <i class="fas fa-solid fa-file fa-10x"></i> */}
            <p>CLICK TO DOWNLOAD</p>
            </a>
        </Button>
    </Section>
    )};

export default Resume;
