import { FaGithub, FaDatabase, FaBook, FaGift, FaCog, FaKey, FaRegQuestionCircle } from "react-icons/fa";
import { MdDashboard, MdIntegrationInstructions, MdSubscriptions } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      {/* Top section */}
      <div>
        {/* User Info */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          <FaGithub className="text-2xl" />
          <div>
            <p className="font-medium">vishalraina340</p>
            <p className="text-xs text-gray-500">Change Organization</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-4">
          <ul className="space-y-1">
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FaDatabase /> Repositories
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <MdDashboard /> Dashboard
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <MdIntegrationInstructions /> Integrations
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer bg-blue-50 text-blue-600">
              <FaDatabase /> Data Source
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <GiGraduateCap /> Learnings
            </li>

            {/* Organization Settings */}
            <li className="px-4 py-2 text-gray-500 uppercase text-xs mt-4">Organization Settings</li>
            <li className="px-6 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FaCog /> Configuration
            </li>
            <li className="px-6 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FaKey /> API Keys
            </li>

            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <MdSubscriptions /> Subscription
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FaGift /> Refer and Earn
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FaBook /> Docs
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
              <FaRegQuestionCircle /> Support
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t px-4 py-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-sm">VR</span>
        </div>
        <div>
          <p className="font-medium text-sm">vishalraina340</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </div>
    </div>
  );
}
