import React from 'react';
import { AppLayout, Box, Header as CloudscapeHeader } from '@cloudscape-design/components';
import '@cloudscape-design/global-styles/index.css';
import Navigation from './components/SideNavigation';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <AppLayout
      navigation={<Navigation />}
      toolsHide={true}
      content={
        <div>
          <Home />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </div>
      }
    />
  );
}

export default App;
