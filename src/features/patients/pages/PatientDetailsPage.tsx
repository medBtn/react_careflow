import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Patient } from "../types/Patient";
import { getPatientById } from "../api/PatientApi";

export function PatientDetailsPage() {
  const { patientId } = useParams();

  const [patient, setPatient] = useState<Patient | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPatient() {
      const numericPatientId = Number(patientId);

      if (!Number.isInteger(numericPatientId)) {
        setError("Patient not found");
        setIsLoading(false);
        return;
      }

      try {
        const data = await getPatientById(numericPatientId);
        setPatient(data);
      } catch {
        setError("patient not found !!");
      } finally {
        setIsLoading(false);
      }
    }
    loadPatient();
  }, [patientId]);

  if (isLoading) {
    return (
      <main className="min-w-0 flex-1 p-6 md:p-9">
        <div className="grid min-h-64 place-items-center rounded-xl border border-slate-200 bg-white text-xs text-slate-400">
          Loading patient...
        </div>
      </main>
    );
  }

  if (error || !patient) {
    return (
      <main className="min-w-0 flex-1 p-6 md:p-9">
        <Link
          to="/patients"
          className="mb-6 inline-flex text-xs font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to patients
        </Link>

        <div className="rounded-xl border border-red-100 bg-red-50 p-6">
          <h2 className="text-sm font-semibold text-red-800">
            Patient unavailable
          </h2>

          <p className="mt-1 text-xs text-red-600">
            {error ?? "The requested patient could not be found."}
          </p>
        </div>
      </main>
    );
  }

  const initials = `${patient.firstName.charAt(0)}${patient.lastName.charAt(0)}`;

  return (
    <main className="min-w-0 flex-1 p-6 md:p-9">
      <Link
        to="/patients"
        className="mb-6 inline-flex text-xs font-semibold text-blue-600 hover:text-blue-700"
      >
        ← Back to patients
      </Link>

      <div className="mb-7">
        <span className="text-[10px] font-bold tracking-widest text-blue-600">
          PATIENT PROFILE
        </span>

        <div className="mt-3 flex items-center gap-4">
          <div className="grid size-14 place-items-center rounded-full bg-blue-50 text-lg font-bold text-blue-600">
            {initials}
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              {patient.firstName} {patient.lastName}
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Patient ID: #{patient.id}
            </p>
          </div>
        </div>
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-5 py-4">
          <h3 className="text-sm font-semibold text-slate-900">
            Patient information
          </h3>

          <p className="mt-1 text-[11px] text-slate-400">
            Basic patient information
          </p>
        </div>

        <div className="grid gap-px bg-slate-100 sm:grid-cols-2">
          <InfoItem label="First name" value={patient.firstName} />

          <InfoItem label="Last name" value={patient.lastName} />

          <InfoItem label="Age" value={`${patient.age} years`} />

          <InfoItem label="Phone" value={patient.phone} />

          <InfoItem label="Status" value={patient.status} />
        </div>
      </section>
    </main>
  );
}

interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="bg-white px-5 py-4">
      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </span>

      <span className="mt-1 block text-sm font-medium capitalize text-slate-900">
        {value}
      </span>
    </div>
  );
}
