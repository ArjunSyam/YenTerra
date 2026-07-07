import type {
  BalanceData,
  CategorySpend,
  MonthlyFlow,
  CurrentTime,
  DebtEntry,
  DailySpend,
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

export const DEBT_DATA: DebtEntry[] = [
  {
    id: "1",
    name: "Arjun",
    amount: 500,
    direction: "owed",
    reason: "Lunch split",
  },
  {
    id: "2",
    name: "Priya",
    amount: 1200,
    direction: "owe",
    reason: "Concert ticket",
  },
  {
    id: "3",
    name: "Rahul",
    amount: 300,
    direction: "owed",
    reason: "Cab fare",
  },
  {
    id: "4",
    name: "Sneha",
    amount: 800,
    direction: "owe",
    reason: "Groceries",
  },
  {
    id: "5",
    name: "Karthik",
    amount: 150,
    direction: "owed",
    reason: "Coffee",
  },
];

export const DAILY_SPENDING: DailySpend[] = [
  {
    date: "2026-07-01",
    totalSpent: 320,
    categories: [
      { name: "food", value: 120, budget: 500, fill: "var(--color-food)" },
      { name: "rent", value: 0, budget: 1200, fill: "var(--color-rent)" },
      { name: "travel", value: 150, budget: 400, fill: "var(--color-travel)" },
      { name: "other", value: 50, budget: 300, fill: "var(--color-other)" },
    ],
  },
  {
    date: "2026-07-02",
    totalSpent: 85,
    categories: [
      { name: "food", value: 60, budget: 500, fill: "var(--color-food)" },
      { name: "rent", value: 0, budget: 1200, fill: "var(--color-rent)" },
      { name: "travel", value: 0, budget: 400, fill: "var(--color-travel)" },
      { name: "other", value: 25, budget: 300, fill: "var(--color-other)" },
    ],
  },
  {
    date: "2026-07-03",
    totalSpent: 1400,
    categories: [
      { name: "food", value: 200, budget: 500, fill: "var(--color-food)" },
      { name: "rent", value: 1200, budget: 1200, fill: "var(--color-rent)" },
      { name: "travel", value: 0, budget: 400, fill: "var(--color-travel)" },
      { name: "other", value: 0, budget: 300, fill: "var(--color-other)" },
    ],
  },
];
