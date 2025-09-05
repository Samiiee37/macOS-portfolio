// src/App.jsx
import { useState } from "react";

const dataSources = [
  {
    tool: "Slack",
    scope: "Read Only",
    createdBy: "Rahul",
    date: "28-08-2025",
    data: "1.2k",
  },
  {
    tool: "Slack",
    scope: "Read Only",
    createdBy: "Rahul",
    date: "28-08-2025",
    data: "1.2k",
  },
  {
    tool: "Slack",
    scope: "Read Only",
    createdBy: "Rahul",
    date: "28-08-2025",
    data: "1.2k",
  },
  {
    tool: "Slack",
    scope: "Read Only",
    createdBy: "Rahul",
    date: "28-08-2025",
    data: "1.2k",
  },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredData = dataSources.filter((item) =>
    item.tool.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r flex flex-col">
        <div className="p-4 font-semibold border-b">vishalraina340</div>
        <nav className="flex-1 p-2 space-y-1">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
            Repositories
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded bg-blue-50 text-blue-600"
          >
            Data Source
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
            Learnings
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
            Organization Settings
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
            Subscription
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
            Refer and Earn
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
            Docs
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
            Support
          </a>
        </nav>
        <div className="p-4 border-t">
          <p className="text-sm text-gray-700">Admin</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-xl font-semibold mb-2">Data Source</h1>
        <p className="text-gray-600 mb-6">
          Use data sources for insights, and connectors for real-time actions.
        </p>

        {/* Tabs */}
        <div className="border-b mb-4 flex">
          <button className="px-4 py-2 border-b-2 border-orange-500 text-orange-600">
            Data Source
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-black">
            Connectors
          </button>
        </div>

        {/* Search + Actions */}
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-1/3 border rounded px-3 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">
              Filter
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
              + New Data Source
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Tool</th>
                <th className="px-4 py-2 border">Scope</th>
                <th className="px-4 py-2 border">Created by</th>
                <th className="px-4 py-2 border">Date Created</th>
                <th className="px-4 py-2 border">Data Recorded</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, idx) => (
                <tr key={idx} className="text-center">
                  <td className="px-4 py-2 border">{row.tool}</td>
                  <td className="px-4 py-2 border">{row.scope}</td>
                  <td className="px-4 py-2 border">{row.createdBy}</td>
                  <td className="px-4 py-2 border">{row.date}</td>
                  <td className="px-4 py-2 border">{row.data}</td>
                  <td className="px-4 py-2 border">
                    <button className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
