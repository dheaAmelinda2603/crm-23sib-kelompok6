import { Outlet } from "react-router-dom";
import Sidebar from "../Admin/Sidebar";
import Header from "../Admin/Header";

export default function AdminMainLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex w-full">
      <Sidebar /> 
      <div id="main-content" className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
