import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BalanceData } from "@/lib/types";

interface BalanceCardProps {
  data: BalanceData;
}

export function BalanceCard({ data }: BalanceCardProps) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: data.currency,
  }).format(data.amount);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Current Balance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold tracking-tight">{formatted}</p>
      </CardContent>
    </Card>
  );
}
