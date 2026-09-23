import PatientList from "../../features/patients/components/PatientList";
import type { Patient } from "../../features/patients/types/Patient";
import { useState } from "react";

const patients: Patient[] = [
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Benali",
    age: 34,
    phone: "0550 12 34 56",
    status: "active",
  },
  {
    id: 2,
    firstName: "Amine",
    lastName: "Mansouri",
    age: 42,
    phone: "0661 45 67 89",
    status: "active",
  },
  {
    id: 3,
    firstName: "Nadia",
    lastName: "Kaci",
    age: 29,
    phone: "0770 98 76 54",
    status: "inactive",
  },
];

export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) => {
    return (
      patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <main className="dashboard">
      <div className="page-header">
        <div>
          <span className="eyebrow">OVERVIEW</span>

          <h2>Dashboard</h2>

          <p>Welcome back, Mohamed. Here's what's happening today.</p>
        </div>

        <button className="primary-button">+ New appointment</button>
      </div>

      <section className="stats-grid">
        <article className="stat-card">
          <div className="stat-card-header">
            <span>Total patients</span>
            <span className="stat-icon">♙</span>
          </div>

          <strong>1,248</strong>

          <span className="stat-description">Patients registered</span>
        </article>

        <article className="stat-card">
          <div className="stat-card-header">
            <span>Today's appointments</span>
            <span className="stat-icon">◷</span>
          </div>

          <strong>24</strong>

          <span className="stat-description">Scheduled for today</span>
        </article>

        <article className="stat-card">
          <div className="stat-card-header">
            <span>Waiting</span>
            <span className="stat-icon">◌</span>
          </div>

          <strong>7</strong>

          <span className="stat-description">Patients in queue</span>
        </article>
      </section>

      <section className="content-card">
        <div className="content-card-header">
          <div>
            <h3>Recent patients</h3>
            <p>Recently registered patients.</p>
          </div>
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <button className="secondary-button">View all</button>
        </div>
        <PatientList patients={filteredPatients} />
      </section>
    </main>
  );
}
