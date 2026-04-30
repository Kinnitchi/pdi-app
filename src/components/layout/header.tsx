import { Bell } from "lucide-react";

interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-white">
      <div>
        <h1 className="text-lg font-semibold text-zinc-900">{title}</h1>
        {description && (
          <p className="text-sm text-zinc-500 mt-0.5">{description}</p>
        )}
      </div>
      <button className="relative p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 transition-colors">
        <Bell size={18} />
      </button>
    </header>
  );
}
