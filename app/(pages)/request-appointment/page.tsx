"use client"

import { useState } from "react";

const AppointmentPage = () => {
  const [data, setData] = useState('')

  const makeGetCall = async () => {
    const id = 123;
    const response = await fetch(`/api/${id}`, {
      method: 'GET'
    })
    const newData = await response.json();
    setData(newData)
  }

  return (
    <div>
      <button onClick={makeGetCall}>
        Make Call
      </button>
      <p>{data}</p>
    </div>
  )
  }
  
export default AppointmentPage