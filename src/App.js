import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Projects' element={<Projects />} />
    </Routes>
    <Footer />
   </>
  );
}

export default App;
