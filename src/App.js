import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import DashboardEmbed from './components/DashboardEmbed';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Projects />
        {/* <DashboardEmbed /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;