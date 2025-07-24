import React from 'react';
import { Box, Header, Grid, Button } from '@cloudscape-design/components';

function About() {
  return (
    <div id="section-about">
      <Box padding="l">
        <Grid gridDefinition={[{ colspan: 5 }, { colspan: 7 }]}>
          <div>
            <img src="images/3-2.png" alt="Naman Ahuja" style={{ width: '100%' }} />
          </div>
          <div>
            <Header variant="h2">About <strong>Me</strong></Header>
            <p>Graduate CS student at Arizona State University</p>
            <p>
              I'm Naman Ahuja, a Computer Science graduate from IIIT Hyderabad,
              now embarking on my master's journey at Arizona State University.
              As a machine learning enthusiast with research experience in
              applied NLP for social good, I am passionate about solving complex
              real-world problems and thrive on exploring new fields and domains
              within technology. My curiosity drives me to continuously learn
              and adapt, and I take pride in seeing my projects through to
              completion. I am currently on the lookout for new collaborations.
              So if you have a cool idea that needs to be built or a complex
              problem that needs to be solved, feel free to reach out to me!
            </p>
            <Box>
              <Button href="#section-contact" variant="primary">Contact Me</Button>
              <Button href="https://drive.google.com/drive/folders/1DK-_xzOwiza7CPILDWUX4tM97IT4koYF?usp=sharing" target="_blank">Download CV</Button>
            </Box>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default About;
