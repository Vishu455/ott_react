import React, { useState } from 'react';
import Navbar2 from "../Navbar2/Navbar2";
import { Image } from "react-bootstrap";
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

function Views() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <Navbar2 />
      <br></br>
      <div className="background1">
        <div className="left">
          <p className="text-white">Name :</p>
          <h3 className="text-white">Predestination</h3>
          <p className="text-warning">Description :</p>
          <p className="text-white font-weight-bold">
            As his last assignment, a temporal agent is tasked to travel back in time and prevent a bomb attack in New York in 1975.<br />
            The hunt, however, turns out to be beyond the bounds of possibility..
          </p>
          <Image className="card-img-top" src="https://i.pinimg.com/originals/f1/52/fe/f152fee4056c61a772990ddf79c3b9bf.jpg" alt="predestination" style={{ width: '200px', height: '300px' }} />
          <br></br>
          <div>
            <br></br>
            <button className="btn btn-primary btn-style">Play Movie</button>
            <span><button className="btn btn-primary btn-style bg-warning text-primary">Watch Later</button></span>
          </div>
        </div>
        <div className="right">
          <div className="rating-container mt-3">
            <p className="text-white">Rating:</p>
            <Rating
              initialRating={rating}
              onChange={(rate) => setRating(rate)}
              emptySymbol={<FaStar color="#ccc" size={24}/>}
              fullSymbol={<FaStar color="#ffc107" size={24} />}
            />
            <div className="text-white">
              {rating} stars
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Views;
