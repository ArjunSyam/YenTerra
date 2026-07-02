import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import type { BudgetEntry } from "@/lib/types";

interface BudgetPieChartProps {
  data: BudgetEntry[];
}

const chartConfig = {
  value: {
    label: "Amount",
  },
  Spent: {
    label: "Spent",
    color: "var(--chart-1)",
  },
  Remaining: {
    label: "Remaining",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function BudgetPieChart({ data }: BudgetPieChartProps) {
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader className="items-center pb-0">
        <CardTitle>Budget vs Spent</CardTitle>
        <CardDescription>Current month overview</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              label
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing spent vs remaining budget
        </div>
      </CardFooter>
    </Card>
  );
}
