import type { Patient } from '../types/Patient'
import { PatientCard } from './PatientCard'

interface PatientListProps {
  patients: Patient[]
}

export function PatientList({ patients }: PatientListProps) {
  return (
    <div>
      {patients.map((patient) => (
        <PatientCard
          key={patient.id}
          patient={patient}
        />
      ))}
    </div>
  )
}