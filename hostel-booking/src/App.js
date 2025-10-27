import Login from './components/login.js';
import Register from './components/register.js';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer.js';
import Navbar from './components/navbar.js';
// ...existing code...

function App() {
  return (
    <div className="App">
      <h1>Hostel Booking System</h1>

      {/* show navbar on every page */}
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* keep /navbar route only if you still want a dedicated route */}
        <Route path="/navbar" element={<Navbar />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;