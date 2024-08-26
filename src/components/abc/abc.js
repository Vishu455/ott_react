import React from 'react';
import './abc.css'; // Assuming you create a separate CSS file for styles
import Navbar2 from "../Navbar2/Navbar2";
function abc() {
  return (
    <div>
          <Navbar2 />
        <br></br>  
      <h2 className="text-center text-white">PLAN DETAILS</h2>
    
      <div className="card-container">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title text-black">Weekly Plan</h5>
            <h6 className="card-subtitle mb-2 text-muted">Amount: $149</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          
            <ul>
              <li>7 days unlimited Movie</li>
              <li>4GB Data Free For 3 Days</li>
              <li>Good Quality For 360p for Mobile Watch</li>
              <li>Only Mobile To Watch Not On TV & Computer</li>
              <li>Can Use Only Peoples From Age 13</li>
            </ul>
            <a href="#" className="card-link" onClick={(e) => e.preventDefault()}>pay</a>
          </div>
        </div>
        
        <div className="card bg-danger" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title text-black">Weekly Plan</h5>
            <h6 className="card-subtitle mb-2 text-muted">Amount: $149</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          
            <ul>
              <li>7 days unlimited Movie</li>
              <li>4GB Data Free For 3 Days</li>
              <li>Good Quality For 360p for Mobile Watch</li>
              <li>Only Mobile To Watch Not On TV & Computer</li>
              <li>Can Use Only Peoples From Age 13</li>
            </ul>
            <a href="#" className="card-link" onClick={(e) => e.preventDefault()}>pay</a>
          </div>
        </div>
        
        <div className="card bg-warning" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title text-black">Weekly Plan</h5>
            <h6 className="card-subtitle mb-2 text-muted">Amount: $149</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          
            <ul>
              <li>7 days unlimited Movie</li>
              <li>4GB Data Free For 3 Days</li>
              <li>Good Quality For 360p for Mobile Watch</li>
              <li>Only Mobile To Watch Not On TV & Computer</li>
              <li>Can Use Only Peoples From Age 13</li>
            </ul>
            
            <a href="#" className="card-link" onClick={(e) => e.preventDefault()}>pay</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default abc;
