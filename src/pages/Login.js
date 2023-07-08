import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/style.css';

function Login() {
  // state variables for user input
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  // history object for navigation
  const navigate = useNavigate();

  // handle change of name input
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // handle change of number input
  function handleNumberChange(event) {
    setNumber(event.target.value);
  }

  // handle change of password input
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  // handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // print the values to the console
    console.log('Name:', name);
    console.log('Phone Number Id:', number);
    console.log('Access Token:', password)
    // redirect to /dashboard-empty-main
    navigate('/dashboard-empty-main');
  }

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-6">
            <img src="images/Tourist Welcome.svg" alt="Image" className="img-fluid" />
          </div> */}
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3 className="logins">Log In using Credentials:</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <p>Name</p>
                  <div className="form-group last mb-4">
                    <label htmlFor="name"></label>
                    <input
                      type="username"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <p>Phone Number Id</p>
                  <div className="form-group last mb-4">
                    <label htmlFor="number"></label>
                    <input
                      type="ussername"
                      className="form-control"
                      id="number"
                      value={number}
                      onChange={handleNumberChange}
                    />
                  </div>
                  <p>Access Token</p>
                  <div className="form-group last mb-4">
                    <label htmlFor="password"></label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <input type="submit" value="Log In" className="btn btn-block btn-primary" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
