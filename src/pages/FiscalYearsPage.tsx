import { fiscalRecords } from '../data';
import { formatCurrency } from '../utils/format';

const FiscalYearsPage = () => {
  return (
    <section className="page-content">
      <header>
        <h2>Fiscal Years</h2>
        <p>Track budgets, hiring plans, and attrition forecasts by fiscal year.</p>
      </header>
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
    </section>
  );
}

export default FiscalYearsPage;