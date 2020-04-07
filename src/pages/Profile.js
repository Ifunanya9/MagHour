import React from 'react'
import { Link } from'../pages/DeletePost';
import { Link } from'../pages/CreatePost';

function Profile() {
    return (
        <div>
            <Link to="DeletePost">Delete sPost</Link>
            <Link to="CreatePost">Create Post</Link>
            <p>Its time for Profile</p>
        </div>
    )
}

