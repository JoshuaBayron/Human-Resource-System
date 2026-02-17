import { useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import FiscalYearsPage from './pages/FiscalYearsPage';
import ProcessesPage from './pages/ProcessesPage';
import SettingsPage from './pages/SettingsPage';
import SummariesPage from './pages/SummariesPage';
import { AppPage } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppPage>('Dashboard');

  const activePage = useMemo(() => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Summaries':
        return <SummariesPage />;
      case 'Processes':
        return <ProcessesPage />;
      case 'Fiscal Years':
        return <FiscalYearsPage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  }, [activeTab]);

  return (
    <div className="layout">
      <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />
      <main>{activePage}</main>
    </div>
  );
}