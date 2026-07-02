import { PlusCircle, Wallet, Sparkles, Receipt } from "lucide-react";
import type { NavItem } from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  { title: "Add Transaction", icon: PlusCircle, disabled: true },
  { title: "Set Budgets", icon: Wallet, disabled: true },
  { title: "AI Report", icon: Sparkles, disabled: true },
  { title: "Track Expenses", icon: Receipt, disabled: true },
];
