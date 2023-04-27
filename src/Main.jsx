import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // login logic goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="login">
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          defaultValue="Enter the email"
          onChange={handleEmailChange}
        />
      </div>
      <div id="log">
        <label htmlFor="password">Password </label>
        <input type="password" id="password" onChange={handlePasswordChange} />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginPage;
