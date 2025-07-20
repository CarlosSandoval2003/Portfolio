import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GlobalStyles } from './styles/GlobalStyles';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
