import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { CategorySpend } from "@/lib/types";

const chartConfig = {
  budget: {
    label: "Budget",
    color: "var(--chart-1)",
  },
  value: {
    label: "Spent",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface BudgetVsSpendingProps {
  Chartdata: CategorySpend[];
}

export function BudgetVsSpending({ Chartdata }: BudgetVsSpendingProps) {
  const totalSpent = Chartdata.reduce((sum, cat) => sum + cat.value, 0);
  const totalBudget = Chartdata.reduce((sum, cat) => sum + cat.budget, 0);
  const totalRemaining = totalBudget - totalSpent;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(n);

  return (
    <Card className="flex flex-col flex-1">
      <CardHeader className="items-center pb-4">
        <CardTitle>Budget Vs Spending</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
          <RadarChart
            data={Chartdata}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis
              dataKey="name"
              tick={({ x, y, textAnchor, index, ...props }) => {
                const data = Chartdata[index];
                const yValue = typeof y === "number" ? y : 0;
                return (
                  <text
                    x={x}
                    y={yValue + (index === 0 ? -10 : 0)}
                    textAnchor={textAnchor}
                    fontSize={13}
                    fontWeight={500}
                    {...props}
                  >
                    <tspan className="fill-muted-foreground">
                      {data.value}
                    </tspan>
                    <tspan className="fill-muted-foreground">/</tspan>
                    <tspan className="fill-muted-foreground">
                      {data.budget}
                    </tspan>
                    <tspan
                      x={x}
                      dy={"1rem"}
                      fontSize={12}
                      className="fill-muted-foreground"
                    >
                      {data.name}
                    </tspan>
                  </text>
                );
              }}
            />
            <PolarGrid />
            <Radar
              dataKey="budget"
              fill="var(--color-budget)"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="value"
              fill="var(--color-value)"
              fillOpacity={0.8}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Amount Spent</span>
            <span className="font-semibold text-destructive">
              {fmt(totalSpent)}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-muted-foreground">Remaining Budget</span>
            <span className="font-semibold text-primary">
              {fmt(totalRemaining)}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
