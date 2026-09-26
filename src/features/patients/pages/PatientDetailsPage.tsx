import { Link, useParams } from 'react-router'

export function PatientDetailsPage() {
  const { patientId } = useParams()

  return (
    <main className="min-w-0 flex-1 p-6 md:p-9">
      <Link
        to="/patients"
        className="mb-6 inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700"
      >
        ← Back to patients
      </Link>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <span className="text-[10px] font-bold tracking-widest text-blue-600">
          PATIENT
        </span>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
          Patient #{patientId}
        </h2>

        <p className="mt-2 text-xs text-slate-500">
          Patient details will be loaded here.
        </p>
      </section>
    </main>
  )
}