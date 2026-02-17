import { useMemo } from 'react';
import { processItems } from '../data';

const SummariesPage = () => {
  const processBreakdown = useMemo(() => {
    return processItems.reduce<Record<string, number>>((acc, item) => {
      acc[item.type] = (acc[item.type] ?? 0) + 1;
      return acc;
    }, {});
  }, []);

  return (
    <section className="page-content">
      <header>
        <h2>Summaries</h2>
        <p>Breakdown of workflow volume by process category.</p>
      </header>
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
    </section>
  );
}

export default SummariesPage;