import { CalendarDays, LayoutDashboard, Settings, Users } from "lucide-react";
import { NavLink } from "react-router";

export function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-slate-200 bg-white p-4 md:flex">
      <nav className="flex-1">
        <div className="mb-8">
          <span className="mb-2 block px-3 text-[10px] font-bold tracking-widest text-slate-400">
            MAIN
          </span>

          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <LayoutDashboard className="size-4" />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/patients"
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <Users className="size-4" />
                Patients
              </NavLink>
            </li>

            <li>
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <CalendarDays className="size-4" />
                Appointments
              </button>
            </li>
          </ul>
        </div>

        <div>
          <span className="mb-2 block px-3 text-[10px] font-bold tracking-widest text-slate-400">
            MANAGEMENT
          </span>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <Settings className="size-4" /> Settings
          </button>
        </div>
      </nav>

      <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <div className="grid size-8 place-items-center rounded-lg bg-blue-50 font-bold text-blue-600">
          ?
        </div>

        <div>
          <strong className="block text-[11px] text-slate-800">
            Need help?
          </strong>

          <span className="text-[10px] text-slate-400">Contact support</span>
        </div>
      </div>
    </aside>
  );
}
