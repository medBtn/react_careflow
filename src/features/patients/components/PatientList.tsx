import type { Patient } from "../types/Patient";
import PatientCard from "./PatientCard";

interface PatientListProps {
    patients: Patient[];
}

function PatientList({patients}: PatientListProps) {
  return (
    <div>
        {
            patients.map((patient)=>{
                return <PatientCard patient = {patient}/>
            })
        }
    </div>
  )
}

export default PatientList