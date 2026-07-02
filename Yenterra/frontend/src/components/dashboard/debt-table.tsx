import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DebtEntry } from "@/lib/types";

interface DebtTableProps {
  data: DebtEntry[];
  currency: string;
}

export function DebtTable({ data, currency }: DebtTableProps) {
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency }).format(n);

  const totalOwed = data
    .filter((d) => d.direction === "owed")
    .reduce((sum, d) => sum + d.amount, 0);

  const totalOwe = data
    .filter((d) => d.direction === "owe")
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle>Debts & Lendings</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">{entry.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {entry.reason}
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {fmt(entry.amount)}
                </TableCell>
                <TableCell className="text-right">
                  {entry.direction === "owed" ? (
                    <span className="text-primary font-medium">
                      They owe me
                    </span>
                  ) : (
                    <span className="text-destructive font-medium">
                      I owe them
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">I owe</span>
            <span className="font-semibold text-destructive">
              {fmt(totalOwe)}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-muted-foreground">Owed to me</span>
            <span className="font-semibold text-primary">{fmt(totalOwed)}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
