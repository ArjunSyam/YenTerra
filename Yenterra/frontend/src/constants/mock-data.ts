import type {
  BalanceData,
  CategorySpend,
  MonthlyFlow,
  BudgetEntry,
  CurrentTime,
} from "@/lib/types";

export const BALANCE_DATA: BalanceData = {
  amount: 4230.5,
  currency: "USD",
};

export const CURRENT_TIME: CurrentTime = {
  currMonth: "July",
  nextMonth: "August",
  year: "2026",
};

export const CATEGORY_SPENDING: CategorySpend[] = [
  { name: "food", value: 400, budget: 600, fill: "var(--color-food)" },
  { name: "rent", value: 1200, budget: 1400, fill: "var(--color-rent)" },
  { name: "travel", value: 250, budget: 150, fill: "var(--color-travel)" },
  { name: "other", value: 180, budget: 480, fill: "var(--color-other)" },
];

export const MONTHLY_FLOW: MonthlyFlow[] = [
  { month: "Jan", income: 4000, expense: 2400 },
  { month: "Feb", income: 3000, expense: 1398 },
  { month: "Mar", income: 5000, expense: 3800 },
  { month: "Apr", income: 4780, expense: 3908 },
];

export const BUDGET_DATA: BudgetEntry[] = [
  { name: "Spent", value: 2030, fill: "var(--color-Spent)" },
  { name: "Remaining", value: 1970, fill: "var(--color-Remaining)" },
];
