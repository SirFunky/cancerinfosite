import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AfterDiagnosis from './Pages/AfterDiagnosis';
import SupportAndContacts from './Pages/SupportAndContacts';
import Treatment from './Pages/Treatment';
import Gifts from './Pages/Gifts';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/AfterDiagnosis" element={<AfterDiagnosis />} />
          <Route path="/SupportAndContacts" element={<SupportAndContacts />} />
          <Route path="/Treatment" element={<Treatment />} />
          <Route path="/Gifts" element={<Gifts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;