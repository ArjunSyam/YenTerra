import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import type { CategorySpend, CurrentTime } from "@/lib/types";

const chartConfig = {
  value: {
    label: "Value",
  },
  food: {
    label: "Food",
    color: "var(--chart-1)",
  },
  rent: {
    label: "Rent",
    color: "var(--chart-2)",
  },
  travel: {
    label: "Travel",
    color: "var(--chart-3)",
  },
  other: {
    label: "Other",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

interface SpendingSummaryProps {
  data: CategorySpend[];
  time: CurrentTime;
}

export function SpendingSummary({ data, time }: SpendingSummaryProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Spending by Category</CardTitle>
        <CardDescription>
          {time.currMonth} - {time.nextMonth} {time.year}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={data} dataKey="value" nameKey="name" stroke="0" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
