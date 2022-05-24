import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios';
import data1 from './db.json';

export default function Test() {
const[user,setUser]=useState([]);
// const data1 = [{
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// }]
 useEffect(()=>
   {
    //  axios.get('https://jsonplaceholder.typicode.com/users')
    //  .then(res=>setUser(res.data))
     axios.post('https://jsonplaceholder.typicode.com/users',{data1})
     .then(res=>setUser(res.data.data1))
     

   }
 )

  return (
    <div>
     {user.map((u, index)=>(
       <div key={index}>
         {/* {u.address.geo.lat} */}
         {u.firstName},
         {u.lastName}
         </div>
     ))}
     {/* <div>
         {user}
         </div> */}
    </div>
  )
  }

  // these two methods used to fetch the API data
  //using fetch also get the datas
  //and axios library also to get the datas
