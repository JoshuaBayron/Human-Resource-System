import { AppPage } from "../types";

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: AppPage) => void;
  collapsed?: boolean;
}

export default function Sidebar({ activeTab, onSelectTab, collapsed }: SidebarProps) {
  const navItems = ["Dashboard", "Summaries", "Processes", "Fiscal Years", "Settings"];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {!collapsed && (
        <>
          <h1>HR Suite</h1>
          <p>People operations command center</p>
        </>
      )}
      <nav>
        {navItems.map((item: any) => (
          <button
            key={item}
            className={activeTab === item ? "active" : ""}
            onClick={() => onSelectTab(item)}
          >
            {collapsed ? item.charAt(0) : item} {/* show only first letter when collapsed */}
          </button>
        ))}
      </nav>
    </aside>
  );
}
