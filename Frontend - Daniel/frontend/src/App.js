import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Artist from "./pages/Artists";
import About from "./pages/About";
import Reviews from "./pages/ReviewForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/artist' element={<Artist />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/reviewForm' element={<Reviews />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
