import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { AppPage } from "./types";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<AppPage>("Dashboard");

  return (
    <div className="layout">
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />
      <main>{children}</main>
    </div>
  );
}
