import React from 'react';
import { Box, Header, Link } from '@cloudscape-design/components';

function Contact() {
  return (
    <div id="section-contact">
      <Box padding="l">
        <Header variant="h2">My <strong>Contact Details</strong></Header>
        <ul>
          <li>
            <span>Email</span>
            <Link href="mailto:nahuja11@asu.edu">nahuja11@asu.edu</Link>
          </li>
          <li>
            <span>Linkedin</span>
            <Link href="https://www.linkedin.com/in/naman-ahuja-402166190/" target="_blank">Naman Ahuja</Link>
          </li>
          <li>
            <span>Github</span>
            <Link href="https://github.com/McHarold404/" target="_blank">McHarold404</Link>
          </li>
          <li>
            <span>Address</span>
            Tempe, Arizona
          </li>
        </ul>
      </Box>
    </div>
  );
}

export default Contact;
