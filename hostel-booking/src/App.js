import Login from './components/login.js';
import Register from './components/register.js';
import { Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <div style = {{ textAlign: 'center' }}>
        <h1 style = {{ color: '#0c48ee'}}>Hostel Booking System</h1>
        <p>Welcome to the Hostel Booking System!</p>
          <nav>
          <ul>
            <li>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/register">Register</Link>
              </button>
            </li>
          </ul>
        </nav>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    <div className="App">
      <h1>Find your hostel.</h1>
      <h2>Book comfortable rooms, easily.</h2>
      <p>Welcome to the Hostel Booking System!</p>
     <div>
      <p>Book your stay now!</p>
      <button>Book Now</button>
      <h2>Available Hostels</h2>
     </div>
    </div>
  );
}

export default App;