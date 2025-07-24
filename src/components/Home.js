import React from 'react';
import { Box, Header } from '@cloudscape-design/components';

function Home() {
  return (
    <div id="section-home" style={{ backgroundImage: 'url(images/four.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box textAlign="center" color="white">
        <Header variant="h1">
          Hello, I'm <strong>Naman Ahuja</strong>
        </Header>
        <Box variant="h2" color="white">
          a passionate Software Engineer and ML enthusiast
        </Box>
      </Box>
    </div>
  );
}

export default Home;
