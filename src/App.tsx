import { useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import { fiscalRecords, processItems } from './data';

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const inProgress = processItems.filter((item) => item.status === 'In Progress').length;
  const needsReview = processItems.filter((item) => item.status === 'Needs Review').length;
  const completed = processItems.filter((item) => item.status === 'Completed').length;

  const processBreakdown = useMemo(() => {
    return processItems.reduce<Record<string, number>>((acc, item) => {
      acc[item.type] = (acc[item.type] ?? 0) + 1;
      return acc;
    }, {});
  }, []);

  return (
    <div className="layout">
      <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />
      <main>
        <header>
          <h2>{activeTab}</h2>
          <p>
            Manage onboarding, offboarding, promotions, department transfers, and fiscal-year
            workforce planning in one place.
          </p>
        </header>

        <section className="stats-grid">
          <StatCard label="In Progress" value={String(inProgress)} detail="Active workflows" />
          <StatCard label="Needs Review" value={String(needsReview)} detail="Pending approvals" />
          <StatCard label="Completed" value={String(completed)} detail="Finished this month" />
          <StatCard
            label="Current FY Budget"
            value={formatCurrency(fiscalRecords[0].budget)}
            detail="People operations budget"
          />
        </section>

        <section className="panel-group">
          <article className="panel">
            <h3>Process Summaries</h3>
            <ul>
              {Object.entries(processBreakdown).map(([process, count]) => (
                <li key={process}>
                  <span>{process}</span>
                  <strong>{count}</strong>
                </li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <h3>Workflow Queue</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Employee/Program</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Due</th>
                </tr>
              </thead>
              <tbody>
                {processItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.employee}</td>
                    <td>{item.type}</td>
                    <td>{item.status}</td>
                    <td>{item.owner}</td>
                    <td>{item.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>

        <section className="panel-group">
          <article className="panel">
            <h3>Fiscal Year Outlook</h3>
            <div className="fiscal-cards">
              {fiscalRecords.map((record) => (
                <section key={record.year} className="fiscal-card">
                  <h4>{record.year}</h4>
                  <p>Budget: {formatCurrency(record.budget)}</p>
                  <p>Headcount Target: {record.headcountTarget}</p>
                  <p>Recruitment Plan: {record.recruitmentPlan}</p>
                  <p>Attrition Forecast: {record.attritionForecast}%</p>
                </section>
              ))}
            </div>
          </article>

          <article className="panel">
            <h3>Settings</h3>
            <form className="settings-form">
              <label>
                Approval policy
                <select defaultValue="manager-hr">
                  <option value="manager-hr">Manager + HRBP</option>
                  <option value="hr-only">HRBP only</option>
                  <option value="executive">Executive review</option>
                </select>
              </label>

              <label>
                Notification cadence
                <select defaultValue="daily">
                  <option value="realtime">Real-time</option>
                  <option value="daily">Daily digest</option>
                  <option value="weekly">Weekly digest</option>
                </select>
              </label>

              <label>
                Default onboarding owner
                <input type="text" defaultValue="Talent Operations" />
              </label>
              <button type="button">Save configuration</button>
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}
