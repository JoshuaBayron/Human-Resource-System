import StatCard from '../components/StatCard';
import { fiscalRecords, processItems } from '../data';
import { formatCurrency } from '../utils/format';

export default function DashboardPage() {
  const inProgress = processItems.filter((item) => item.status === 'In Progress').length;
  const needsReview = processItems.filter((item) => item.status === 'Needs Review').length;
  const completed = processItems.filter((item) => item.status === 'Completed').length;

  return (
    <section className="page-content">
      <header>
        <h2>Dashboard</h2>
        <p>High-level KPIs for HR workflow health and staffing budgets.</p>
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
    </section>
  );
}
