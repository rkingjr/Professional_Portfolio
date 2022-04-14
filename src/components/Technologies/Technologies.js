import React from 'react';
import { DiRequirejs } from 'react-icons/di';
import { DiGithub, DiHeroku, DiMysql, DiJqueryLogo, DiCss3, DiNpm, DiHtml5, DiBootstrap, DiJavascript, DiNodejs, DiReact, DiMongodb } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <br/>
    <br/>
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I have worked with various technologies within the front-end and back-end web development world.
    </SectionText>
    <List>
      <ListItem>
        <div size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <DiJavascript></DiJavascript> JavaScript<br/>
            <DiReact></DiReact> ReactJS<br/>
            <DiBootstrap></DiBootstrap> Bootstrap<br/>
            <DiHtml5></DiHtml5> HTML<br/>
            <DiCss3></DiCss3> CSS<br/>
            <DiNpm></DiNpm> NPM<br/>
            <DiJqueryLogo></DiJqueryLogo> jQuery<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <DiMysql></DiMysql> MySQL<br/>
            <DiMongodb></DiMongodb> MongoDB<br/>
            <DiNodejs></DiNodejs> Node.js<br/>
            <DiRequirejs></DiRequirejs> RequireJS<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div size="3rem"/>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            <DiGithub></DiGithub> GitHub<br/>
            <DiHeroku></DiHeroku> Heroku<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
