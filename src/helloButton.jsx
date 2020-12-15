import React from "react"


 function HelloButton (props) {

  const helloButton = () => {
    console.log("Salomcha");
  }
  
  return (
    <>
      <h1>{props.ism}</h1>
      <button onClick={helloButton}>{props.ism}</button>
    </>
  )
}

export default HelloButton