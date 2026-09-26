import { useEffect, useState } from 'react'

import { PatientList } from '../../../features/patients/components/PatientList'
import { PatientSearch } from '../../../features/patients/components/PatientSearch'
import { getPatients } from '../../../features/patients/data/patients'
import type { Patient } from '../../../features/patients/types/Patient'
import { StatCard } from './StatCard'
import { Check, Circle } from 'lucide-react'

export function Dashboard() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getPatients()
      .then((data) => {
        setPatients(data)
      })
      .catch(() => {
        setError('Unable to load patients.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const filteredPatients = patients.filter((patient) => {
    const fullName =
      `${patient.firstName} ${patient.lastName}`.toLowerCase()

    return fullName.includes(searchTerm.toLowerCase())
  })

  const totalPatients = patients.length

  const activePatients = patients.filter(
    (patient) => patient.status === 'active',
  ).length

  const inactivePatients = patients.filter(
    (patient) => patient.status === 'inactive',
  ).length

  return (
    <main className="min-w-0 flex-1 p-6 md:p-9">
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-blue-600">
            OVERVIEW
          </span>

          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900">
            Dashboard
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Welcome back, Mohamed. Here's what's happening today.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          + New appointment
        </button>
      </div>

      <section className="mb-6 grid gap-4 md:grid-cols-3">
        <StatCard 
          label="Total patients"
          value={totalPatients}
          description="Patients registered"
          icon={<Check className="size-4" />}
        />

        <StatCard
          label="Active patients"
          value={activePatients}
          description="Currently active"
          icon={<Check className="size-4" />}
        />

        <StatCard
          label="Inactive patients"
          value={inactivePatients}
          description="Not currently active"
          icon={<Circle className="size-4" />}
        />
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Recent patients
            </h3>

            <p className="mt-1 text-[11px] text-slate-400">
              {filteredPatients.length}{' '}
              {filteredPatients.length === 1
                ? 'patient'
                : 'patients'}{' '}
              found
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-100"
          >
            View all
          </button>
        </div>

        <PatientSearch
          value={searchTerm}
          onChange={setSearchTerm}
        />

        {isLoading ? (
          <div className="grid min-h-45 place-items-center text-xs text-slate-400">
            Loading patients...
          </div>
        ) : error ? (
          <div className="grid min-h-45 place-items-center text-xs text-red-600">
            {error}
          </div>
        ) : (
          <PatientList patients={filteredPatients} />
        )}
      </section>
    </main>
  )
}

