import { AppPage } from '../types';

interface SidebarProps {
  activeTab: AppPage;
  onSelectTab: (tab: AppPage) => void;
}

const navItems: AppPage[] = ['Dashboard', 'Summaries', 'Processes', 'Fiscal Years', 'Settings'];

export default function Sidebar({ activeTab, onSelectTab }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h1>HR Suite</h1>
      <p>People operations command center</p>
      <nav>
        {navItems.map((item) => (
          <button
            key={item}
            type="button"
            className={activeTab === item ? 'active' : ''}
            onClick={() => onSelectTab(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
