import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY ,BASE_URL } from './index'
import { Player } from 'video-react'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=1996-09-13`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err =>{
      console.log(err)
    })
  },[])
  
  
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h1>{data.title}</h1>
      <h2>{data.date}</h2>
      <img src ={data.url} alt = 'Black Hole'></img>
      
      


    </div>
  );
}

export default App;
