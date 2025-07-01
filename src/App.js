import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import Art from './pages/art/Art.tsx';
import Code from './pages/code/Code.tsx';
import About from './pages/about/About.tsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/code" element={<Code />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
