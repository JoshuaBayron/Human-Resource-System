import { AppPage } from "../types";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: AppPage) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ activeTab, onSelectTab, collapsed, onToggleCollapse }: SidebarProps) {
  const navigate = useNavigate();

  const navItems: { label: string; path: string }[] = [
    { label: "Dashboard", path: "/" },
    { label: "Summaries", path: "/Summary" },
    { label: "Processes", path: "/Process" },
    { label: "Fiscal Years", path: "/FiscalYear" },
    { label: "Settings", path: "/Settings" },
  ];

  const handleClick = (item: { label: string; path: string }) => {
    onSelectTab(item.label as AppPage);
    navigate(item.path);
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {/* Logo or icon for collapsed state */}
        <div className="sidebar-logo">
          {!collapsed && (
            <>
              <h1>HR Suite</h1>
              <p>People operations command center</p>
            </>
          )}
        </div>
        <button className="collapse-btn" onClick={onToggleCollapse}>
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      <nav>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={activeTab === item.label ? "active" : ""}
            onClick={() => handleClick(item)}
            title={collapsed ? item.label : undefined} // Tooltip when collapsed
          >
            {collapsed ? item.label.charAt(0) : item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}