import React, { useState, useEffect } from 'react';
import "./AssignOne.css";
import axios from "axios";
import Loader from "react-loader";



function AssignOne() {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(true);


  const getUsers = () => { 
    setLoaded(false)
    setTimeout(function(){
      return(
        setLoaded(true),
        axios.get("https://reqres.in/api/users?page=1")
        .then((res) => {
          setUsers(res.data.data)
        })
      )
      
    }, 1000)
    
  }
  console.log(users)
  return (
    <div className="one__body">
      <div className='one__nav' >
        <div className='nav__name' >
         <h3>User of Organisation.</h3> 
        </div>
        <div className='get__user' >
          <button onClick={() => getUsers()} >
            Get User's
          </button>
        </div>
      </div>
      <Loader
        loaded={loaded}
        lines={13}
        length={20}
        width={10}
        radius={30}
        corners={1}
        rotate={0}
        direction={1}
        color="#000"
        speed={1}
        trail={60}
        shadow={false}
        hwaccel={false}
        className="spinner"
        zIndex={2e9}
        top="50%"
        left="50%"
        scale={1.0}
        loadedClassName="loadedContent"
      />

      {users && users.map((d, i)=>{
            // console.log(d.last_name)
            return (
              <div className='details'>
                <div className='user__details' >
                  <div className='user__profile' >
                    <img src={d.avatar} alt="user image" />
                  </div>
                  <div className="user__info" >
                    <h3>User ID:{d.id}</h3>
                    <h3>First Name:{d.first_name}</h3>
                    <h3>Last Name: {d.last_name}</h3>
                    <h3>Email Address:{d.email}</h3>
                  </div>
                </div>
              </div>
            )
          })}
    </div>
  )
}

export default AssignOne;
