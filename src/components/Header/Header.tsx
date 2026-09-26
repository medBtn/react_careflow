import { Bell, Plus } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-slate-200 bg-white px-8">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl bg-blue-600 text-xl font-bold text-white">
          <Plus className="size-4" />
        </div>

        <div>
          <h1 className="m-0 text-[17px] font-semibold tracking-tight text-slate-900">
            CareFlow
          </h1>

          <span className="text-[11px] text-slate-400">Patient Management</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button
          type="button"
          aria-label="Notifications"
          className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white transition hover:bg-slate-50"
        >
          <Bell className="size-4" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="grid size-10 place-items-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
            M
          </div>

          <div className="hidden flex-col gap-0.5 sm:flex">
            <strong className="text-[13px] text-slate-900">Mohamed</strong>

            <span className="text-[11px] text-slate-400">Doctor</span>
          </div>

          <span className="ml-1 text-slate-400">⌄</span>
        </div>
      </div>
    </header>
  );
}
