import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../css/app.css";
import usersApi from "../../api/users";


function UserProfile(){
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        usersApi.get(`/showOne/${id}`).then(async (response) => {
            console.log(response);

            setUser(response.data);
          })
    }, [])
    

    if (!user) return <div>loading...</div>

    return (
        <div className="App userProfile">
            <h1><span>SocialAcademy</span> {user.name}</h1>
            <Link className="link" to={`/`}><h2><span>SocialAcademy</span> Home page</h2></Link>
            <div className="row ">
                <div key={user._id} className="card">
                    <div className="img_card">
                        <div className="box">
                        <div className="circle"></div>
                            <img className="imgUser" src={user.photo}></img>  
                        </div>
                    </div>
                    <h2 > Name: {user.name}</h2>
                    <h3>Age: {user.age}</h3>
                    <h4>Role: {user.role}</h4>
                    {/* {filterTextSize(user.photo)} */}
                </div> 
            </div>
            
        </div>
    )
}

export default UserProfile;