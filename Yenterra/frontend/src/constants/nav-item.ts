import {
  PlusCircle,
  Wallet,
  Sparkles,
  Receipt,
  CalendarIcon,
  HomeIcon,
} from "lucide-react";
import type { NavItem } from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", icon: HomeIcon, disabled: false, screen: "dashboard" },
  { title: "Add Transaction", icon: PlusCircle, disabled: true },
  { title: "Set Budgets", icon: Wallet, disabled: true },
  { title: "AI Report", icon: Sparkles, disabled: true },
  { title: "Track Expenses", icon: Receipt, disabled: true },
  {
    title: "Daily Spending",
    icon: CalendarIcon,
    disabled: false,
    screen: "calendar",
  },
];
