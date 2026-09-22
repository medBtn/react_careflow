export function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-icon">😀</div>

        <div>
          <h1>CareFlow</h1>
          <span>Patient Management</span>
        </div>
      </div>

      <div className="header-actions">
        <button className="notification-button" aria-label="Notifications">
          🔔
        </button>

        <div className="profile">
          <div className="avatar">M</div>

          <div className="profile-info">
            <strong>Mohamed</strong>
            <span>Doctor</span>
          </div>

          <span className="chevron">⌄</span>
        </div>
      </div>
    </header>
  )
}