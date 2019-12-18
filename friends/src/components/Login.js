import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state.credentials,
            [e.target.name]: e.target.value
        })
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth().post('/login')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login} className="form-container" >
                    <label htmlFor="username">Username:
                        <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username} 
                        onChange={this.handleChange} />
                    </label>

                    <label htmlFor="password">Password:
                        <input 
                        type="text"
                        name="password"
                        value={this.state.credentials.username} 
                        onChange={this.handleChange} />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;