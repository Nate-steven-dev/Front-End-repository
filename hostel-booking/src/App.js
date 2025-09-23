import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hostel Booking System</h1>
      <p>Welcome to the Hostel Booking System!</p>
     <div>
      <p>Book your stay now!</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Check-in Date:
          <input type="date" name="checkin" required />
        </label>
        <label>
          Check-out Date:
          <input type="date" name="checkout" required />
        </label>
        <button type="submit">Book Now</button>
      </form>
     </div>
    </div>
  );
}

export default App;
