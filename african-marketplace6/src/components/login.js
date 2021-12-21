import React, {useState} from 'react';


const initialStateValues = {
    user : {
        username : '',
        password : ''
    }
};


export default function Login() {
    
    const [state, setState] = useState(initialStateValues);

    const {user} = state;

    const changeUsername = (evt) => {
        const {name, value} = evt.target;
        this.setState({[name]: value})
    }
            


    return (
        
        <div>
            <pre>{JSON.stringify(state)}</pre>
        <h1>Log in</h1>
            <form className="form-container">
                <label>
                    Username
                    <input type="text" name="username" value={user.username} onChange={changeUsername}/>
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