export function Dashboard() {
  return (
    <main className="dashboard">
      <div className="page-header">
        <div>
          <span className="eyebrow">OVERVIEW</span>

          <h2>Dashboard</h2>

          <p>
            Welcome back, Mohamed. Here's what's happening today.
          </p>
        </div>

        <button className="primary-button">
          + New appointment
        </button>
      </div>

      <section className="stats-grid">
        <article className="stat-card">
          <div className="stat-card-header">
            <span>Total patients</span>
            <span className="stat-icon">♙</span>
          </div>

          <strong>1,248</strong>

          <span className="stat-description">
            Patients registered
          </span>
        </article>

        <article className="stat-card">
          <div className="stat-card-header">
            <span>Today's appointments</span>
            <span className="stat-icon">◷</span>
          </div>

          <strong>24</strong>

          <span className="stat-description">
            Scheduled for today
          </span>
        </article>

        <article className="stat-card">
          <div className="stat-card-header">
            <span>Waiting</span>
            <span className="stat-icon">◌</span>
          </div>

          <strong>7</strong>

          <span className="stat-description">
            Patients in queue
          </span>
        </article>
      </section>

      <section className="content-card">
        <div className="content-card-header">
          <div>
            <h3>Recent patients</h3>
            <p>Recently registered patients.</p>
          </div>

          <button className="secondary-button">
            View all
          </button>
        </div>

        <div className="empty-state">
          <div className="empty-icon">♙</div>

          <h4>No patients yet</h4>

          <p>
            Patient records will appear here once we connect
            our patient data.
          </p>
        </div>
      </section>
    </main>
  )
}