import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Signup.css";
// import NavLoad from "./NavLoad";
// import image from '../images/ott4.jpg';

function Signup() {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [passwordConf, setPasswordConf] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();
    function registerUser(){
        var user = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConf
        }
        axios.post('http://127.0.0.1:8000/usersapi/apisignup',user).then(response=>{
            setErrorMessage('');
            navigate('/login'); 
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            }else{
                setErrorMessage('Failed to connect to api');
            }
        })
    }

    return (
        <div className="bgimage" >
            {/* <NavLoad /> */}
            <br />
            <br />
            <br />
            <br />
            <div className="container bg-dark liw mb-5  contain d-flex justify-content-center">
                <div>
                    <div className="">
                        <div className="">
                            <h1 className="text-center mt-3 text-white">Signup</h1>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <div className="form-group">
                                <label className="text-white"><b>Name:</b></label>
                                <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control mt-3 input" />
                            </div>
                            <div className="form-group">
                                <label className="text-white"><b>Email:</b></label>
                                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control mt-3 input" />
                            </div>
                            <div className="form-group">
                                <label className="mt-3 text-white"><b>Password:</b></label>
                                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control input mt-3" />
                            </div>
                            <div className="form-group">
                                <label className="mt-3 text-white"><b>Confirm Password:</b></label>
                                <input type="password" value={passwordConf} onChange={(event) => setPasswordConf(event.target.value)} className="form-control input mt-3" />
                            </div>
                            <div className="form-group mt-3 d-flex justify-content-center">
                                <button type="submit" onClick={registerUser} className="btn btn-primary mb-3 bg-danger mt-3" style={{ border: 'none' }}>SIGNUP</button>
                            </div>
                            <p className="text-white mr-4">Already have an account,<Link to="/login" className="text-white mb-2" style={{ marginLeft: '2px', textDecoration: 'none' }}> LOGIN</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;