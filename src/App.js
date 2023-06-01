import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route, Link, redirect} from 'react-router-dom'
import Home from "./pages/Home.js"
import Footer from './components/Footer';
import About from './pages/About.js';
import Officers from './pages/Officers';
import Events from './pages/Events';
import Fundraisers from './pages/Fundraisers';
import Shpetinas from './pages/Shpetinas';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/OSU-SHPE' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/officers' element={<Officers/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/fundraisers' element={<Fundraisers/>}/>
        <Route path='/shpetinas' element={<Shpetinas/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
