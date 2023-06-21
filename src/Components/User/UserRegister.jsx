import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

export default function UserRegister() {

     const inputRef=useRef(null)

    // useEffect(()=>{
    //     inputRef.current.focus()
    // })

  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    const userData = {
      name,
      phone,
      email,
      password,
    };
    addUser(userData);
    navigate("/login");
    console.log(userData);
  };

  return (
    <div>
      <h3>Register</h3>
      <div>
        <input
          type="text" ref={inputRef}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button onClick={handleButtonClick} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
