import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [view, setView] = useState("login");
  const [intern, setIntern] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start">
      {view === "register" && <Register setView={setView} />}
      {view === "login" && <Login setView={setView} setIntern={setIntern} />}
      {view === "dashboard" && intern && <Dashboard intern={{
        name: "Mohith",
        referralCode: "mohith2025",
        totalRaised: 1500
      }} />}
    </div>
  );
}

export default App;
