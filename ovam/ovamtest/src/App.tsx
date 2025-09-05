import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontext";

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        <Maincontent />
      </div>
    </div>
  );
}
