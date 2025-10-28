import React from 'react';
import Footer from './footer.js';
import './dashboard.css';

function Dashboard() {
  return (
    <div>
      <div class="dashboard-content">
			<h1>Hostel Dashboard</h1>
			
			<div class="room-info"> 
				<div class="room-status">
					<div class="room-stats">
						<p class="digit">0</p>
						<p><b>Rooms booked</b></p>
					</div>
					
					<div class="room-stats">
						<p class="digit">0</p>
						<p><b>Rooms available</b></p>
					</div>
				</div>
				
				<div class="room-details">
					<input type="text" placeholder="Search tenant..."/>
					<button>Search</button>
					<table border="1">
						<tr>
							<td>Room number</td>
							<td>Tenant</td>
							<td>Date Booked</td>
							<td>tel no.</td>
							<td>Email</td>
							<td>Payment status</td>
						</tr>
						<tr>
							<td>01</td>
							<td>Oketcho Nathan</td>
							<td>27/10/2025</td>
							<td>+256778888493</td>
							<td>nathanoketcho1@gmail.com</td>
							<td>Paid</td>
						</tr>
					
					</table>
				</div>
				
				<div class='addroom'>
					<form action="#" method="post" enctype="multipart/form-data">
						<p><b>Add rooms</b></p>
						<input type="file" name="room_image" required/>
						<textarea rows="10" name="room_description"></textarea>
						<button type="submit">Add Room</button>
					</form>
				</div>
        
			</div>
        </div>
        
      <Footer />
    </div>
  );
}
export default Dashboard;