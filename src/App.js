import React from "react";

import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [isUsers, setIsUsers]= useState(undefined);
  useEffect (()=>{
    let Task=async()=>{
      let response= await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
          setIsUsers(response.data); 
    }
  //  axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
  //   setIsUsers(res.data);
Task()
  },[]);
  
  
  return (
    <div className="App">
      {isUsers&&<div>{isUsers.time.updated}</div>} 
      {/* //current value.objectname.key  */}
    </div>
  );
}

export default App;
