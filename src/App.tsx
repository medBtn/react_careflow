import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./components/Dashboard/components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="flex min-h-[calc(100vh-76px)]">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
