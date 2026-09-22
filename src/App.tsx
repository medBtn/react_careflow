import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/sidebar";

function App() {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
