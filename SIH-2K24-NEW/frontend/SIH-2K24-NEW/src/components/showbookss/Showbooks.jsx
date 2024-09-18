import React from 'react'
import axios from 'axios'
import './Showbook.css'
import { useState } from "react"
import { useEffect } from "react"
import AllBookSection from "../Allbooksection/AllBookSection"
const Showbooks = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios.get("http://localhost:1000/api/v1/getbooks").then((res) => setData(res.data.books))
    }
    fetch()
  })

  return (
    <div className="containss">
      <div className="d-flex justify-content-start align-items-center py-3">
        <h1 className="textde">Get all books at affordable price !</h1>
      </div>
     
        {Data ? (
          <AllBookSection data={Data}/>
          ) : (<div>Loading..</div>
        )}
      
    </div>
  )
}

export default Showbooks
