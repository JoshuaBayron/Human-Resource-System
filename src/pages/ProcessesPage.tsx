import { processItems } from '../data';

const ProcessesPage = () => {
  return (
    <section className="page-content">
      <header>
        <h2>Processes</h2>
        <p>Manage onboarding, offboarding, promotions, and department transfers.</p>
      </header>
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
  );
}

export default ProcessesPage;