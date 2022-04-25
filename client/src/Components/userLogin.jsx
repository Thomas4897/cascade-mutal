import { useState } from "react";
import axios from "axios";
import "../App.css";

// const sendGetRequest = async () => {
//   axios.get(`/users/`).then((response) => {
//     console.log(response.data);
//   });
// };

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const sendLoginRequest = async () => {
    axios
      .post(`/users/login`, {
        email: email,
        firstName: firstName,
        lastName: lastName,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <main className="userLogin">
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          sendLoginRequest();
          console.log(email, firstName, lastName);
        }}
      >
        Get Request
      </button>
    </main>
  );
}
