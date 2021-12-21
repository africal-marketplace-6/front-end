import React from 'react';


export default function Login() {
    return (
        <div>
        <h1>Log in</h1>
            <form className="form-container">
                <label>
                    Username
                    <input type="text"/>
                </label>
                <label>
                    Password
                    <input type="password"/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}