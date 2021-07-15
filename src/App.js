import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY ,BASE_URL } from './index'
// import { Player } from 'video-react'
import styled from 'styled-components'





const StyledApp = styled.div`
  background-color: pink;
  text-align: center;
  padding-bottom: 100px;
  

  h1 {
    color: ${props => props.theme.secondaryColor}
  };
   
  h2{
     color ${props => props.theme.primaryColor}
   };

  img{
    border-radius: 10px;
  } 

`





function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err =>{
      console.log(err)
    })
  },[])
  
  
  
  return (
    <StyledApp>
      <p>
        <span role="img" aria-label='go!'>🚀</span>
      </p>
      <h1>{data.title}</h1>
      <h2>{data.date}</h2>
      <img src ={data.url} alt = 'Black Hole'></img>
      
      


    </StyledApp>
  );
}

export default App;
