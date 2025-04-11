import React, { useEffect, useState } from 'react'

const Clients =(props)=> {
const[list,setlist] = useState([])
useEffect(()=>{
    getClients();
},[])

const getClients=async()=>{
    const res = await axios.get("http://localhost:3000/client/getprofile");
    setlist(res.data);
}

  return (
    <div>Clients</div>
   
  )
}

export default Clients