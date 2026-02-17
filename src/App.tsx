import { Routes, Route } from "react-router-dom";
import { DashboardPage, FiscalYearsPage, ProcessesPage, SettingsPage, SummariesPage } from "./utils/PageIndex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/FiscalYear" element={<FiscalYearsPage />} />
      <Route path="/Process" element={<ProcessesPage />} />
      <Route path="/Settings" element={<SettingsPage />} />
      <Route path="/Summary" element={<SummariesPage />} />
    </Routes>
  );
}
export default App;