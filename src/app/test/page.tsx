"use client"

import { useState } from "react";

export default function TestPage() {
  const [inputvalue, setinputvalue] = useState ("")
  async function handleclick () {
    await fetch ("/api/hello", {method: "POST",
      body:JSON.stringify ({message: inputvalue})
    })
  }
  async function handlechange (e:React.ChangeEvent<HTMLInputElement >) {
    setinputvalue (e.target.value)
  }
  return (
    <div>
      <h1>page dos</h1>,
      <input onChange={handlechange}></input>
      <button onClick={handleclick}>CLICK ME OR DIE</button>
      <p>{inputvalue}</p> 
      </div>
  );
}
