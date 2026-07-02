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

export interface BudgetEntry {
  name: string;
  value: number;
  fill: string;
}

export interface BalanceData {
  amount: number;
  currency: string;
}
