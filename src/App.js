import React, { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState("login"); // login, dashboard, courses

  const studentData = {
    name: "Surya Dhiraj",
    roll: "2400032511",
    department: "Computer Science",
    courses: ["Data Structures", "Database Systems", "Web Development", "Algorithms"]
  };

  const handleLogin = () => {
    setStudent(studentData);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setStudent(null);
    setCurrentPage("login");
  };

  const renderContent = () => {
    if (!student) {
      return (
        <div className="login-section">
          <h2>Welcome! Please log in</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      );
    }

    if (currentPage === "dashboard") {
      return (
        <div className="student-info">
          <h2>Welcome, {student.name}!</h2>
          <p><strong>Roll No:</strong> {student.roll}</p>
          <p><strong>Department:</strong> {student.department}</p>
        </div>
      );
    }

    if (currentPage === "courses") {
      return (
        <div className="courses-section">
          <h2>Your Courses</h2>
          <ul>
            {student.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Student Portal</h1>
        {student && (
          <nav>
            <ul>
              <li
                className={currentPage === "dashboard" ? "active" : ""}
                onClick={() => setCurrentPage("dashboard")}
              >
                Dashboard
              </li>
              <li
                className={currentPage === "courses" ? "active" : ""}
                onClick={() => setCurrentPage("courses")}
              >
                Courses
              </li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </nav>
        )}
      </header>

      {renderContent()}
    </div>
  );
}

export default App;
