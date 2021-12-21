import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const initialStateValues = {
  credentials: {
    username: "",
    password: "",
  },
};

export default function Login() {
  const [user, setUser] = useState(initialStateValues);

  const handleChange = (evt) => {
    setUser({
        credentials:{
            ...user.credentials,
            [evt.target.name]: evt.target.value
        }
    });
  };

  const login = evt => {
      evt.preventDefault();
    //   axios.post('')
    //   .then(res => {
    //       console.log('res',res)
    //       //have it set token
    //   })
    //   .catch(err=> {
    //       console.log(err)
    //   })
    history.push("/home")
  }

  return (
    <div>
      <h1>Log in</h1>
      <form className="form-container">
        <label>
          Username
          <input
            type="text"
            name="username"
            value={user.credentials.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input 
          type="password"
          name="password"
          value={user.credentials.password}
          onChange={handleChange} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
