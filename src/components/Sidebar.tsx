import { AppPage } from "../types";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: AppPage) => void;
  collapsed?: boolean;
}

export default function Sidebar({ activeTab, onSelectTab, collapsed }: SidebarProps) {
  const navigate = useNavigate();

  const navItems: { label: string; path: string }[] = [
    { label: "Dashboard", path: "/" },
    { label: "Summaries", path: "/Summary" },
    { label: "Processes", path: "/Process" },
    { label: "Fiscal Years", path: "/FiscalYear" },
    { label: "Settings", path: "/Settings" },
  ];

  const handleClick = (item: { label: string; path: string }) => {
    onSelectTab(item.label as AppPage); // update active tab highlight
    navigate(item.path); // navigate to the route
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {!collapsed && (
        <>
          <h1>HR Suite</h1>
          <p>People operations command center</p>
        </>
      )}
      <nav>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={activeTab === item.label ? "active" : ""}
            onClick={() => handleClick(item)}
          >
            {collapsed ? item.label.charAt(0) : item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
