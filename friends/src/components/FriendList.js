import React, { Component } from 'react';
import Friend from './Friend';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class Friends extends Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get('/friends')
        .then(res => {
            this.setState({
                friends: res.data
            })
        }) 
        .catch(err => console.log('Data returned an error', err)) 
    }

    render() {
        return (
            <div>
                <h1>Friends</h1>
              {this.state.friends.map(friend => (
                  <Friend 
                  name={friend.name}
                  age={friend.age}
                  email={friend.email} />
              ))}
                    
            
            </div>
        );
    }
}

export default Friends;