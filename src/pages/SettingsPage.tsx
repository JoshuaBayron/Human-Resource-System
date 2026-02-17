const SettingsPage = () => {
  return (
    <section className="page-content">
      <header>
        <h2>Settings</h2>
        <p>Configure approvals, notifications, and process ownership defaults.</p>
      </header>
      <article className="panel">
        <h3>Workflow Settings</h3>
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
  );
}

export default SettingsPage;