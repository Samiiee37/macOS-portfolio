import { useState } from "react";
import NewDataSourceModal from "./NewDataSourceModal";
import NewConnectorModal from "./NewConnectorModal";


interface TableRow {
  tool: string;
  scope: string;
  createdBy: string;
  date: string;
  data: string;
}

const dataSources: TableRow[] = [
  { tool: "Slack", scope: "Read Only", createdBy: "Rahul", date: "28-08-2025", data: "1.2k" },
  { tool: "Slack", scope: "Read Only", createdBy: "Rahul", date: "28-08-2025", data: "1.2k" },
  { tool: "Slack", scope: "Read Only", createdBy: "Rahul", date: "28-08-2025", data: "1.2k" },
  { tool: "Slack", scope: "Read Only", createdBy: "Rahul", date: "28-08-2025", data: "1.2k" },
];

const connectors: TableRow[] = [
  { tool: "Webhook", scope: "Read & Write", createdBy: "Rahul", date: "29-08-2025", data: "900" },
  { tool: "Zapier", scope: "Read Only", createdBy: "Rahul", date: "29-08-2025", data: "450" },
  { tool: "Custom API", scope: "Admin Access", createdBy: "Rahul", date: "29-08-2025", data: "120" },
];

export default function Maincontent() {
  const [activeTab, setActiveTab] = useState<"dataSource" | "connectors">("dataSource");
  const [search, setSearch] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const tableData = activeTab === "dataSource" ? dataSources : connectors;

  const filteredData = tableData.filter((item) =>
    item.tool.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Data Source</h1>
      <p className="text-gray-600 mb-4">
        Use data sources for insights, and connectors for real-time actions.
      </p>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 -mb-px font-medium ${
            activeTab === "dataSource"
              ? "border-b-2 border-orange-500 text-orange-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("dataSource")}
        >
          Data Source
        </button>
        <button
          className={`px-4 py-2 -mb-px font-medium ${
            activeTab === "connectors"
              ? "border-b-2 border-orange-500 text-orange-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("connectors")}
        >
          Connectors
        </button>
      </div>

      {/* Search + Buttons */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-64"
        />
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded text-gray-700">Filter</button>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded"
            onClick={() => setShowModal(true)}
          >
            + New {activeTab === "dataSource" ? "Data Source" : "Connector"}
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Tool</th>
            <th className="px-4 py-2 text-left">Scope</th>
            <th className="px-4 py-2 text-left">Created by</th>
            <th className="px-4 py-2 text-left">Date Created</th>
            <th className="px-4 py-2 text-left">Data Recorded</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{row.tool}</td>
              <td className="px-4 py-2">{row.scope}</td>
              <td className="px-4 py-2">{row.createdBy}</td>
              <td className="px-4 py-2">{row.date}</td>
              <td className="px-4 py-2">{row.data}</td>
              <td className="px-4 py-2">
                <button className="px-3 py-1 bg-orange-500 text-white rounded">
                  View
                </button>
              </td>
            </tr>
          ))}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-500">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modals */}
      <NewDataSourceModal
        isOpen={showModal && activeTab === "dataSource"}
        onClose={() => setShowModal(false)}
      />
      <NewConnectorModal
        isOpen={showModal && activeTab === "connectors"}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
