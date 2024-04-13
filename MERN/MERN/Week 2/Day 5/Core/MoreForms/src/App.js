import "./App.css";
import React, { useState } from "react";

function App() {
  const UserForm = (props) => {
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("");
    const [allUsers, setallUsers] = useState([]);
    const [hasBeenSubmited, setHasBeenSubmitted] = useState(false);
    const [PasswordMatch, setPasswordMatch] = useState(false);
    const [FirstNameError, setFirstNameError] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PasswordError, setPasswordError] = useState("");

    const createUser = (e) => {
      e.preventDefault();
      // if (password !== Confirmpassword) {
      //   setPasswordMatch(true);
      // }
      // Reset error messages
      setFirstNameError("");
      setLastNameError("");
      setEmailError("");
      setPasswordError("");
      setPasswordMatch(false);

      let valid = true;

      if (Firstname.length <= 2) {
        setFirstNameError("First Name must be at least 2 characters");
        valid = false;
      }

      if (Lastname.length <= 2) {
        setLastNameError("Last Name must be at least 2 characters");
        valid = false;
      }

      if (email.length <= 2) {
        setEmailError("Email must be at least 2 characters");
        valid = false;
      }

      if (password.length <= 2) {
        setPasswordError("Password must be at least 8 characters");
        valid = false;
      }

      if (password !== Confirmpassword) {
        setPasswordMatch(true);
        valid = false;
      }

      if (!valid) {
        return;
      }

      const newUser = { Firstname, Lastname, email, password, Confirmpassword };
      setallUsers([...allUsers, newUser]);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setHasBeenSubmitted(true);
    };

    return (
      <div className=" col-auto d-flex flex-column align-items-center">
        <form onSubmit={createUser}>
          {hasBeenSubmited ? (
            <h3>Thank you for submitting the form!</h3>
          ) : (
            <h3>Welcome, please submit the form.</h3>
          )}
          <div className="col p-2 ">
            <label className="col text-start  me-1  ">First Name : </label>
            <input
              type="text"
              className="ms-5"
              value={Firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            {/* {Firstname.length > 0 && Firstname.length <= 2 ? (
              <p>First Name must be at least 2 characteres</p>
            ) : null} */}

            {FirstNameError && <p>{FirstNameError}</p>}
          </div>
          <div className="col p-2 ">
            <label className="col-form-label me-1 ">Last Name : </label>
            <input
              type="text"
              className="ms-5"
              value={Lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            {/* {Lastname.length > 0 && Lastname.length <= 2 ? (
              <p>Last Name must be at least 2 characteres</p>
            ) : null} */}
            {LastNameError && <p>{LastNameError}</p>}
          </div>
          <div className="col p-2 ">
            <label className="col-form-label me-2">Email Address : </label>
            <input
              type="text"
              className="ms-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* {email.length > 0 && email.length <= 2 ? (
              <p>Email must be at least 2 characteres</p>
            ) : null} */}
            {EmailError && <p>{EmailError}</p>}
          </div>
          <div className="col p-2 ">
            <label className="col-form-label me-3">Password : </label>
            <input
              type="password"
              className="ms-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {password.length > 0 && password.length <= 8 ? (
              <p>Password must be at least 8 characteres</p>
            ) : null} */}
            {PasswordError && <p>{PasswordError}</p>}
          </div>
          <div className="col p-2 ">
            {PasswordMatch ? <p>Password must match</p> : null}
            <label className="col-form-label me-1">Confirm password : </label>
            <input
              type="password"
              value={Confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="col p-2 ">
            <input type="submit" value="Create User" />
          </div>
        </form>
        <div className="container col-auto d-flex flex-column align-items-center">
          <h1>Your Form Data:</h1>
          <ul>
            {allUsers.map((user, index) => (
              <ul key={index}>
                <h2>
                  <div>First Name: {user.Firstname}</div>
                  <div>First Name: {user.Firstname}</div>
                  <div>Last Name: {user.Lastname}</div>
                  <div>Email Address: {user.email}</div>
                  <div>Password: password</div>
                  <div>Confirm password: password</div>
                </h2>
              </ul>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="container w-50 border mt-5">
      <UserForm />
    </div>
  );
}

export default App;
