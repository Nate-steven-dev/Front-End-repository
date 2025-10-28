import Login from './components/login.js';
import Register from './components/register.js';
import Dashboard from './components/dashboard.js';
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
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
   );
}

export default App;