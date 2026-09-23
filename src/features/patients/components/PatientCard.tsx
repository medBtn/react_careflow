import type { Patient } from "../types/Patient";

interface PatientCardProps {
  patient: Patient;
}

function PatientCard({ patient }: PatientCardProps) {
  return (
    <article className="patient-card">
      <div className="patient-avatar">
        {patient.firstName.charAt(0)}
        {patient.lastName.charAt(0)}
      </div>
      <div className="patient-info">
        <h4>
          {patient.firstName} {patient.lastName}
        </h4>
        <span>
          {patient.age} years old · {patient.phone}
        </span>
      </div>
      <span className={`patient-status ${patient.status}`}>
        {patient.status}
      </span>
    </article>
  );
}

export default PatientCard;
