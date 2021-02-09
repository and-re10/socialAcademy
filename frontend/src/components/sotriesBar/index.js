import React, {useState, useEffect} from "react";
import usersApi from "../../api/users";
import "../../css/app.css";

import { Link } from "react-router-dom";

function StoriesBar () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersApi.get('/showAll').then(response => {
            setUsers(response.data);
        });
    }, []);

    return (
        <>
            <h1><span>Stories</span> Users</h1>
            <div className="row r_SBar">
                {users.map(user => {
                    return (
                        <div key={user._id} className="box">
                            <Link className="link" to={`/${user._id}`}><div className="circle"></div></Link>
                            <img className="imgUser" src={user.photo}></img>
                            <div>
                                <span>{user.name}</span>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default StoriesBar;