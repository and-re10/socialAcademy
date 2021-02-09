import React, { useState, useEffect } from "react";
import usersApi from "../../api/users";
import "../../css/app.css";
import { Link } from "react-router-dom";

function CardsUser() {

  const [data, setData] = useState([])

  useEffect(() => {
    usersApi.get('/showAll').then((response) => {
      console.log(response);
      setData(response.data);
    })
  }, []);

  let filterTextSize = (text) => {
    if (text){
      return <h5>Photo:{text.substr(0, 20)}</h5>
    }
  }

  return (
    <div>
      <h1><span>SocialAcademy</span> Users</h1>
      <div className="row r_cards">
        {data?.map((user, index) => {
          return (
            <div key={user._id} className="card">
                <div className="img_card">
                    <div className="box">
                    <Link className="link" to={`/${user._id}`}><div className="circle"></div></Link>
                        <img className="imgUser" src={user.photo}></img>
                    </div>
                </div>
                <h2 > Name: {user.name}</h2>
                <h3>Age: {user.age}</h3>
                <h4>Role: {user.role}</h4>
                {/* {filterTextSize(user.photo)} */}
            </div> 
          )
        })}

        {/* <div className="container">

          <h1> <span>border-gradient</span> demo</h1>

          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CardsUser;