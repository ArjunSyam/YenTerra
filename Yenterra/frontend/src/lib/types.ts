export type Theme = "light" | "dark";

export interface CurrentTime {
  currMonth: string;
  nextMonth: string;
  year: string;
}

export interface NavItem {
  title: string;
  icon: React.ElementType;
  disabled: boolean;
  screen?: Screen;
}

export interface CategorySpend {
  name: string;
  value: number;
  budget: number;
  fill: string;
}

export interface MonthlyFlow {
  month: string;
  income: number;
  expense: number;
}

export interface BalanceData {
  amount: number;
  currency: string;
}

export type DebtDirection = "owe" | "owed";

export interface DebtEntry {
  id: string;
  name: string;
  amount: number;
  direction: DebtDirection; // "owe" = I owe them, "owed" = they owe me
  reason: string;
}

export interface DailySpend {
  date: string; // "YYYY-MM-DD"
  totalSpent: number;
  categories: CategorySpend[];
}

export type Screen = "dashboard" | "calendar";
