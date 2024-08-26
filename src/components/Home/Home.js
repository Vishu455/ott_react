import React from 'react';
import './Home.css';
import { Image, Button } from 'react-bootstrap';
const Home = () => {
  return (
    <div className="container-fluid p-0">
      <div className="col-12 text-center position-relative vh-100">
        <div className="row m-0">
          <h1 className="position-absolute w-100 text-light" style={{ top: '20px', zIndex: 2 }}>Welcome to OTT PLATFORM</h1>
          <p className="position-absolute w-100 text-light" style={{ top: '80px', zIndex: 2 }}>
            This is the home page of your Ott platform .it provides all the facilities and features for watching new content within the application.feel free to use and obtain its utility.
          </p>
          {/* <Image
            src="https://images.pexels.com/photos/4406689/pexels-photo-4406689.jpeg?auto-compress&cs=tinysrgb&w=600"
            alt="Welcome Banner"
            className="img-fluid full-screen-img"
          /> */}
          <div className="position-absolute w-100 d-flex justify-content-center" style={{ top: '40%', transform: 'translateY(-50%)', zIndex: 2 }}>
            <div className='lft'>
            <Button className="bg-primary">Signup</Button>
            </div>
            <div className='rgt'>
            {/* <Button className="bg-primary">login</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
