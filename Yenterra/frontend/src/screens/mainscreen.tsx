import { BalanceCard } from "@/components/dashboard/balance-card";
import { SpendingSummary } from "@/components/dashboard/spending-summary";
import { CashflowChart } from "@/components/dashboard/cashflow-chart";
import { BudgetVsSpending } from "@/components/dashboard/budget-vs-spending";
import { DebtTable } from "@/components/dashboard/debt-table";

import {
  BALANCE_DATA,
  CATEGORY_SPENDING,
  MONTHLY_FLOW,
  CURRENT_TIME,
  DEBT_DATA,
} from "@/constants/mock-data";

export function MainScreen() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <BalanceCard data={BALANCE_DATA} />
      <div className="flex flex-col lg:flex-row gap-6">
        <SpendingSummary data={CATEGORY_SPENDING} time={CURRENT_TIME} />
        <BudgetVsSpending Chartdata={CATEGORY_SPENDING} />
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <CashflowChart data={MONTHLY_FLOW} time={CURRENT_TIME} />
        <DebtTable data={DEBT_DATA} currency={BALANCE_DATA.currency} />
      </div>
    </div>
  );
}
