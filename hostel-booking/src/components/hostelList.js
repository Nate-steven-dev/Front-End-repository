import React from "react";
import '../App.css';

const Hostel= (props) =>{
    return(
         <div class="hostel-item card">
                <img alt="hostel"/>
                <div class="card-content">
                    <h4>{props.name}</h4>
                    <p>Location: {props.location}</p>
                    <div class="rating">
                        <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                    </div>
                    <p>{props.description}</p>
                    <a href="hostel-details.html">View Details</a>
                </div>
    </div>
    );
   
}

function HostelList(){
    return(
        <div>
            <h1>Explore our Hostels</h1>
        <p>Welcome to our hostel listing page. Here you can find various hostels to stay during your studies.</p>
        <div class="hostel-search">
            <input placeholder="search by name or location" />
            <button>Search</button>
        </div>
        <select id="sort-options">
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
            <option value="rating-desc">Rating: High to Low</option>
        </select>
        <div id="hostel-list">
             
            <Hostel name="Dream world Hostel" location="Kikoni" description="A vibrant hostel in the heart of the city, close to all major attractions."/> 
            <Hostel name="Olympia Hostel" location="Kikoni" description="A vibrant hostel in the heart of the city, close to all major attractions."/> 
            <Hostel name="Mwesigwa Residence" location="Kikoni" description="A vibrant hostel in the heart of the city, close to all major attractions."/>
            <Hostel name="Helican Hostel" location="Kikumi kikumi" description="A vibrant hostel in the heart of the city, close to all major attractions."/>
            <Hostel name="Aryan Hostel" location="Wandegeya" description="A vibrant hostel in the heart of the city, close to all major attractions."/>
            <Hostel name="Muhika Hostel" location="Kikoni" description="A vibrant hostel in the heart of the city, close to all major attractions."/>
            <Hostel name="New Nana Hostel" location="Old Kampala" description="A vibrant hostel in the heart of the city, close to all major attractions."/>
            <Hostel name="Baskon Hostel" location="Kikoni" description="A vibrant hostel in the heart of the city, close to all major attractions."/>
        </div>

        <div class="About-us">
            <h4>About Us</h4>
            <p>Your global community for adventure and connection. We provide safe, affordable, and social stays for students</p>
        </div>
        </div>
    );

}
    
export default HostelList;