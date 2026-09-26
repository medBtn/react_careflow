import { Link } from "react-router";
import type { Patient } from "../types/Patient";

interface PatientCardProps {
  patient: Patient;
}

export function PatientCard({ patient }: PatientCardProps) {
  const initials = `${patient.firstName.charAt(0)}${patient.lastName.charAt(0)}`;

  return (
    <Link
      to={`/patients/${patient.id}`}
      className="block transition hover:bg-slate-50"
    >
      <article className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 last:border-0">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="mb-1 text-[13px] font-semibold text-slate-900">
            {patient.firstName} {patient.lastName}
          </h4>

          <span className="text-[11px] text-slate-400">
            {patient.age} years old · {patient.phone}
          </span>
        </div>

        <span
          className={
            patient.status === "active"
              ? "rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold capitalize text-emerald-700"
              : "rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold capitalize text-slate-500"
          }
        >
          {patient.status}
        </span>
      </article>
    </Link>
  );
}
