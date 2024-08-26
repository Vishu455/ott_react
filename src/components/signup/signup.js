import React, { useState } from 'react';
import './signup.css';
import Navbar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
    var [name,setName]=useState('');
    var [email,setEmail]=useState('');
    var [password,setPassword]=useState('');
    var [passwordconf,setPasswordConf]= useState('');
    var [errorMessage,setErrorMessage]= useState('');
    var navigate=useNavigate();
    function registerUser(){
        var user={
            name:name,
            email:email,
            password:password,
            password_confirmation:passwordconf
        }
        axios.post('http://127.0.0.1:8000/userapi/apisignup',user).then(response=>{
            setErrorMessage('');
            navigate('/login');

        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.reponse.data.errors).join(''));
            }else{
                setErrorMessage('failed to connect to api');

            
            }
        })
    }

    return (
        <div>
            <Navbar />
        <div className="background row ml-0">
            <div className="container col-5 mt-5">
                <div className="row mt-5 border bg-white rounded border-primary">
                    <div className="col-8 offset-2">
                        <h1 className="text-center text-primary">Register</h1>
                        <div className="form-group">
                            <label className="text-secondary">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-secondary">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-secondary">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-secondary">Confirm Password:</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button onClick={registerUser} className="btn btn-primary col-12">
                                Signup
                            </button>
                        </div>
                        <div className="container">
                            <p>go back to, <a href="login">login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Signup;
