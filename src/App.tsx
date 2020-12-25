import React from 'react';
import './App.css';
import Navigation from './components/nav/Navigation';
import Skills from './components/skills/Skills'
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from './theme';
import useTheme from '@material-ui/core/styles/useTheme';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Header from './components/section-headers/Header';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      minHeight: '100vh',
      width: '100%'
    }
  }),
);

function App() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Navigation />
        <div className="App-header">
          <div id='top' style={{ height: '100vh' }}></div>

          <div id="About" className={classes.section}>
            <Header text='About' />
          </div>

          <div id="Skills" className={classes.section}>
            <Header text='Skills' />
            <Skills />
          </div>

          <div id="Projects" className={classes.section}>
            <Header text='projects' />
            <Projects />
          </div>

          <div id="Experience" className={classes.section}>
            <Header text='Experience' />
          </div>

          <div id="Education" className={classes.section}>
            <Header text='Education' />
          </div>

          <div id="Contact" className={classes.section}>
            <Header text='Contact' />
            <Contact />
          </div>

        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
