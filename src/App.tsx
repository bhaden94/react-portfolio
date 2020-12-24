import React from 'react';
import './App.css';
import Navigation from './components/nav/Navigation';
import Skills from './components/skills/Skills'
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from './theme';
import useTheme from '@material-ui/core/styles/useTheme';
import Contact from './components/contact/Contact';

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Navigation />
        <div className="App-header">
          <div id='top' style={{ height: '100vh' }}></div>
          <h1 id="About" style={{ height: '500px' }}>About</h1>
          <div style={{ height: '100vh' }}>
            <h1 id="Skills">Skills</h1>
            <Skills />
          </div>
          <h1 id="Projects" style={{ height: '500px' }}>Projects</h1>
          <h1 id="Experience" style={{ height: '500px' }}>Experience</h1>
          <h1 id="Education" style={{ height: '500px' }}>Education</h1>
          <div style={{ height: '100vh' }}>
            <h1 id="Contact">Contact</h1>
            <Contact />
          </div>

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
