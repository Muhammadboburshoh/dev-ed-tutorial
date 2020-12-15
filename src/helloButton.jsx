import React from "react"


 function HelloButton () {

  const helloButton = () => {
    console.log("Salomcha");
  }
  
  return (
    <>
      <h1>Hello Racat</h1>
      <button onClick={helloButton}>Hello</button>
    </>
  )
}

export default HelloButton