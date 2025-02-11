// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Card from './components/Card';
import './styles/global.css';

const App = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('./data/config.json')
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, []);

  if (!config) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <About name={config.name} education={config.education} />
      <Projects>
        {config.projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </Projects>
      <Contact contact={config.contact} />
      <Footer />
    </div>
  );
};

export default App;

