import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  spent: {
    label: "Spent",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

interface BudgetVsSpendingProps {
  Chartdata: CategorySpend[];
}

export function BudgetVsSpending({ Chartdata }: BudgetVsSpendingProps) {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Budget Vs Spending</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart
            data={Chartdata}
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
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
                    <tspan>{data.budget}</tspan>
                    <tspan className="fill-muted-foreground">/</tspan>
                    <tspan>{data.value}</tspan>
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
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
