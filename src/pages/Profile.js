import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    render(){
    return (
        <div>
            <Link to="DeletePost">Delete sPost</Link>
            <Link to="CreatePost">Create Post</Link>
            <p>Its time for Profile</p>
        </div>
    )
}
}

