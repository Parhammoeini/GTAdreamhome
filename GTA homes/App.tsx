import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Realty from './pages/Realty';
import BuildRenovation from './pages/BuildRenovation';
import ShortStay from './pages/ShortStay';
import ProjectsGallery from './pages/ProjectsGallery';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realty" element={<Realty />} />
          <Route path="/build-renovation" element={<BuildRenovation />} />
          <Route path="/short-stay" element={<ShortStay />} />
          <Route path="/projects" element={<ProjectsGallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
