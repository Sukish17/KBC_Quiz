import React, { useRef } from "react";
//import { MDBBtn } from "mdb-react-ui-kit";
import '../home.css'

const Start = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    inputRef.current.value && setName(inputRef.current.value);
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
        marginTop: "300px",
        display:"flex",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

      }}
    >
      <input
        type="text"
        placeholder="Enter Name"
        ref={inputRef}
        className="form-control"
      />
      <button className="sbtn" onClick={handleClick}>
        Start Game
      </button>
    </div>
  );
};

export default Start;
