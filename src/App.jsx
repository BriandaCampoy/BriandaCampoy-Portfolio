import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@containers/Layout';
import Projects from '@pages/Projects';
import Project from '@pages/Project';
import Schools from '@pages/Schools'
import Contact from '@pages/Contact';
import Course from '@pages/Course';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout>
          <Routes>
            <Route exact path="/projects/:id/:section" element={<Project/>}/>
            <Route exact path="/courses/:id/:section" element={<Course/>}/>
            <Route exact path="/courses" element={<Schools />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/" element={<Home />} />
            <Route exact path="*" element={<Home />} />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
}

export default App;
