import { Outlet } from "react-router";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="flex min-h-[calc(100vh-76px)]">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
