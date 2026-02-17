import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { AppPage } from "./types";
import "./styles.css";
import { useState } from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false); // <-- collapse state
  const location = useLocation();

  const pathToTab: Record<string, AppPage> = {
    "/": "Dashboard",
    "/FiscalYear": "FiscalYears",
    "/Process": "Processes",
    "/Settings": "Settings",
    "/Summary": "Summaries",
  };

  const activeTab = pathToTab[location.pathname] || "Dashboard";

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar-container">
        <Sidebar
          activeTab={activeTab}
          onSelectTab={(tab: AppPage) => console.log("Selected tab:", tab)}
          collapsed={collapsed} // pass down
        />
        {/* Collapse toggle button */}
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      {/* Main content */}
      <main>
        {children}
        <Outlet />
      </main>
    </div>
  );
}
