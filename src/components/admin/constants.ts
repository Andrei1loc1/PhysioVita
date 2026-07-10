import {
  LayoutDashboard,
  CalendarDays,
  Users,
  BarChart3,
} from "lucide-react";

export const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: CalendarDays, label: "Programări", id: "appointments" },
  { icon: Users, label: "Pacienți", id: "patients" },
  { icon: BarChart3, label: "Statistici", id: "stats" },
];

export const STATUS_MAP: Record<string, { label: string; dot: string; bg: string; text: string }> = {
  confirmed: { label: "Confirmat", dot: "bg-emerald-400", bg: "bg-emerald-50", text: "text-emerald-700" },
  pending: { label: "În așteptare", dot: "bg-amber-400", bg: "bg-amber-50", text: "text-amber-700" },
  done: { label: "Finalizat", dot: "bg-gray-400", bg: "bg-gray-50", text: "text-gray-500" },
};