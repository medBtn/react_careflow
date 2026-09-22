export function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-label">MAIN</span>

          <ul>
            <li className="nav-item active">
              <span className="nav-icon">▣</span>
              <span>Dashboard</span>
            </li>

            <li className="nav-item">
              <span className="nav-icon">♙</span>
              <span>Patients</span>
            </li>

            <li className="nav-item">
              <span className="nav-icon">◷</span>
              <span>Appointments</span>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <span className="nav-label">MANAGEMENT</span>

          <ul>
            <li className="nav-item">
              <span className="nav-icon">⚙</span>
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="help-icon">?</div>

        <div>
          <strong>Need help?</strong>
          <span>Contact support</span>
        </div>
      </div>
    </aside>
  )
}