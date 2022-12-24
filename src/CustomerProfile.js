import React, { useState } from "react";
import { useEffect } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState(null);
  function getCustomer(){
    fetch(`https://cyf-react.glitch.me/customers/${props.customerProfile.id}`)
    .then((res)=>{
      return res.json()
      
    })
    .then((data)=>{
      console.log(data)
      setProfile(data)
    })
  }
  useEffect(() =>{

    if(props.customerProfile){
      getCustomer()
    }
  },[props.customerProfile])

  if(!profile){
    return null
  } 

  return (
    <div>
    <h2>Customer Profile</h2>
    <p>id : {profile.id}</p>
    <p>email : {profile.email}</p>
    {profile.vip && <p>phone number : {profile.phoneNumber}</p>}
    </div>
  );
}

export default CustomerProfile;
