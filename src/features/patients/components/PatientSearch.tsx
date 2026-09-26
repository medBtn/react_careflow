import { Search } from "lucide-react";

interface PatientSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function PatientSearch({ value, onChange }: PatientSearchProps) {
  return (
    <div className="border-b border-slate-100 p-4">
      <div className="flex max-w-sm items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 transition focus-within:border-blue-500 focus-within:ring-3 focus-within:ring-blue-500/10">
        <Search className="size-4" />

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search patients..."
          className="w-full border-0 bg-transparent text-xs text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}
