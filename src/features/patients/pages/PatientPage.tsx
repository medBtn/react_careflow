import { useEffect, useState } from 'react'

import { PatientList } from '../components/PatientList'
import { PatientSearch } from '../components/PatientSearch'
import type { Patient } from '../types/Patient'
import { getPatients } from '../api/PatientApi'


export function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPatients() {
      try {
        const data = await getPatients()

        setPatients(data)
      } catch {
        setError('Unable to load patients.')
      } finally {
        setIsLoading(false)
      }
    }

    loadPatients()
  }, [])

  const filteredPatients = patients.filter((patient) => {
    const fullName =
      `${patient.firstName} ${patient.lastName}`.toLowerCase()

    return fullName.includes(searchTerm.toLowerCase())
  })

  return (
    <main className="min-w-0 flex-1 p-6 md:p-9">
      <div className="mb-7">
        <span className="text-[10px] font-bold tracking-widest text-blue-600">
          MANAGEMENT
        </span>

        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900">
          Patients
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Manage and view your patients.
        </p>
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-5 py-4">
          <h3 className="text-sm font-semibold text-slate-900">
            Patient directory
          </h3>

          <p className="mt-1 text-[11px] text-slate-400">
            {filteredPatients.length}{' '}
            {filteredPatients.length === 1
              ? 'patient'
              : 'patients'}{' '}
            found
          </p>
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