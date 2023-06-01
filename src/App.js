import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route, Link, redirect} from 'react-router-dom'
import Home from "./pages/Home.js"
import Footer from './components/Footer';
import About from './pages/About.js';
import Officers from './pages/Officers';
import Events from './pages/Events';
import Calenders from './pages/Calenders';
import Shpetinas from './pages/Shpetinas';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/OSU-SHPE' element={<Home/>}/>
        <Route path='/OSU-SHPE/about' element={<About/>}/>
        <Route path='/OSU-SHPE/officers' element={<Officers/>}/>
        <Route path='/OSU-SHPE/events' element={<Events/>}/>
        <Route path='/OSU-SHPE/calenders' element={<Calenders/>}/>
        <Route path='/OSU-SHPE/shpetinas' element={<Shpetinas/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
