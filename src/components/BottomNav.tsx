"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, User, BadgeIndianRupee, Bell } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const active = (path: string) =>
    pathname === path
      ? "text-purple-600"
      : "text-gray-400";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t h-16 flex justify-around items-center px-2 shadow-lg">

      <Link
        href="/"
        className={`flex flex-col items-center text-xs ${active("/")}`}
      >
        <Home size={22} />
        <span>Home</span>
      </Link>

      <Link
        href="/history"
        className={`flex flex-col items-center text-xs ${active("/results")}`}
      >
        <BadgeIndianRupee size={22} />
        <span>History</span>
      </Link>

      <Link
        href="/search"
        className={`flex flex-col items-center text-xs ${active("/search")}`}
      >
        <Search size={22} />
        <span>Search</span>
      </Link>

      <Link
        href="/profile"
        className={`flex flex-col items-center text-xs ${active("/profile")}`}
      >
        <User size={22} />
        <span>Profile</span>
      </Link>

      <Link
  href="/alerts"
  className={`flex flex-col items-center text-xs ${active("/alerts")}`}
>
  <Bell size={22} />
  <span>Alerts</span>
</Link>

    </div>
  );
}