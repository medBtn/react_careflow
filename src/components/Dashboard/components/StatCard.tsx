interface StatCardProps {
  label: string
  value: number
  description: string
  icon: React.ReactNode
}

function StatCard({
  label,
  value,
  description,
  icon,
}: StatCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
        <span>{label}</span>

        <span className="grid size-8 place-items-center rounded-lg bg-blue-50 text-blue-600">
          {icon}
        </span>
      </div>

      <strong className="block text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </strong>

      <span className="mt-1 block text-[11px] text-slate-400">
        {description}
      </span>
    </article>
  )
}

export { StatCard }