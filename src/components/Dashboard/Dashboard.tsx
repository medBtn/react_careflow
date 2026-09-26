import PatientList from "../../features/patients/components/PatientList";
import { useEffect, useState } from "react";
import type { Patient } from "../../features/patients/types/Patient";
import { getPatients } from "../../features/patients/data/Patients";

export function Dashboard() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredPatients = patients.filter((patient) => {
    return (
      patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalPatients = patients.length;
  const activePatients = patients.filter(
    (patient) => patient.status === "active",
  ).length;

  const inactivePatients = patients.filter(
    (patient) => patient.status === "inactive",
  ).length;

  useEffect(() => {
    getPatients()
      .then((result) => {
        setPatients(result);
      })
      .catch(() => {
        setError("unable to solve this error ");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

          <strong>{totalPatients}</strong>

          <span className="stat-description">Patients registered</span>
        </article>

        <article className="stat-card">
          <div className="stat-card-header">
            <span>Active patients</span>
            <span className="stat-icon">✓</span>
          </div>

          <strong>{activePatients}</strong>

          <span className="stat-description">Currently active</span>
        </article>

        <article className="stat-card">
          <div className="stat-card-header">
            <span>Inactive patients</span>
            <span className="stat-icon">○</span>
          </div>

          <strong>{inactivePatients}</strong>

          <span className="stat-description">Not currently active</span>
        </article>
      </section>

      <section className="content-card">
        <div className="content-card-header">
          <div>
            <h3>Recent patients</h3>

            <p>
              {filteredPatients.length}{" "}
              {filteredPatients.length === 1 ? "patient" : "patients"} found
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div className="patient-toolbar">
              <div className="search-box">
                <span>⌕</span>
                <input
                  type="text"
                  placeholder="Search patients..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>
            <button className="secondary-button">View all</button>
          </div>
        </div>
        {isLoading ? (
          <div className="loading-state">loading patients ....</div>
        ) : error ? (
          <div className="error-state">{error}</div>
        ) : (
          <PatientList patients={filteredPatients} />
        )}
      </section>
    </main>
  );
}
