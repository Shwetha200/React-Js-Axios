import React from "react";

import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [isUsers, setIsUsers]= useState(undefined);
  //let a=4;
  useEffect (()=>{
    let Task=async()=>{
      let response= await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");  // for getting api endpoint using = /id={a}     //?id=1&id=2
          setIsUsers(response.data); 
    }

    // let response= await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json/id=${a}`); // not used double quotes
    
    // let response= await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json/?id=1&id=2");



  //  axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{    //axios to fetch data from api
  //   setIsUsers(res.data);
Task()
  },[]);
  // const handleClick = () => {
  //   // implementation details
  // };
  
  
  return (
    <div className="App">
      {isUsers&&<div>{isUsers.time.updated}</div>} 
      {/* <button type="button" onClick={handleClick}>
        Click Me
      </button> */}
      {/* //current value.objectname.key  */}
    </div>
  );
}

export default App;
