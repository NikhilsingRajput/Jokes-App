import React, { useEffect, useState } from "react";
import axios from 'axios'
import './App.css'
function App() {
const [Bookmarks , setbookmark] = useState([]);
const [data , setdata] = useState('');
const [page1 , page2] = useState(true)
function addbookmark(){
  setbookmark([...Bookmarks,data]);
  alert("Bookmark Added")
}

console.log(Bookmarks)
function apicall(){
  axios.get('https://official-joke-api.appspot.com/random_joke')
  .then(res=>{
    setdata(res.data)
  })
}

useEffect(()=>{
apicall()
},[])
  
  return <div className="body">
    {page1 && <div className="box">
    <h2>Jokes Application</h2>
     

      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAApVBMVEX////EmWz/Oy/g4ODz8/NMTE3Hm22igmJBQUIxNj0tLjCzs7S/v8A4OTkyNzwlJSmaPjuPdVorPkJbVEw1PELm5uYXFxuohmLPz88oKSvMPTXBm3M2PkHHn3SqqqtUVFaamptra22Pj5CqPTgkQUaGPDrpOzJwPz7Io3xaPj6iPTuFblh/f4ALDBIdHiJcXF5yYVJlYFpnPz9IP0NBRk6fhW1TSkZoBUA8AAACu0lEQVR4nO3afVOiQADHcfdkYcGDCjDC3fWh0iyfsrPe/0u73UUtypmTP3ajud93Jh/QGT4uC2JDp4MQQgghhBBCCCGEEEL/fV6jnIiGyxFt0tI+q0ejqIwaVLK+bdPwOr6YDHsNGt7YNvXKeNS1vZKGeWW80RujVdN8HF1o0zCKz63s2TZ5k2ii75eri3Nb3dpG9Wn1wb3f52fb1Omy0vqu1DiFqj559/wcoCIzRYYxO7fE+kTvMrbW97frsiqKmUhrCRZH5Yeuxw5QsR4q7+bQRkwHtaZic1PL+oFKoVhZ+36dpJe/al2mE9uKE6g82oy7/UOnUP1PWUclwXOeROvrfev4Kyo+vlq1onZZXRYGfpGF+TH2FcXyWoIxu4cFg/J9UhzLvqKyotYicYEihPjHTqH8WkHoCPXeKVTtDUABBRRQQP001GDQPtTd/f1d21DTlLF02irU7CENsyxMH2YGNZ/P+bejZo/KpM5iwvRxplBbrlSOUeQT6mnARLhQVH8RCjZ4UijO3aLyQNZR4uWPSBa+RvmLRNAXkc25481nUNplbJJkORM7vUnNCWlAR5RmhFevV/zA/unwSKHU5jF/+mYbJ7SQ3Dg4l4X6DaZRPufmHWpZsLONoiyQ0pjmlWybj7haoJdJg93utsQ8NyrpAsVEIPdjNFdrJH7xWokqAFGPrwqDIhWa89fcOmp3RHEp97c+3xOIGa0KUy3RI2V9TtFdQA6o/UhIvWbfPDVziHxAmTllfaRofjh46i1EDns+f9/Z3g8G1WPpYO/7fET/Z9/xNQMUUEABBRRQQAEFFFBAAfUTUH0aXrUO5U2SrHWozjgKi2YqByivFG+8kcoBqtMr87fCb5IDlL5QMMwWV+f3bPu/LroejZIwaVAcO7iysI0XnxpX6y7TRQghhBBCCCGEEEIIobb2F2IictRVJn7uAAAAAElFTkSuQmCC"
      alt="bookmarks" onClick={()=>page2(false)}/>
      
      
       <div className="container">
        <p>{data.setup} </p>
        <p>{data.punchline}</p>
        <button className="new" 
        onClick={()=>apicall()}>New Joke </button>
        <button id="red" onClick={addbookmark}>Bookmark</button>
       </div>
       </div>
       }

      {!page1 && <div className="bookmarks">
        <h2> My Bookmarks</h2>
        <button className="Home" onClick={()=>page2(true)}>Home</button>
        <ol>
        {Bookmarks.map((e)=>{
          return <h5>
            <li>{e.setup}</li>
            <span>{e.punchline}</span>
          </h5>
        })}
        </ol>
       </div>}

  </div>
  
}

export default App;
