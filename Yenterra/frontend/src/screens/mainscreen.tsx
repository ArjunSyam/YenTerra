import { BalanceCard } from "@/components/dashboard/balance-card";
import { SpendingSummary } from "@/components/dashboard/spending-summary";
import { CashflowChart } from "@/components/dashboard/cashflow-chart";
import { BudgetPieChart } from "@/components/dashboard/budget-pie-chart";
import { BudgetVsSpending } from "@/components/dashboard/budget-vs-spending";

import {
  BALANCE_DATA,
  CATEGORY_SPENDING,
  MONTHLY_FLOW,
  BUDGET_DATA,
  CURRENT_TIME,
} from "@/constants/mock-data";

export function MainScreen() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <BalanceCard data={BALANCE_DATA} />
      <SpendingSummary data={CATEGORY_SPENDING} time={CURRENT_TIME} />
      <BudgetVsSpending Chartdata={CATEGORY_SPENDING} />
      <div className="flex flex-col lg:flex-row gap-6">
        <CashflowChart data={MONTHLY_FLOW} />
        <BudgetPieChart data={BUDGET_DATA} />
      </div>
    </div>
  );
}
