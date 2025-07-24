import React from 'react';
import { Box, Header, Cards, Link } from '@cloudscape-design/components';

const projects = [
  {
    name: 'LLM Based- Financial Research Tool',
    description: 'Working on automating financial research analytics for evaluating pricing posiiton of a company leveraging LLMs. Exploring conversation chains and LLM agents in langchain. Using chromaDB for storing and indexing.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bytrK3M-k2q94JzSSpdl0Q.jpeg',
    link: 'https://github.com/McHarold404/MERN-Job-Portal',
  },
  {
    name: 'Job Portal - Full-stack MERN application',
    description: 'Multifaceted job application portal, leveraging ExpressJS backend, MongoDB Atlas, ReactJS frontend allowing recruiters to post openings and real time status tracking for job searchers.',
    imageUrl: 'https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp',
    link: 'https://github.com/McHarold404/MERN-Job-Portal',
  },
  {
    name: 'SIS Engine - C++ based Wikipedia Search Engine',
    description: 'A lightweight, multi threaded indexer and searcher for Wikimedia dump. System was able to extract top-5 search results in under 0.1 seconds based on BM-25 scores. Web-app coming up soon!',
    imageUrl: 'https://user-images.githubusercontent.com/74975220/255162639-ab3cc010-6d6f-48db-be46-10b3db1895e0.png',
    link: 'https://github.com/McHarold404/Wikipedia-Search-Engine',
  },
  {
    name: 'Clash-of-Clans - Terminal based python game',
    description: 'Feature-rich, Terminal based game, employing Python and comprehensive OOP principles (Encapsulation, Inheritance, Abstraction, and Polymorphism) and OS multi-threading and asynchronous I/O operations.',
    imageUrl: 'images/coc.png',
    link: 'https://github.com/McHarold404/Clash-of-Titans',
  },
  {
    name: 'Cshell - Bash-like shell In C using concepts of OS',
    description: 'Modular Bash-like shell in C, leveraging core Operating Systems concepts for efficient piping, signal handling, foreground/background process management and I/O exceptions handling with systems.',
    imageUrl: 'images/shell.png',
    link: 'https://github.com/McHarold404/C-Shell',
  },
  {
    name: 'DBManager - SQL based CLI for Complex Queries',
    description: 'Sophisticated search operations, multi-field data updates, and record maintenance. Enhanced user experience by efficient handling of complex queries and database management.',
    imageUrl: 'https://www.freecodecamp.org/news/content/images/2020/08/Untitled-design-1-.png',
    link: 'https://github.com/McHarold404/DBMS_GYMS',
  },
];

function Projects() {
  return (
    <div id="section-blog">
      <Box padding="l">
        <Header variant="h2">Featured <strong>Projects</strong></Header>
        <Cards
          items={projects}
          cardDefinition={{
            header: item => <Link href={item.link} target="_blank">{item.name}</Link>,
            sections: [
              {
                id: 'image',
                content: item => <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: 'auto' }} />,
              },
              {
                id: 'description',
                content: item => item.description,
              },
            ],
          }}
        />
      </Box>
    </div>
  );
}

export default Projects;
