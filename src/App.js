import React from "react";

function App() {
  const handleLogin = () => {
    alert("Login successful!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Student Portal</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
