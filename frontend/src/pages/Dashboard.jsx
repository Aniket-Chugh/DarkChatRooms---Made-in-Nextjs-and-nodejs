import React, { useState } from 'react';
import { useAuth } from '../GlobalContext/AuthContext';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  // Clean username logic
  const username = user || "Guest_User";

  if (!user) return <div className="h-screen flex items-center justify-center bg-[#161616] text-white">401: Unauthorized</div>;

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex font-sans text-[#161616]">
      {/* Sidebar */}
      <nav className="w-64 bg-[#161616] text-white flex flex-col shrink-0">
        <div className="p-4 border-b border-[#393939] font-bold tracking-tighter italic">IBM_OS</div>
        <div className="flex-1 p-2 space-y-1">
          <NavItem label="Console" active />
          <NavItem label="Security" />
          <NavItem label="Network" />
        </div>
      </nav>

      <main className="flex-1 flex flex-col">
        {/* Header - Simple Profile System */}
        <header className="bg-white h-12 flex items-center justify-end px-6 border-b border-[#e0e0e0] relative">

          <div
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 cursor-pointer hover:bg-[#e5f0ff] h-full px-4 transition-colors group"
          >
            {/* Status Dot */}
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>

            {/* Username Display */}
            <span className="text-sm font-bold tracking-tight uppercase">{username}</span>

            {/* Minimal Avatar */}
            <div className="w-full h-7 bg-[#161616] text-[10px] flex items-center justify-center font-mono border border-gray-700 group-hover:border-[#0f62fe]">
              {username.charAt(0).toUpperCase()}
            </div>
          </div>

     
          {showProfile && (
            <div className="absolute top-12 right-0 w-64 bg-white border border-[#e0e0e0] shadow-xl z-50 animate-in fade-in slide-in-from-top-1">
              <div className="p-4 border-b border-[#f4f4f4] bg-[#f4f4f4]">
                <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">User Entity ID</p>
                <p className="text-xs font-mono break-all text-[#0f62fe]">UUID_{Math.random().toString(36).substr(2, 9)}</p>
              </div>

              <div className="p-2">
                <button className="w-full text-left p-2 text-sm hover:bg-[#e5f0ff] transition-colors">Account Settings</button>
                <button className="w-full text-left p-2 text-sm hover:bg-[#e5f0ff] transition-colors">Usage Logs</button>
                <button
                  onClick={logout}
                  className="w-full text-left p-2 text-sm text-[#da1e28] font-bold hover:bg-[#fff0f0] mt-2 border-t border-[#f4f4f4]"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </header>


        <div className="p-10">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">Authenticated Session</h2>
          <h1 className="text-4xl font-extralight tracking-tighter">Root / <span className="font-bold">{username}</span></h1>

          <div className="mt-10 p-6 border-l-4 border-[#0f62fe] bg-white shadow-sm max-w-2xl">
             <p className="text-sm leading-relaxed text-gray-600 italic">
               "Welcome to the central node. All actions are logged and encrypted using enterprise-grade protocols."
             </p>
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ label, active }) => (
  <div className={`p-3 text-sm cursor-pointer transition-all ${active ? 'bg-[#0f62fe] text-white font-bold' : 'hover:bg-[#353535] text-gray-400'}`}>
    {label}
  </div>
);
